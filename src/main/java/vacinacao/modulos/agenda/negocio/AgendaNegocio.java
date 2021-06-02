package vacinacao.modulos.agenda.negocio;


import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import vacinacao.modulos.usuario.negocio.Usuario;
import vacinacao.modulos.vacina.negocio.Vacina;
import vacinacao.modulos.vacina.negocio.VacinaNegocio;
import vacinacao.util.ValidacaoException;
import vacinacao.util.HibernateUtil;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class AgendaNegocio {

    @Autowired
    private HibernateUtil util;

    @Autowired
    private VacinaNegocio vacinaNegocio;

    @Transactional
    @Cacheable("agenda.por.id")
    public Agenda findById(Long id) {
        Agenda agenda = (Agenda) util.findById(Agenda.class, id);

        if (agenda == null) {
            throw new ValidacaoException("Agenda deve existir.");
        }

        return agenda;
    }

    @Transactional
    @CacheEvict(
            value = {
                    "agenda.por.slug",
                    "agenda.por.id"
            },
            allEntries = true
    )
    public Agenda save(Agenda agenda) {

        if(!agenda.getJaEscolheuVacina() && agenda.getVacina() != null) {

            agenda.setJaEscolheuVacina(true);

            Vacina vacinaEscolhida = vacinaNegocio.findById(agenda.getVacina().getId());

            if(vacinaEscolhida.getDoses() > 1) {

                int qtdDoses = vacinaEscolhida.getDoses();

                Agenda ag = agenda;

                LocalDate localDate = ag.getData().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

                for(int i = 0 ; i < qtdDoses-1 ; i++) {

                    if(vacinaEscolhida.getPeriodicidade() == 1) {
                        localDate = localDate.plusDays(vacinaEscolhida.getIntervalo());
                    } else if(vacinaEscolhida.getPeriodicidade() == 2) {
                        localDate = localDate.plusWeeks(vacinaEscolhida.getIntervalo());
                    } else if(vacinaEscolhida.getPeriodicidade() == 3) {
                        localDate = localDate.plusMonths(vacinaEscolhida.getIntervalo());
                    } else if(vacinaEscolhida.getPeriodicidade() == 4) {
                        localDate = localDate.plusYears(vacinaEscolhida.getIntervalo());
                    }

                    Date date1 = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

                    Agenda agPersist = gerarProximaAgenda(ag, date1, i+2);

                    agPersist = (Agenda) util.save(agPersist);

                }
            }
        }

        if (agenda.getId() == null) {
            agenda = (Agenda) util.save(agenda);
        } else {
            agenda = registrarMudancaDeSituacao(agenda);
            agenda = (Agenda) util.getCurrentSession().merge(agenda);
        }

        return agenda;
    }

    @Transactional
    public void delete(Long agendaId) {
        util.delete(new Agenda(agendaId));
    }

    @Transactional
    @Cacheable("agendas.lista")
    public List<Agenda> listarTodas() {

        DetachedCriteria dc = DetachedCriteria.forClass(Agenda.class, "_");
        dc.addOrder(Order.asc("_.id"));
        dc.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);

        return (List<Agenda>) util.list(dc);
    }

    @Transactional
    @Cacheable("agendas.lista")
    public List<Agenda> listarAgendasDoUsuario(Usuario usuario) {

        DetachedCriteria dc = DetachedCriteria.forClass(Agenda.class, "_");
        dc.add(Restrictions.eq("usuario", usuario));
        dc.addOrder(Order.asc("_.id"));
        dc.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);

        return (List<Agenda>) util.list(dc);
    }

    public Agenda gerarProximaAgenda(Agenda agenda, Date data, int dose) {

        Agenda ag = new Agenda();

        ag.setData(data);
        ag.setSituacao(SituacaoEnum.AGENDADO);
        ag.setObservacoes(agenda.getObservacoes());
        ag.setUsuario(agenda.getUsuario());
        ag.setVacina(agenda.getVacina());
        ag.setJaEscolheuVacina(true);
        ag.setDose(dose);

        return ag;

    }

    @Transactional
    @Cacheable("agendas.lista")
    public Agenda registrarMudancaDeSituacao(Agenda agenda) {

        Agenda ag = findById(agenda.getId());

        if(ag.getSituacao() != agenda.getSituacao() && agenda.getSituacao() != SituacaoEnum.AGENDADO) {
            agenda.setDataSituacao(new Date());
        }

        return agenda;

    }

}


package vacinacao.modulos.vacina.negocio;


import vacinacao.util.ValidacaoException;
import vacinacao.util.HibernateUtil;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class VacinaNegocio {

    @Autowired
    private HibernateUtil util;

    @Transactional
    @Cacheable("vacina.por.id")
    public Vacina findById(Long id) {
        Vacina vacina = (Vacina) util.findById(Vacina.class, id);

        if (vacina == null) {
            throw new ValidacaoException("Vacina deve existir.");
        }

        return vacina;
    }

    @Transactional
    @CacheEvict(
            value = {
                    "vacina.por.slug",
                    "vacina.por.id"
            },
            allEntries = true
    )
    public Vacina save(Vacina vacina) {

        if (vacina.getId() == null || vacina.getId() == 0) {
            vacina = (Vacina) util.save(vacina);
        } else {
            vacina = (Vacina) util.getCurrentSession().merge(vacina);
        }

        return vacina;
    }

    @Transactional
    public void delete(Long vacinaId) {
        util.delete(new Vacina(vacinaId));
    }

    @Transactional
    @Cacheable("vacinas.lista")
    public List<Vacina> listarTodas() {

        DetachedCriteria dc = DetachedCriteria.forClass(Vacina.class, "_");
        dc.addOrder(Order.asc("_.id"));

        return (List<Vacina>) util.list(dc);
    }

}


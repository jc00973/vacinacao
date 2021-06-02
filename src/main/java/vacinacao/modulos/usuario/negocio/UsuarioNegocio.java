package vacinacao.modulos.usuario.negocio;


import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import vacinacao.modulos.agenda.negocio.Agenda;
import vacinacao.modulos.agenda.negocio.AgendaNegocio;
import vacinacao.modulos.alergia.negocio.Alergia;
import vacinacao.modulos.alergia.negocio.AlergiaNegocio;
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
public class UsuarioNegocio {

    @Autowired
    private HibernateUtil util;

    @Autowired
    private AgendaNegocio agendaNegocio;

    @Autowired
    private AlergiaNegocio alergiaNegocio;

    @Transactional
    @Cacheable("usuario.por.id")
    public Usuario findById(Long id) {
        Usuario usuario = (Usuario) util.findById(Usuario.class, id);

        if (usuario == null) {
            throw new ValidacaoException("Usuário deve existir.");
        }

        return usuario;
    }

    @Transactional
    @CacheEvict(
            value = {
                    "usuario.por.slug",
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Usuario save(Usuario usuario) {

        if (usuario.getId() == null || usuario.getId() == 0) {
            usuario = (Usuario) util.save(usuario);
        } else {
            usuario = (Usuario) util.getCurrentSession().merge(usuario);
        }

        return usuario;
    }

    @Transactional
    public void delete(Long usuarioId) {
        util.delete(new Usuario(usuarioId));
    }

    @Transactional
    @Cacheable("usuarios.lista")
    public List<Usuario> listarTodas() {

        DetachedCriteria dc = DetachedCriteria.forClass(Usuario.class, "_");
        dc.addOrder(Order.asc("_.id"));
        dc.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);

        return (List<Usuario>) util.list(dc);
    }

    @Transactional
    @CacheEvict(
            value = {
                    "usuario.por.slug",
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Agenda agendar(Usuario usuario) {

        Agenda agenda = new Agenda();

        agenda.setUsuario(usuario);

        Agenda ag = agendaNegocio.save(agenda);

        return ag;
    }

    @Transactional
    @CacheEvict(
            value = {
                    "usuario.por.slug",
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Usuario adicionarAlergia(Long idAlergia, Long idUsuario) {

        Alergia alergia = alergiaNegocio.findById(idAlergia);

        Usuario usuario = findById(idUsuario);

        Hibernate.initialize(usuario.getAlergias());

        List<Alergia> alergias = usuario.getAlergias();

        for(Alergia al : alergias) {
            if(al.getId() == idAlergia) {
                return usuario;
            }
        }

        usuario.adicionarAlergia(alergia);

        return usuario;
    }

    @Transactional
    public Usuario removerAlergia(Long idAlergia, Long idUsuario) {

        Alergia alergia = alergiaNegocio.findById(idAlergia);

        Usuario usuario = findById(idUsuario);

        Hibernate.initialize(usuario.getAlergias());

        List<Alergia> alergias = usuario.getAlergias();

        for(Alergia al : alergias) {
            if(al.getId() == idAlergia) {
                usuario.removerAlergia(al);
                return usuario;
            }
        }

        return usuario;
    }

}


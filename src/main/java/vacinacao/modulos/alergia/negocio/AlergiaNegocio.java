package vacinacao.modulos.alergia.negocio;

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
public class AlergiaNegocio {

    @Autowired
    private HibernateUtil util;

    @Transactional
    @Cacheable("alergia.por.id")
    public Alergia findById(Long id) {
        Alergia alergia = (Alergia) util.findById(Alergia.class, id);

        if (alergia == null) {
            throw new ValidacaoException("Alergia deve existir.");
        }

        return alergia;
    }

    @Transactional
    @CacheEvict(
            value = {
                    "alergia.por.slug",
                    "alergia.por.id"
            },
            allEntries = true
    )
    public Alergia save(Alergia alergia) {

        if (alergia.getId() == null) {
            alergia = (Alergia) util.save(alergia);
        } else {
            alergia = (Alergia) util.getCurrentSession().merge(alergia);
        }

        return alergia;
    }

    @Transactional
    public void delete(Long alergiaId) {
        util.delete(new Alergia(alergiaId));
    }

    @Transactional
    @Cacheable("alergias.lista")
    public List<Alergia> listarTodas() {

        DetachedCriteria dc = DetachedCriteria.forClass(Alergia.class, "_");
        dc.addOrder(Order.asc("_.id"));

        return (List<Alergia>) util.list(dc);
    }

}


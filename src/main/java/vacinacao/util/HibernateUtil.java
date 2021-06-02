package vacinacao.util;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public class HibernateUtil {

  @Autowired
  private SessionFactory sessionFactory;

  public Session getCurrentSession() {
    return sessionFactory.getCurrentSession();
  }

  @SuppressWarnings("rawtypes")
  public Object findById(Class entityClass, Serializable id) {
    return (Object) getCurrentSession().get(entityClass, id);
  }

  public Object save(Object e) {

    System.out.println("Salvando objeto..." + e.toString());

    Session session = getCurrentSession();

    Serializable id = session.save(e);
    session.flush();

    return findById(e.getClass(), id);
  }

  public void update(Object e) {

    getCurrentSession().update(e);
  }

  public void delete(Object e) {

    getCurrentSession().delete(e);
  }

  public Object uniqueResult(DetachedCriteria dc) {
    Session s = getCurrentSession();

    Criteria criteria = dc.getExecutableCriteria(s);

    return criteria.uniqueResult();
  }

  public List<?> list(DetachedCriteria dc) {
    return list(dc, null);
  }

  public List<?> list(DetachedCriteria dc, Integer qtdResultados) {
    Session s = getCurrentSession();

    Criteria c = dc.getExecutableCriteria(s);

    if (qtdResultados != null) {
      c.setMaxResults(qtdResultados);
    }

    return c.list();
  }

}

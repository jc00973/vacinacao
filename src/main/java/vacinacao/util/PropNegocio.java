package vacinacao.util;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PropNegocio {
	
	@Autowired
	private HibernateUtil hibernateUtil;
	
	public Prop findById(PropEnum propEnum) {
		DetachedCriteria dc = DetachedCriteria.forClass(Prop.class);
		dc.add(Restrictions.eq("id", propEnum.toString()));
		
		return (Prop) hibernateUtil.uniqueResult(dc);
	}
	
	public Prop findById(String id) {
		DetachedCriteria dc = DetachedCriteria.forClass(Prop.class);
		dc.add(Restrictions.eq("id", id));
		
		return (Prop) hibernateUtil.uniqueResult(dc);
	}
	
	public String getView(String pagina) {
		return "/vacinacao/pages" +pagina;
	}

}
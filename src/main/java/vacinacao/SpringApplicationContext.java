package vacinacao;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class SpringApplicationContext implements ApplicationContextAware {

	private static ApplicationContext CONTEXT;

	/**
	 * This method is called from within the ApplicationContext once it is 
	 * done starting up, it will stick a reference to itself into this bean.
	 * @param context a reference to the ApplicationContext.
	 */
	public void setApplicationContext(ApplicationContext context) throws BeansException {
		CONTEXT = context;
	}
	
	public static <T> T getBean(Class<T> clazz) {
		return CONTEXT.getBean(clazz);
	}
	
	public static Boolean ehAmbienteTeste() {
		Environment env = SpringApplicationContext.getBean(Environment.class);
		return "teste".equals(env.getProperty("ambiente"));
	}
}
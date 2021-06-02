package vacinacao;

import org.apache.log4j.Logger;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

	static Logger logger = Logger.getLogger(ApplicationStartup.class);
	
	@Override
	public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
		
		if( SpringApplicationContext.ehAmbienteTeste() ) {
			logger.info("executando em modo teste");
			return;
		}
		
	}

}

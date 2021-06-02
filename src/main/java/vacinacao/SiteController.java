package vacinacao;

import vacinacao.util.PropNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@Transactional
public class SiteController {

	@Autowired
	private PropNegocio propNegocio;

	@RequestMapping("/")
	public String index(HttpServletRequest request) {
		return "/vacinacao/usuarios";
	}
	
	@RequestMapping("/404")
	public String page404(HttpServletRequest request) {
		return propNegocio.getView("/404");
	}


}
package vacinacao;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@Transactional
public class SiteController {

	@RequestMapping("/")
	public String index(HttpServletRequest request) {
		return "/vacinacao/usuarios";
	}
	
	@RequestMapping("/404")
	public String page404(HttpServletRequest request) {
		return "/vacinacao/pages/404";
	}


}
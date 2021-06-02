package vacinacao.modulos.vacina.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;

@Controller
public class VacinaController {

    @GetMapping("/vacinacao/vacinas")
    public String busca(HttpServletRequest request) {
        return "/vacinacao/vacinas";
    }


    @GetMapping("/vacinacao/vacinas/{id}")
    public String carregarVacinaEspecifica(@PathVariable Long id, HttpServletRequest request) {

        request.setAttribute("vacinaId", id);

        return "/vacinacao/vacina-form";
    }

}


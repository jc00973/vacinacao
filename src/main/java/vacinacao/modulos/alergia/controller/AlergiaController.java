package vacinacao.modulos.alergia.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;

@Controller
public class AlergiaController {

    @GetMapping("/vacinacao/alergias")
    public String busca(HttpServletRequest request) {
        return "/vacinacao/alergias";
    }


    @GetMapping("/vacinacao/alergias/{id}")
    public String carregarAlergiaEspecifica(@PathVariable Long id, HttpServletRequest request) {

        request.setAttribute("alergiaId", id);

        return "/vacinacao/alergia-form";
    }

}


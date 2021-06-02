package vacinacao.modulos.agenda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import vacinacao.modulos.vacina.negocio.Vacina;
import vacinacao.modulos.vacina.negocio.VacinaNegocio;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class AgendaController {

    @Autowired
    VacinaNegocio vacinaNegocio;

    @GetMapping("/vacinacao/agendas")
    public String busca(HttpServletRequest request) {
        return "/vacinacao/agendas";
    }


    @GetMapping("/vacinacao/agendas/{id}")
    public String carregarAgendaEspecifica(@PathVariable Long id, HttpServletRequest request) {

        request.setAttribute("agendaId", id);

        List<Vacina> vacinas = vacinaNegocio.listarTodas();

        request.setAttribute("vacinas", vacinas);

        return "/vacinacao/agenda-form";
    }

}


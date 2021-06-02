package vacinacao.modulos.agenda.controller;

import vacinacao.modulos.agenda.negocio.Agenda;
import vacinacao.modulos.agenda.negocio.AgendaNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AgendaRestController {

    @Autowired
    AgendaNegocio agendaNegocio;

    @GetMapping("/api/agendas/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "agenda.por.id"
            },
            allEntries = true
    )
    public Object findById(@PathVariable Long id) {

        Agenda agenda = agendaNegocio.findById(id);

        return agenda;
    }

    @GetMapping("/api/agendas")
    @ResponseBody
    @CacheEvict(
            value = {
                    "agendas.lista"
            },
            allEntries = true
    )
    public Object findAllAgendas() {

        List<Agenda> agendas = agendaNegocio.listarTodas();

        return agendas;
    }

    @PostMapping("/api/agendas")
    @ResponseBody
    public Object salvarAgenda(@RequestBody Agenda agenda) throws Exception {

        agenda = agendaNegocio.save(agenda);

        return agenda;
    }

    @GetMapping("/api/agendas/deletar/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "agenda.por.id"
            },
            allEntries = true
    )
    public Object deleteById(@PathVariable Long id) {

        Agenda agenda = agendaNegocio.findById(id);

        agendaNegocio.delete(id);

        return agenda;
    }


}

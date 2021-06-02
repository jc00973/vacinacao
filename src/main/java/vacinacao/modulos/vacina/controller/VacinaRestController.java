package vacinacao.modulos.vacina.controller;

import vacinacao.modulos.vacina.negocio.Vacina;
import vacinacao.modulos.vacina.negocio.VacinaNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VacinaRestController {

    @Autowired
    VacinaNegocio vacinaNegocio;

    @GetMapping("/api/vacinas/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "vacina.por.id"
            },
            allEntries = true
    )
    public Object findById(@PathVariable Long id) {

        Vacina vacina = vacinaNegocio.findById(id);

        return vacina;
    }

    @GetMapping("/api/vacinas")
    @ResponseBody
    @CacheEvict(
            value = {
                    "vacinas.lista"
            },
            allEntries = true
    )
    public Object findAllVacinas() {

        List<Vacina> vacinas = vacinaNegocio.listarTodas();

        return vacinas;
    }

    @PostMapping("/api/vacinas")
    @ResponseBody
    public Object salvarVacina(@RequestBody Vacina vacina) throws Exception {

        vacina = vacinaNegocio.save(vacina);

        return vacina;
    }

    @GetMapping("/api/vacinas/deletar/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "vacina.por.id"
            },
            allEntries = true
    )
    public Object deleteById(@PathVariable Long id) {

        Vacina vacina = vacinaNegocio.findById(id);

        vacinaNegocio.delete(id);

        return vacina;
    }


}

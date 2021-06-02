package vacinacao.modulos.alergia.controller;

import vacinacao.modulos.alergia.negocio.Alergia;
import vacinacao.modulos.alergia.negocio.AlergiaNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AlergiaRestController {

    @Autowired
    AlergiaNegocio alergiaNegocio;

    @GetMapping("/api/alergias/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "alergia.por.id",
                    "recurso",
                    "recurso.arquivos"
            },
            allEntries = true
    )
    public Object findById(@PathVariable Long id) {

        Alergia alergia = alergiaNegocio.findById(id);

        return alergia;
    }

    @GetMapping("/api/alergias")
    @ResponseBody
    @CacheEvict(
            value = {
                    "alergias.lista"
            },
            allEntries = true
    )
    public Object findAllAlergias() {

        List<Alergia> alergias = alergiaNegocio.listarTodas();

        return alergias;
    }

    @PostMapping("/api/alergias")
    @ResponseBody
    public Object salvarAlergia(@RequestBody Alergia alergia) throws Exception {

        alergia = alergiaNegocio.save(alergia);

        return alergia;
    }

    @GetMapping("/api/alergias/deletar/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "alergia.por.id"
            },
            allEntries = true
    )
    public Object deleteById(@PathVariable Long id) {

        Alergia alergia = alergiaNegocio.findById(id);

        alergiaNegocio.delete(id);

        return alergia;
    }


}

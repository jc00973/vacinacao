package vacinacao.modulos.usuario.controller;

import vacinacao.modulos.agenda.negocio.Agenda;
import vacinacao.modulos.agenda.negocio.AgendaNegocio;
import vacinacao.modulos.alergia.negocio.AlergiaNegocio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.web.bind.annotation.*;
import vacinacao.modulos.usuario.negocio.Usuario;
import vacinacao.modulos.usuario.negocio.UsuarioNegocio;

import java.util.List;

@RestController
public class UsuarioRestController {

    @Autowired
    UsuarioNegocio usuarioNegocio;

    @Autowired
    AgendaNegocio agendaNegocio;

    @Autowired
    AlergiaNegocio alergiaNegocio;

    @GetMapping("/api/usuarios/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Object findById(@PathVariable Long id) {

        Usuario usuario = usuarioNegocio.findById(id);

        return usuario;
    }

    @GetMapping("/api/usuarios/agendas/{idUsuario}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Object findAgendasByUserId(@PathVariable Long idUsuario) {

        Usuario usuario = usuarioNegocio.findById(idUsuario);

        List<Agenda> agendas = agendaNegocio.listarAgendasDoUsuario(usuario);

        return agendas;
    }

    @GetMapping("/api/usuarios")
    @ResponseBody
    @CacheEvict(
            value = {
                    "usuarios.lista"
            },
            allEntries = true
    )
    public Object findAllUsuarios() {

        List<Usuario> usuarios = usuarioNegocio.listarTodas();

        return usuarios;
    }

    @PostMapping("/api/usuarios")
    @ResponseBody
    public Object salvarUsuario(@RequestBody Usuario usuario) throws Exception {

        usuario = usuarioNegocio.save(usuario);

        return usuario;
    }

    @GetMapping("/api/usuarios/deletar/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "agenda.por.id"
            },
            allEntries = true
    )
    public Object deleteById(@PathVariable Long id) {

        Usuario usuario = usuarioNegocio.findById(id);

        usuarioNegocio.delete(id);

        return usuario;
    }

    @GetMapping("/api/usuarios/agendar/{id}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "agenda.por.id"
            },
            allEntries = true
    )
    public Object agendarById(@PathVariable Long id) {

        Usuario usuario = usuarioNegocio.findById(id);

        Agenda agenda = usuarioNegocio.agendar(usuario);

        return agenda;
    }


    @GetMapping("/api/usuarios/adicionar-alergia/{idAlergia}/{idUsuario}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Object adicionarAlergia(@PathVariable Long idAlergia, @PathVariable Long idUsuario) {

        Usuario usuario = usuarioNegocio.adicionarAlergia(idAlergia, idUsuario);

        return usuario;
    }

    @GetMapping("/api/usuarios/remover-alergia/{idAlergia}/{idUsuario}")
    @ResponseBody
    @CacheEvict(
            value = {
                    "usuario.por.id"
            },
            allEntries = true
    )
    public Object removerAlergia(@PathVariable Long idAlergia, @PathVariable Long idUsuario) {

        Usuario usuario = usuarioNegocio.removerAlergia(idAlergia, idUsuario);

        return usuario;
    }

}

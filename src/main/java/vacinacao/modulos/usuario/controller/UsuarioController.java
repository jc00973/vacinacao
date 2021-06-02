package vacinacao.modulos.usuario.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import vacinacao.modulos.alergia.negocio.Alergia;
import vacinacao.modulos.alergia.negocio.AlergiaNegocio;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class UsuarioController {

    @Autowired
    private AlergiaNegocio alergiaNegocio;

    @GetMapping("/vacinacao/usuarios")
    public String busca(HttpServletRequest request) {
        return "/vacinacao/usuarios";
    }


    @GetMapping("/vacinacao/usuarios/{id}")
    public String carregarUsuarioEspecifico(@PathVariable Long id, HttpServletRequest request) {

        request.setAttribute("usuarioId", id);

        List<Alergia> alergias = alergiaNegocio.listarTodas();

        request.setAttribute("alergias", alergias);

        return "/vacinacao/usuario-form";
    }

}


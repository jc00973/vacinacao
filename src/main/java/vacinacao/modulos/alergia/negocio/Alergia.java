package vacinacao.modulos.alergia.negocio;

import vacinacao.modulos.usuario.negocio.Usuario;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="alergia")
public class Alergia implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 40)
    private String nome;

    @ManyToMany(mappedBy = "alergias")
    List<Usuario> usuarios = new ArrayList<>();

    public Alergia() {
    }

    public Alergia(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
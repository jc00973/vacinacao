package vacinacao.modulos.usuario.negocio;

import vacinacao.modulos.agenda.negocio.Agenda;
import vacinacao.modulos.alergia.negocio.Alergia;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="usuario")
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 60)
    private String nome;

    @Column
    private Date dataNascimento;

    @Column
    private char sexo;

    @Column(length = 60)
    private String logradouro;

    @Column
    private double numero;

    @Column(length = 40)
    private String setor;

    @Column(length = 40)
    private String cidade;

    @Column(length = 2)
    private String uf;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuarios_alergias",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn (name = "alergia_id"))
    private List<Alergia> alergias = new ArrayList<>();

    @OneToMany
    private List<Agenda> agendas = new ArrayList<>();

    public Usuario() {
    }

    public Usuario(Long id) {
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

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public double getNumero() {
        return numero;
    }

    public void setNumero(double numero) {
        this.numero = numero;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public void adicionarAlergia(Alergia a) {
        this.alergias.add(a);
    }

    public void removerAlergia(Alergia a) {
        this.alergias.remove(a);
    }

    public List<Alergia> getAlergias() {
        return alergias;
    }

//    public void setAlergias(List<Alergia> alergias) {
//        this.alergias = alergias;
//    }

}
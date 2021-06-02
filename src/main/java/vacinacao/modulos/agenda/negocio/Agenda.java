package vacinacao.modulos.agenda.negocio;

import vacinacao.modulos.usuario.negocio.Usuario;
import vacinacao.modulos.vacina.negocio.Vacina;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="agenda")
public class Agenda implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Date data;

    @Column
    private String hora;

    @Column
    private SituacaoEnum situacao = SituacaoEnum.AGENDADO;

    @Column
    private Date dataSituacao = null;

    @Column(length = 200)
    private String observacoes;

    @ManyToOne
    @JoinColumn
    private Usuario usuario;

    @ManyToOne
    @JoinColumn
    private Vacina vacina;

    @Column
    private Boolean jaEscolheuVacina = false;

    @Column
    private int dose = 1;

    public Agenda() {
    }

    public Agenda(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public SituacaoEnum getSituacao() {
        return situacao;
    }

    public void setSituacao(SituacaoEnum situacao) {
        this.situacao = situacao;
    }

    public Date getDataSituacao() {
        return dataSituacao;
    }

    public void setDataSituacao(Date dataSituacao) {
        this.dataSituacao = dataSituacao;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Vacina getVacina() {
        return vacina;
    }

    public void setVacina(Vacina vacina) {
        this.vacina = vacina;
    }

    public Boolean getJaEscolheuVacina() {
        return jaEscolheuVacina;
    }

    public void setJaEscolheuVacina(Boolean jaEscolheuVacina) {
        this.jaEscolheuVacina = jaEscolheuVacina;
    }

    public int getDose() {
        return dose;
    }

    public void setDose(int dose) {
        this.dose = dose;
    }
}
package vacinacao.modulos.agenda.negocio;

public enum SituacaoEnum {

    AGENDADO("Agendado"),
    CANCELADO("Cancelado"),
    REALIZADO("Realizado")
    ;

    private String nome;

    private SituacaoEnum(String nome){
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public static SituacaoEnum fromString(String status) {
        for (SituacaoEnum item : values()) {
            if( item.nome.equals(status) || item.toString().equals(status)){
                return item;
            }
        }
        return null;
    }
}

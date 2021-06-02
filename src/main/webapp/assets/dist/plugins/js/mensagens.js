/**
 *
 */



var mensagens = {
    		'email-vazio': 'E-mail deve ser preenchido.',
    		'nome-vazio': 'Nome deve ser preenchido.',
    		'telefone-vazio': 'Telefone deve ser preenchido.',
    		'assunto-vazio': 'Assunto deve ser preenchido.',
    		'cep-vazio': 'CEP deve ser preenchido.',
    		'estado-vazio': 'Estado deve ser preenchido.',
    		'cidade-vazio': 'Cidade deve ser preenchido.',
    		'endereco-vazio': 'Endere\u00e7o deve ser preenchido.',
    		'bairro-vazio': 'Bairro deve ser preenchido.',
    		'numero-vazio': 'Numero deve ser preenchido.',
    		'complemento-vazio': 'Complemento deve ser preenchido.',
    		'mensagem-vazio': 'Complemento deve ser preenchido.',
    		'carrinho-vazio': 'Seu carrinho est\u00e1 vazio.',

    		'produto-invalido': 'Produto inv\u00e1lido.',
    		'produto-sem-estoque': 'Produto indispon\u00edvel no momento.',

    		'email-invalido': 'E-mail deve ser v\u00e1lido.',
            'codigo-invalido':'Sequ\u00eancia de caracteres incorreta, por favor tente novamente.',

    		'email-nao-cadastrado': 'E-mail n\u00e3o cadastrado',
    		'usuario-nao-logado': 'Usu\u00e1rio n\u00e3o logado, fa\u00e7a o seu login!',

    		'email-enviado': 'E-mail com senha enviado com sucesso.',
    		'ok': 'Formul\u00e1rio enviado com sucesso.',
    		'ok-email': 'E-mail cadastrado com sucesso.',
    		'ok-cadastro': 'Cadastro realizado com sucesso.',
    		'ok-lista-casamento': 'Lista de casamento cadastrada com sucesso, agora \u00e9 s\u00f3 voc\u00ea escolher os produtos.',
    		'ok-email-espera': 'Recebemos seu email, assim que o produto estiver dispon\u00edvel em nosso estoque avisaremos a voc\u00ea.',
    		'ok-endereco': 'Endere\u00e7o cadastrado com sucesso.',

    		'lista-inexistente': 'Lista de compras inexistente, escolha uma lista',
    		'tamanho-inexistente': 'Tamanho n\u00e3o encontrado, atualize a p\u00e1gina',

    		'email-registrado': 'E-mail j\u00e1 cadastrado em nosso sistema.',
    		'preencha-seus-dados': 'Preencha seus dados.',
    		'dados-incorretos': 'E-mail e/ou senha incorretos.',

    		'erro-cep': 'O cep inv\u00e1lido.',
    		'erro-cep': 'O cep do endere\u00e7o deve ser o mesmo que cep do c\u00e1lculo de frete do carrinho.',
    		'erro-pedido': 'Ocorreu um erro ao processar o pedido, por favor verifique seus produtos e tente novamente.',

    		'efetue-login': 'Para acessar a \u00e1rea restrita voc\u00ea precisa estar logado.',
    }


function informarMensagemErro(error){
	var mensagem;
	if(error){
		mensagem = mensagens[error.erro];
	}
	if(mensagem != null){
		informarMensagemAtencao("Aten\u00e7\u00e3o", mensagem);
	}else {
		informarMensagemAtencao("Aten\u00e7\u00e3o", "Atualize a p\u00e1gina!");
	}
}
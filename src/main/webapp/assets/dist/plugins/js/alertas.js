/**
 *
 */


function alertaErro(titulo, mensagem) {

    swal(titulo, mensagem, "error")
}

function informarMensagemAtencao(titulo, mensagem) {

    swal(titulo, mensagem, "warning")
}

function alertaDadosInvalidos(mensagem) {

    swal("Dados inv\u00e1lidos", mensagem, "warning")
}

function alertaSucesso(titulo, mensagem) {

    swal({
        title: titulo,
        text: mensagem,
        confirmButtonColor: '#d80b34',
        type: "success"
    });
}

function alertaSucessoRedirecionar(titulo, urlConfirmar, texto) {

    swal({
        title: titulo,
        text: texto,
        confirmButtonColor: '#d80b34',
        type: "success",
        closeOnConfirm: true
    }).then(function () {
        window.location.href = urlConfirmar;
    });
}

function alertaConfirmar(titulo, urlConfirmar, txtConfirmar, txtCancelar) {

    swal({
        title: titulo,
        showCancelButton: true,
        confirmButtonText: txtConfirmar,
        cancelButtonText: txtCancelar,
        closeOnConfirm: true
    }).then(function () {
    }, function (dismiss) {
        if (dismiss == 'cancel') {
            window.location.assign(urlConfirmar);
        }
    });
}

function alertaProdutoCarrinho(titulo, urlConfirmar, texto, txtConfirmar, txtCancelar) {

    swal({
        title: titulo,
        text: texto,
        type: "success",
        showCancelButton: true,
        confirmButtonText: txtConfirmar,
        confirmButtonColor: '#d80b34',
        cancelButtonText: txtCancelar,
        closeOnConfirm: true
    }).then(function () {
    }, function (dismiss) {
        if (dismiss == 'cancel') {
            window.location.assign(urlConfirmar, "_self");
        }
    });
}

(function () {
    var _alert = window.alert;// <-- Reference
    window.alert = function (str) {

        try {
            alertaSucesso(str, '');
        } catch (e) {
            _alert(str);
        }

    };
})();
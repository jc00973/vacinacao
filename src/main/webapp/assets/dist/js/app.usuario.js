var usuarioApp = angular.module('usuarioApp', []);

usuarioApp.controller('UsuarioController', function ($scope, $http) {

    $scope.usuarios = [];
    $scope.usuario = {};

    $scope.usuario.alergias = [];
    $scope.usuario.agendas = [];

    $scope.buscarTodosUsuarios = () => {
        buscarTodosUsuarios($scope, $http);
    };

    $scope.buscarAgendasDoUsuario = () => {
        buscarAgendasDoUsuario($scope, $http);
    };

    $scope.buscarUsuarioPorId = () => {
        buscarUsuarioPorId($scope, $http);
    };

    $scope.salvarUsuario = (isIn) => {
        salvarUsuario($scope, $http, isIn);
    };

    $scope.deletarUsuario = (usuarioId) => {
        deletarUsuario($scope, $http, usuarioId);
    };

    $scope.limparFormulario = () => {
        limparFormulario($scope);
    };

    $scope.agendarUsuario = (usuarioId) => {
        agendarUsuario($scope, $http, usuarioId);
    };

    $scope.adicionarAlergia = (alergiaId) => {
        adicionarAlergia($scope, $http, alergiaId);
    };

    $scope.removerAlergia = (alergiaId) => {
        removerAlergia($scope, $http, alergiaId);
    };

    $(document).ready(function () {
        $scope.buscarUsuarioPorId();
        $scope.buscarAgendasDoUsuario();
    })


});


buscarUsuarioPorId = ($scope, $http) => {

    if ($scope.usuario.id === "0" || $scope.usuario.id === undefined) {
        return;
    }

    $http.get("/api/usuarios/" + $scope.usuario.id)
        .success(function (res) {
            console.log(res);
            $scope.usuario = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

buscarTodosUsuarios = ($scope, $http) => {

    $http.get("/api/usuarios")
        .success(function (res) {
            $scope.usuarios = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};


buscarAgendasDoUsuario = ($scope, $http) => {

    if ($scope.usuario.id === "0" || $scope.usuario.id === undefined) {
        return;
    }

    $http.get("/api/usuarios/agendas/" + $scope.usuario.id)
        .success(function (res) {
            $scope.usuario.agendas = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};


salvarUsuario = ($scope, $http, isIn) => {

    $http.post("/api/usuarios", $scope.usuario)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/usuarios", 'Cadastro realizado!');
        }).error(function (err) {
            if(err != null) {
                alertaErro("erro", err.erro);
            }
    });
};


adicionarAlergia = ($scope, $http, alergiaId) => {

    $http.get("/api/usuarios/adicionar-alergia/" + alergiaId + "/" + $scope.usuario.id)
        .success(function (res) {
            $scope.usuario.alergias = res.alergias;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

removerAlergia = ($scope, $http, alergiaId) => {

    console.log("alergia: " + alergiaId);

    $http.get("/api/usuarios/remover-alergia/" + alergiaId + "/" + $scope.usuario.id)
        .success(function (res) {
            $scope.usuario.alergias = res.alergias;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

deletarUsuario = ($scope, $http, usuarioId) => {

    $http.get("/api/usuarios/deletar/" + usuarioId)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/usuarios", 'Cadastro deletado!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("Falha:", err.erro);
        }
    });
};

agendarUsuario = ($scope, $http, usuarioId) => {

    $http.get("/api/usuarios/agendar/" + usuarioId)
        .success(function (res) {
            console.log("deu certo!");
            console.log(res);
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/agendas/"+res.id, 'Preencha o agendamento!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("Falha:", err.erro);
        }
    });
};

limparFormulario = ($scope) => {
    $scope.usuario = {};
};



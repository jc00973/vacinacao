var agendaApp = angular.module('agendaApp', []);

agendaApp.controller('AgendaController', function ($scope, $http) {

    $scope.agendas = [];
    $scope.agendasAux = [];
    $scope.agenda = {};

    $scope.situacoes = ["AGENDADO", "CANCELADO", "REALIZADO"];

    $scope.buscarTodasAgendas = () => {
        buscarTodasAgendas($scope, $http);
    };

    $scope.buscarAgendaPorId = () => {
        buscarAgendaPorId($scope, $http);
    };

    $scope.salvarAgenda = () => {
        salvarAgenda($scope, $http);
    };

    $scope.deletarAgenda = (agendaId) => {
        deletarAgenda($scope, $http, agendaId);
    };

    $scope.selecionarVacina = (vacinaId) => {
        selecionarVacina($scope, $http, vacinaId);
    };

    $scope.limparFormulario = () => {
        limparFormulario($scope);
    };

    $scope.filtrarPorSituacao = (situacao) => {
        filtrarPorSituacao($scope, $http, situacao);
    };

    $scope.filtrarPorData = () => {
        filtrarPorData($scope, $http);
    };

    $scope.limparFiltros = () => {
        limparFiltros($scope, $http);
    };

    $(document).ready(function () {
        $scope.buscarAgendaPorId();
    })

});


buscarAgendaPorId = ($scope, $http) => {

    if ($scope.agenda.id === "0" || $scope.agenda.id === undefined) {
        return;
    }

    $http.get("/api/agendas/" + $scope.agenda.id)
        .success(function (res) {
            $scope.agenda = res;
            console.log("agenda:");
            console.log($scope.agenda);
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

buscarTodasAgendas = ($scope, $http) => {

    $http.get("/api/agendas")
        .success(function (res) {
            $scope.agendas = res;
            $scope.agendasAux = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

salvarAgenda = ($scope, $http) => {

    console.log("data: ", $scope.agenda.data);

    // var dataFormatada = $filter('date')(new Date($scope.agenda.data),'yyyy-MM-dd');
    //
    // console.log("data formatada: ", dataFormatada);

    $http.post("/api/agendas", $scope.agenda)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/agendas", 'Agenda cadastrada!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("erro", err.erro);
        }
    });
};

deletarAgenda = ($scope, $http, agendaId) => {

    $http.get("/api/agendas/deletar/" + agendaId)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/agendas", 'Agenda deletada!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("Falha:", err.erro);
        }
    });
};

selecionarVacina = ($scope, $http, vacinaId) => {

    $scope.agenda.vacina = {};

    $scope.agenda.vacina.id = vacinaId;

};

limparFormulario = ($scope) => {
    $scope.agenda = {};
};

filtrarPorSituacao = ($scope, $http, situacao) => {

    var agendasCanceladas;

    if(situacao === 'AGENDADO') {
        agendasCanceladas = $scope.agendasAux.filter(filtrarAgendados);
    } else if(situacao === 'CANCELADO') {
        agendasCanceladas = $scope.agendasAux.filter(filtrarCancelados);
    } else if(situacao === 'REALIZADO') {
        agendasCanceladas = $scope.agendasAux.filter(filtrarRealizados);
    }

    $scope.agendas = agendasCanceladas;

};

filtrarAgendados = (obj) => {

    return 'situacao' in obj && obj.situacao === 'AGENDADO';

};

filtrarCancelados = (obj) => {

    return 'situacao' in obj && obj.situacao === 'CANCELADO';

};

filtrarRealizados = (obj) => {

    return 'situacao' in obj && obj.situacao === 'REALIZADO';

};

limparFiltros = ($scope, $http) => {

    $scope.agendas = $scope.agendasAux;

};

filtrarPorData = ($scope, $http) => {

    var agendasHoje;

    agendasHoje = $scope.agendasAux.filter(filtrarHoje);

    agendasHoje.sort(ordenarPorSituacao);

    $scope.agendas = agendasHoje;

};

filtrarHoje = (obj) => {

    var hoje = new Date();

    hoje.setHours(0,0,0,0);

    return new Date(obj.data).getTime() === hoje.getTime();

};

ordenarPorSituacao = (a, b) => {

    var aAux;
    var bAux;

    if(a.situacao === 'AGENDADO') {
        aAux = 1;
    } else if(a.situacao === 'REALIZADO') {
        aAux = 2;
    } else if (a.situacao === 'CANCELADO') {
        aAux = 3;
    }

    if(b.situacao === 'AGENDADO') {
        bAux = 1;
    } else if(b.situacao === 'REALIZADO') {
        bAux = 2;
    } else if (b.situacao === 'CANCELADO') {
        bAux = 3;
    }

    if (aAux < bAux)
        return -1;
    if (aAux > bAux)
        return 1;
    return 0;

};

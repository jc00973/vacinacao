var vacinaApp = angular.module('vacinaApp', []);

vacinaApp.controller('VacinaController', function ($scope, $http) {

    $scope.vacinas = [];
    $scope.vacina = {};

    $scope.buscarTodasVacinas = () => {
        buscarTodasVacinas($scope, $http);
    };

    $scope.buscarVacinaPorId = () => {
        buscarVacinaPorId($scope, $http);
    };

    $scope.salvarVacina = () => {
        salvarVacina($scope, $http);
    };

    $scope.deletarVacina = (vacinaId) => {
        deletarVacina($scope, $http, vacinaId);
    };

    $scope.limparFormulario = () => {
        limparFormulario($scope);
    };

    $(document).ready(function () {
        $scope.buscarVacinaPorId();
    })


});


buscarVacinaPorId = ($scope, $http) => {

    if ($scope.vacina.id === "0" || $scope.vacina.id === undefined) {
        return;
    }

    $http.get("/api/vacinas/" + $scope.vacina.id)
        .success(function (res) {
            $scope.vacina = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

buscarTodasVacinas = ($scope, $http) => {

    $http.get("/api/vacinas")
        .success(function (res) {
            $scope.vacinas = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

salvarVacina = ($scope, $http) => {

    $http.post("/api/vacinas", $scope.vacina)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/vacinas", 'Vacina cadastrada!');
        }).error(function (err) {
            if(err != null) {
                alertaErro("Falha:", err.erro);
            }
    });
};

deletarVacina = ($scope, $http, vacinaId) => {

    console.log("vacinaId: ", vacinaId);

    $http.get("/api/vacinas/deletar/" + vacinaId)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/vacinas", 'Vacina deletada!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("Falha:", err.erro);
        }
    });
};


limparFormulario = ($scope) => {
    $scope.vacina = {};
};



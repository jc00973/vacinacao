var alergiaApp = angular.module('alergiaApp', []);

alergiaApp.controller('AlergiaController', function ($scope, $http) {

    $scope.alergias = [];
    $scope.alergia = {};

    $scope.buscarTodasAlergias = () => {
        buscarTodasAlergias($scope, $http);
    };

    $scope.buscarAlergiaPorId = () => {
        buscarAlergiaPorId($scope, $http);
    };

    $scope.salvarAlergia = () => {
        salvarAlergia($scope, $http);
    };

    $scope.deletarAlergia = (alergiaId) => {
        deletarAlergia($scope, $http, alergiaId);
    };

    $scope.limparFormulario = () => {
        limparFormulario($scope);
    };

    $(document).ready(function () {
        $scope.buscarAlergiaPorId();
    })


});


buscarAlergiaPorId = ($scope, $http) => {

    if ($scope.alergia.id === "0" || $scope.alergia.id === undefined) {
        return;
    }

    $http.get("/api/alergias/" + $scope.alergia.id)
        .success(function (res) {
            $scope.alergia = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

buscarTodasAlergias = ($scope, $http) => {

    $http.get("/api/alergias")
        .success(function (res) {
            $scope.alergias = res;
        }).error(function (err) {
        if(err != null) {
            alertaErro(err.erro);
        }
    });

};

salvarAlergia = ($scope, $http) => {

    $http.post("/api/alergias", $scope.alergia)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/alergias", 'Alergia cadastrada!');
        }).error(function (err) {
            if(err != null) {
                alertaErro("erro", err.erro);
            }
    });
};

deletarAlergia = ($scope, $http, alergiaId) => {

    $http.get("/api/alergias/deletar/" + alergiaId)
        .success(function (res) {
            alertaSucessoRedirecionar('Sucesso', "/vacinacao/alergias", 'Alergia deletada!');
        }).error(function (err) {
        if(err != null) {
            alertaErro("Falha:", err.erro);
        }
    });
};

limparFormulario = ($scope) => {
    $scope.alergia = {};
};



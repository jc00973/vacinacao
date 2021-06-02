<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Cadastro de agenda</title>

    <jsp:include page="inc/include-head.jsp" flush="true"/>

</head>
<style>
    .wrapper-fixed-buttons {
        width: 1100px;
        height: 50px;
        position: fixed;
        bottom: 0;
        right: -233px;
        z-index: 10000;
    }

    .feather-sized {
        width: 16px;
        height: 16px;
    }


    .btn-info {
        width: 180px;
        margin-bottom: 15px;
    }

</style>

<body>

<jsp:include page="inc/include-header.jsp" flush="true"/>

<jsp:include page="inc/include-sidebar.jsp" flush="true"/>


<div id="content" class="pmd-content" ng-controller="AgendaController" ng-app="agendaApp" id="agendaApp"
     ng-init="agenda.id='${agendaId}'">

    <div class="container-fluid">

        <h1 class="section-title">
            <span>Agendas</span>
        </h1><!-- End Title -->

        <!--breadcrum start-->
        <ol class="breadcrumb text-left">
            <li><a href="http://localhost:8080/vacinacao/agendas">Agendas</a></li>
            <li class="active">Edi&ccedil;&atilde;o</li>
        </ol><!--breadcrum end-->


        <div class="pmd-card pmd-z-depth">
            <div class="pmd-card-body">
                <div class="row" id="wrapper-dados-basicos">

                    <h2 class="text-center">Informações</h2>

                    <div class="col-md-12">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <label style="font-size: 18px;" ng-show="agenda.usuario"> Usuário: {{agenda.usuario.nome}} </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <label style="font-size: 18px;" ng-hide="agenda.data"> Data: </label>
                                <input type="date" class="form-control" id="data" ng-model="agenda.data" ng-hide="agenda.data"/>
                                <label style="font-size: 18px;" ng-show="agenda.data"> Data: {{agenda.data | date:'dd/MM/yyyy'}} </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <label style="font-size: 18px;" ng-show="agenda.vacina"> Vacina Id: {{agenda.vacina.id}} </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <select class="form-control" id="situacao" ng-model="agenda.situacao"  ng-options="situacao for situacao in situacoes"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="observacoes" ng-model="agenda.observacoes" placeholder="Observações*" style="margin-top: 20px;"/>
                            </div>
                        </div>
                    </div>

                    <div class="wrapper-fixed-buttons">
                        <div class="col-md-4">
                            <button type="button" ng-click="salvarAgenda()" class="btn btn-success"><i
                                    class="fa fa-plus"></i>
                                SALVAR
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="wrapper-dados-vacina" ng-hide="agenda.vacina">

            <h2 class="text-center">Selecionar vacina</h2>

            <c:forEach items="${vacinas}" var="vacina">
                <div class="pmd-card pmd-z-depth">
                    <div class="pmd-card-body">
                        <div class="row">
                            <div class="col-md-12">
                                    <h3>
                                        <strong>${vacina.titulo}</strong>
                                        <button type="button" class="btn" style="float: right" ng-click="selecionarVacina(${vacina.id})">
                                            <i class="material-icons md-dark pmd-sm">done</i>
                                        </button>
                                    </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </c:forEach>
        </div>

        <jsp:include page="inc/include-js-footer.jsp" flush="true" />
        <script src="http://localhost:8080/assets/dist/js/app.agenda.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
        <script src="https://unpkg.com/feather-icons"></script>
        <script>
            feather.replace()
        </script>

</body>

</html>

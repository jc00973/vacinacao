<!DOCTYPE html>
<html lang="en">
<head>
    <title>Agendas - Vacinação</title>
    <jsp:include page="inc/include-head.jsp" flush="true"/>
</head>

<body>
<jsp:include page="inc/include-header.jsp" flush="true"/>
<jsp:include page="inc/include-sidebar.jsp" flush="true"/>

<div id="content"
     class="pmd-content"
     ng-controller="AgendaController"
     ng-app="agendaApp"
     id="agendaApp"
     ng-init="buscarTodasAgendas();">

    <div class="container-fluid">

        <h1 class="section-title">
            <span>Agendas</span>
        </h1><!-- End Title -->

        <ol class="breadcrumb text-left">
            <li><a href="http://localhost:8080/vacinacao/home">Home</a></li>
            <li class="active">Agendas</li>
        </ol>

        <div class="pmd-card pmd-z-depth pmd-card-custom-view">
            <div class="pull-left">
                <p style="padding-top:15px;padding-left:15px;">
                    Filtros:
                    <a ng-click="limparFiltros()"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Todos</a>
                    <a ng-click="filtrarPorSituacao('AGENDADO')"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Agendados</a>
                    <a ng-click="filtrarPorSituacao('CANCELADO')"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Cancelados</a>
                    <a ng-click="filtrarPorSituacao('REALIZADO')"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Realizados</a>
                    <a ng-click="filtrarPorData()"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Hoje</a>
                </p>
            </div>
            <div class="table-responsive">
                <table id="table-checkbox"
                       class="table pmd-table table-hover table-striped display responsive nowrap"
                       cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuário</th>
                        <th>Data</th>
                        <th>Vacina</th>
                        <th>Dose</th>
                        <th>Situação</th>
                        <th>Data situação</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="x in agendas">
                        <td>{{x.id}}</td>
                        <td>{{x.usuario.nome}}</td>
                        <td>{{x.data | date:'dd/MM/yyyy'}}</td>
                        <td>{{x.vacina.titulo}}</td>
                        <td>{{x.dose + "/" + x.vacina.doses}}</td>
                        <td>{{x.situacao}}</td>
                        <td>{{x.dataSituacao | date:'dd/MM/yyyy'}}</td>
                        <td><a href="/vacinacao/agendas/{{x.id}}"><i data-feather="edit" class="feather-sized"></i></a></td>
                        <td><i data-feather="delete" class="feather-sized" ng-click="deletarAgenda(x.id)"></i></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>


</div><!--end content area-->


<jsp:include page="inc/include-footer.jsp" flush="true"/>
<jsp:include page="inc/include-js-footer.jsp" flush="true" />
<script src="http://localhost:8080/assets/dist/js/app.agenda.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script src="https://unpkg.com/feather-icons"></script>
<script>
    feather.replace()
</script>


<script type="text/javascript">

    (function () {
        $('#institucional').click();
    })();

</script>

</body>

</html>

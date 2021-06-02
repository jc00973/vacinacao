<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vacinas - Vacinação</title>
    <jsp:include page="inc/include-head.jsp" flush="true"/>
</head>

<body>
<jsp:include page="inc/include-header.jsp" flush="true"/>
<jsp:include page="inc/include-sidebar.jsp" flush="true"/>

<div id="content"
     class="pmd-content"
     ng-controller="VacinaController"
     ng-app="vacinaApp"
     id="vacinaApp"
     ng-init="buscarTodasVacinas();">

    <div class="container-fluid">

        <h1 class="section-title">
            <span>Vacinas</span>
        </h1><!-- End Title -->

        <ol class="breadcrumb text-left">
            <li><a href="http://localhost:8080/vacinacao/home">Home</a></li>
            <li class="active">Vacinas</li>
        </ol>

        <div class="pmd-card pmd-z-depth pmd-card-custom-view">
            <div class="pull-left">
                <p style="padding-top:15px;padding-left:15px;">
                    <a href="http://localhost:8080/vacinacao/vacinas/0"
                       class="btn btn-primary pmd-btn-raised add-btn pmd-ripple-effect ">Adicionar</a>
                </p>
            </div>
            <div class="table-responsive">
                <table id="table-checkbox"
                       class="table pmd-table table-hover table-striped display responsive nowrap"
                       cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="x in vacinas">
                        <td>{{x.id}}</td>
                        <td>{{x.titulo}}</td>
                        <td><a href="/vacinacao/vacinas/{{x.id}}"><i data-feather="edit" class="feather-sized"></i></a></td>
                        <td><i data-feather="delete" class="feather-sized" ng-click="deletarVacina(x.id)"></i></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>


</div><!--end content area-->


<jsp:include page="inc/include-footer.jsp" flush="true"/>
<jsp:include page="inc/include-js-footer.jsp" flush="true" />
<script src="http://localhost:8080/assets/dist/js/app.vacina.js"></script>

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

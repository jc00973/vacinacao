<!DOCTYPE html>
<html lang="en">
<head>

    <title>Cadastro de alergia</title>

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


<div id="content" class="pmd-content" ng-controller="AlergiaController" ng-app="alergiaApp" id="alergiaApp"
     ng-init="alergia.id='${alergiaId}'">

    <div class="container-fluid">

        <h1 class="section-title">
            <span>Alergias</span>
        </h1><!-- End Title -->

        <!--breadcrum start-->
        <ol class="breadcrumb text-left">
            <li><a href="http://localhost:8080/alergiacao/alergias">Alergias</a></li>
            <li class="active">Edi&ccedil;&atilde;o</li>
        </ol><!--breadcrum end-->


        <div class="pmd-card pmd-z-depth">
            <div class="pmd-card-body">
                <div class="row" id="wrapper-dados-basicos">

                    <h2 class="text-center">Informações</h2>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="nome" ng-model="alergia.nome" placeholder="Nome*"/>
                            </div>
                        </div>
                    </div>

                    <div class="wrapper-fixed-buttons">
                        <div class="col-md-4">
                            <button type="button" ng-click="salvarAlergia()" class="btn btn-success"><i
                                    class="fa fa-plus"></i>
                                SALVAR
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <jsp:include page="inc/include-js-footer.jsp" flush="true" />
        <script src="http://localhost:8080/assets/dist/js/app.alergia.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
        <script src="https://unpkg.com/feather-icons"></script>
        <script>
            feather.replace()
        </script>

</body>

</html>

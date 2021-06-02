<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Cadastro de usuário</title>

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


<div id="content" class="pmd-content" ng-controller="UsuarioController" ng-app="usuarioApp" id="usuarioApp"
     ng-init="usuario.id='${usuarioId}'">

    <div class="container-fluid">

        <h1 class="section-title">
            <span>Usuários</span>
        </h1><!-- End Title -->

        <!--breadcrum start-->
        <ol class="breadcrumb text-left">
            <li><a href="http://localhost:8080/vacinacao/usuarios">Usuários</a></li>
            <li class="active">Edi&ccedil;&atilde;o</li>
        </ol><!--breadcrum end-->


        <div class="pmd-card pmd-z-depth">
            <div class="pmd-card-body">
                <div class="row" id="wrapper-dados-basicos">

                    <h2 class="text-center">Informações</h2>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="nome" ng-model="usuario.nome" placeholder="Nome*"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <label style="font-size: 18px;" ng-hide="usuario.dataNascimento"> Data: </label>
                                <input type="date" class="form-control" id="dataNascimento" ng-model="usuario.dataNascimento" ng-hide="usuario.dataNascimento"/>
                                <label style="font-size: 18px;" ng-show="usuario.dataNascimento" ng-click="usuario.dataNascimento = 0"> Data: {{usuario.dataNascimento | date:'dd/MM/yyyy'}} </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <select class="form-control" id="sexo" ng-model="usuario.sexo">
                                    <option value="">Selecione seu sexo</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="logradouro" ng-model="usuario.logradouro" placeholder="Logradouro*"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="number" class="form-control" id="numero" ng-model="usuario.numero" placeholder="Número*"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="setor" ng-model="usuario.setor" placeholder="Setor*"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <input type="text" class="form-control" id="cidade" ng-model="usuario.cidade" placeholder="Cidade*"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group pmd-textfield">
                            <div class="fg-line">
                                <select class="form-control" id="uf" ng-model="usuario.uf">
                                    <option value="">Selecione seu estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amap&aacute;</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Cear&aacute;</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Esp&iacute;rito Santo</option>
                                    <option value="GO">Goi&aacute;s</option>
                                    <option value="MA">Maranh&atilde;o</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Par&aacute;</option>
                                    <option value="PB">Para&iacute;ba</option>
                                    <option value="PR">Paran&aacute;</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piau&iacute;</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rond&ocirc;nia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">S&atilde;o Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="wrapper-fixed-buttons">
                        <div class="col-md-4">
                            <button type="button" ng-click="salvarUsuario()" class="btn btn-success"><i
                                    class="fa fa-plus"></i>
                                SALVAR
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="pmd-card pmd-z-depth pmd-card-custom-view" style="margin-top: 20px;">

            <h2 class="text-center">Alergias</h2>

            Alergias registradas:
            <p ng-repeat="alergia in usuario.alergias">
                <i data-feather="hash" class="feather-sized"></i>
                {{alergia.nome}}
                <i data-feather="trash-2" class="feather-sized" ng-click="removerAlergia(alergia.id)" style="cursor: pointer;"></i>
            </p>


            <div class="table-responsive">
                <table id="table-checkbox"
                       class="table pmd-table table-hover table-striped display responsive nowrap"
                       cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${alergias}" var="alergia">
                        <tr>
                            <td>${alergia.id}</td>
                            <td>${alergia.nome}</td>
                            <td><i data-feather="check-circle" class="feather-sized" ng-click="adicionarAlergia(${alergia.id})" style="cursor: pointer;"></i></td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </div>





        </div>

        <div class="pmd-card pmd-z-depth pmd-card-custom-view" style="margin-top: 20px;" ng-show="usuario.agendas">

            <h2 class="text-center">Agendamentos</h2>

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
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="x in usuario.agendas">
                        <td>{{x.id}}</td>
                        <td>{{x.usuario.nome}}</td>
                        <td>{{x.data | date:'dd/MM/yyyy'}}</td>
                        <td>{{x.vacina.titulo}}</td>
                        <td>{{x.dose + "/" + x.vacina.doses}}</td>
                        <td>{{x.situacao}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <jsp:include page="inc/include-js-footer.jsp" flush="true" />
        <script src="http://localhost:8080/assets/dist/js/app.usuario.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
        <script src="https://unpkg.com/feather-icons"></script>
        <script>
            feather.replace()
        </script>

</body>

</html>


var app = angular.module('app', [ 'ngRoute', 
                                  'app.employee',
                                  'app.empresas',
                                  'app.centros'
                                ]);
app.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider
      .when('/', {
		      templateUrl: './employees/employee.html',
		      controller:'EmployeesController'
      })
      .when('/empresas', {
        templateUrl: './empresas/empresas.html',
        controller:'EmpresasController'
      })
      .when('/centros/:empresa_id', {
        templateUrl: './centro_unidad/centro_unidad.html',
        controller:'CentrosController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
]);



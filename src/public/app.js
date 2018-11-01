
var app = angular.module('app', ['ngRoute', 'app.employee']);
app.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider
      .when('/', {
		templateUrl: './employees/employee.html',
		controller:'EmployeesController'
      })
    //   .when('/about', {
    //     template: '<h1>This is about</h1>'
    //   })
      .otherwise({
        redirectTo: '/'
      })
  }
]);



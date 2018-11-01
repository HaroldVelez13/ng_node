var employee = angular.module('app.employee', []);
employee.controller('EmployeesController', ['$scope','$http', function($scope,$http) {
   
    $scope.employees = [];
    var vm = this;    

    vm.getEmployees = function(){
        $http.get('api/empleados')
            .then(
                (data)=>{
                $scope.employees = data.data;
                //console.log(data);
            },
            (err)=>{
                console.log(err);
            })

    }

    vm.$onInit=vm.getEmployees();
    
}]);
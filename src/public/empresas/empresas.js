var empresas = angular.module('app.empresas', []);
empresas.controller('EmpresasController', ['$scope','$http', function($scope,$http) {
   
    $scope.empresas = [];
    var vm = this;    

    vm.getEmployees = function(){
        $http.get('api/empresas')
            .then(
                (data)=>{
                $scope.empresas = data.data;
                //console.log(data);
            },
            (err)=>{
                console.log(err);
            })

    }

    vm.$onInit=vm.getEmployees();
    
}]);
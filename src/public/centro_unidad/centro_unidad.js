var centros = angular.module('app.centros', []);
centros.controller('CentrosController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams) {
   
    $scope.empresa = $routeParams.empresa_id;
    $scope.centros = [];
    var vm = this;    

    vm.getEmployees = function(){
        $http.get('api/centro_unidad/empresa/'+$scope.empresa)
            .then(
                (data)=>{
                $scope.centros = data.data;
                console.log(data.data);
            },
            (err)=>{
                console.log(err);
            })

    }

    vm.$onInit=vm.getEmployees();
    
}]);
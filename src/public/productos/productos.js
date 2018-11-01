var producto = angular.module('app.producto', []);
producto.controller('ProductoController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams) {
   
    $scope.bodega = $routeParams.bodega_id;
    $scope.productos = [];
    var vm = this;    

    vm.getPrductos = function(){
        
        $http.get('api/productos/bodega/'+$scope.bodega)
            .then(
                (data)=>{
                $scope.productos = data.data;
                //console.log(data.data);
            },
            (err)=>{
                console.log(err);
            })

    }

    vm.$onInit=vm.getPrductos();
    
}]);
var bodega = angular.module('app.bodega', []);
bodega.controller('BodegaController', ['$scope','$http','$routeParams', function($scope,$http,$routeParams) {
   
    $scope.centro = $routeParams.centro_id;
    $scope.bodegas = [];
    var vm = this;    

    vm.getBodegas = function(){
        
        $http.get('api/bodegas/centro_unidad/'+$scope.centro)
            .then(
                (data)=>{
                $scope.bodegas = data.data;
                //console.log(data.data);
            },
            (err)=>{
                console.log(err);
            })

    }

    vm.$onInit=vm.getBodegas();
    
}]);
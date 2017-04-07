angular.module("mainApp",[])
    .run(function($rootScope){
        $rootScope.nombre = "Saul Green"
    })
    .controller("mainController",function($scope,$rootScope){
        $scope.nombre = "SG";
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre = "Samsung SRT";
            })
        },2000)
    })
    .controller("secondController", function($scope){

    });

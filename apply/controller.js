angular.module("mainModule",[])
.controller("firstController", function($scope){
    $scope.nombre = "Saul";
    // setTimeout(function(){
    //     $scope.$apply(function(){
    //         $scope.nombre = "Green";
    //     });
    // },2000);
    // document.querySelector("#myButton").addEventListener("click", function(){
    //     $scope.$apply(function(){
    //         $scope.nombre = "Green";
    //     })
    // });
});

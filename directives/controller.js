angular.module("customDirective",[])
.directive("backImg", function(){
    return function(scope,element,attrs){
        attrs.$observe("backImg", function(value){
            element.css({
                "background-image":"url(" + value +")",
                "background-size":"cover",
                "background-position":"center"
            });
        });
    }
})
.controller("appCtrl", function($scope,$http){
    $http.get("https://api.github.com/users/SaulGreen/repos")
    .then(function successCallback(response){
        $scope.repos = response.data;
        console.log($scope.repos)
    }, function errorCallback(response){
        console.log(response)
    });
})

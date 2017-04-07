angular.module("customDirective",[])

.controller("appCtrl", function($scope,$http){
    $http.get("https://api.github.com/users/SaulGreen/repos")
    .then(function successCallback(response){
        $scope.repos = response.data;
        console.log($scope.repos)
    }, function errorCallback(response){
        console.log(response)
    });
})

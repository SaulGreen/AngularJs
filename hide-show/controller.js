angular.module("mainModule",[])
.controller("mainController", function($scope,$http){
    $scope.posts = [];
    //$scope.loading = false;
    $scope.loading = true;
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function successCallback(response){
        console.log(response.data);
        $scope.posts = response.data;
        $scope.loading = false;
    }, function errorCallback(response){
        $scope.loading = false;
    });
});

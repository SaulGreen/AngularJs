angular.module("myFirstApp",[])
.controller("firstController", function($scope,$http){

    $scope.posts = [];
    $scope.newPost = {};
    var newPost = $scope.newPost;

    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function successCallback(response){
        console.log(response.data);
        $scope.posts = response.data;
    }, function errorCallback(response){

    });

    $scope.addPost = function(){
        $http.post("http://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        })
        .then(function successCallback(data,status,headers,config){
            //console.log(data)
            $scope.posts.push($scope, newPost);
            $scope.newPost = {};
        }, function errorCallback(error,status,headers,config){
            console.log(error);
        });
    }
        //DEPRECATED
        // .success(function(data){
        //     console.log(data);
        // }).error(function(err){
        //
        // });
});

angular.module("myFirstApp",[])
.controller("firstController",["$scope", function(m){
    m.nombre = "AngularJS";
    m.comments = [
        {
            text : "Hola guapeton",
            username: "capitanFuria"
        },
        {
            text : "Papucho",
            username: "El gordo mata"
        }
    ];

    m.addComment = function(){
        m.comments.push(m.newComment);
    }
}]);

function sayHi($scope){
    $scope.User = {
        name: "Saul"
    }
}

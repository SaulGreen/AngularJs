angular.module("toDoList",["LocalStorageModule"])
.controller("toDoController", function($scope,localStorageService){

    if(localStorageService.get("angular-todolist")){
        $scope.toDo = localStorageService.get("angular-todolist");
    }else {
        $scope.toDo = [];
    }

    $scope.$watchCollection("toDo",function(newValue,oldValue){
        localStorageService.set("angular-todolist",$scope.toDo);
    });
    $scope.addAct = function(){
        $scope.toDo.push($scope.newAct);
        $scope.newAct = {};
    }

});

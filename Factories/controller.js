angular.module("toDoList",["LocalStorageModule"])
.factory("toDoFactory", function(localStorageService){

    //FACTORUES RETORNAN OBJETOS

    var todoFactory = {};

    todoFactory.key = "angular-todolist";

    if(localStorageService.get(todoFactory.key)){
        todoFactory.activities = localStorageService.get(todoFactory.key);
    }else{
        todoFactory.activities = [];
    }

    todoFactory.add = function(newAct){
        //console.log(newAct);
        todoFactory.activities.push(newAct);
        todoFactory.updateLocalStorage();
    }
    todoFactory.updateLocalStorage = function(){
        localStorageService.set(todoFactory.key,todoFactory.activities);
    }
    todoFactory.clean = function(){
        todoFactory.activities = [];
        todoFactory.updateLocalStorage();
        return todoFactory.getAll();
    }
    todoFactory.getAll = function(){
        return todoFactory.activities;
    }
    todoFactory.removeItem = function(item){
        todoFactory.activities = todoFactory.activities.filter(function(activity){
            return activity !== item;
        });
        todoFactory.updateLocalStorage();
        return todoFactory.getAll();
    }

    return todoFactory;
})
.controller("toDoController", function($scope,toDoFactory){

    // if(localStorageService.get("angular-todolist")){
    //     $scope.toDo = localStorageService.get("angular-todolist");
    // }else {
    //     $scope.toDo = [];
    // }

    // $scope.$watchCollection("toDo",function(newValue,oldValue){
    //     localStorageService.set("angular-todolist",$scope.toDo);
    // });

    $scope.todo = toDoFactory.getAll();
    console.log($scope.todo);
    $scope.newAct = {};

    $scope.addAct = function(){
        toDoFactory.add($scope.newAct);
        $scope.newAct = {};
    }
    $scope.removeAct = function(item){
        $scope.todo = toDoFactory.removeItem(item);
    }
    $scope.clean = function(){
        $scope.todo = toDoFactory.clean();
    }
});

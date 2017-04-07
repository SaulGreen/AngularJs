angular.module("toDoList",["LocalStorageModule"])
.service("toDoFactory", function(localStorageService){

    //FACTORIES RETORNAN OBJETOS, VALOR, NUMEROS, LO QUE SEA, SEJECUTA COMO FUNCION NORMAL
    //SERVICES SE EJECUTA COMO UN CONSTRUCTOR
    //toDoFactory() ---- factory
    //new toDoService() ---- service
    //var todoFactory = {};

    this.key = "angular-todolist";

    if(localStorageService.get(this.key)){
        this.activities = localStorageService.get(this.key);
    }else{
        this.activities = [];
    }

    this.add = function(newAct){
        //console.log(newAct);
        this.activities.push(newAct);
        this.updateLocalStorage();
    }
    this.updateLocalStorage = function(){
        localStorageService.set(todoFactory.key,this.activities);
    }
    this.clean = function(){
        this.activities = [];
        this.updateLocalStorage();
        return this.getAll();
    }
    this.getAll = function(){
        return this.activities;
    }
    this.removeItem = function(item){
        this.activities = this.activities.filter(function(activity){
            return activity !== item;
        });
        this.updateLocalStorage();
        return this.getAll();
    }
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

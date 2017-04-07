angular.module("filtersApp",["LocalStorageModule"])
.filter("removeHtml", function() {
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'');
    }
})
.controller("filtersController", function($scope, localStorageService){
    $scope.mi_html = "<p>Hola mundo!</p>";
})

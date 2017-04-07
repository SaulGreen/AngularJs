angular.module("customDirective",[])
.directive("myAutocomplete", function(){
    function link(scope,element,attrs){
        $(element).autocomplete[{
            source: scope.$eval(attrs.myAutocomplete),
            select: function(ev,ui){
                ev.preventDefault();
                if(ui.item){
                    scope.optionSelected(ui.item.value);
                    console.log("Happening")
                }
            }, focus: function(ev,ui){
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        }];
    };
    return {
        link: link
    }
})
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
    $scope.repos = ["Contenido","Pasito perron","Futbol","Asereje"];

    $http.get("https://api.github.com/users/twitter/repos")
    .then(function successCallback(response){
        $scope.repos = response.data;
        for(var i = response.data.length - 1; i >= 0; i--){
            var repo = response.data[i];
            $scope.repos.push(repo.name);
        }
    }, function errorCallback(response){
        console.log(response)
    });

    $scope.optionSelected = function(e){
        $scope.$apply(function(){
            $scope.main_repo = e;
        })
    }
})

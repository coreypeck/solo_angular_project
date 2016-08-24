var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/first_wave", {
        templateUrl: "/views/partials/subpartialfirst/angel.html",
        // templateUrl: "/views/partials/first_wave.html",
        controller: "firstController"
    }).
    when("/second_wave", {
        templateUrl: "/views/partials/subpartialsecond/banshee.html",
        controller: "secondController"
    }).
    when("/third_wave", {
        templateUrl: "/views/partials/subpartialthird/forge.html",
        controller: "thirdController"
    }).
    when("/angel", {
        templateUrl: "/views/partials/subpartialfirst/angel.html",
    }).
    when("/beast", {
        templateUrl: "/views/partials/subpartialfirst/beast.html",
    }).
    when("/cyclops", {
        templateUrl: "/views/partials/subpartialfirst/cyclops.html",
    }).
    when("/iceman", {
        templateUrl: "/views/partials/subpartialfirst/iceman.html",
    }).
    when("/marvelgirl", {
        templateUrl: "/views/partials/subpartialfirst/marvelgirl.html",
    }).
    when("/profx", {
        templateUrl: "/views/partials/subpartialfirst/profx.html",
    }).
    when("/banshee", {
        templateUrl: "/views/partials/subpartialsecond/banshee.html",
    }).
    when("/colossus", {
        templateUrl: "/views/partials/subpartialsecond/colossus.html",
    }).
    when("/nightcrawler", {
        templateUrl: "/views/partials/subpartialsecond/nightcrawler.html",
    }).
    when("/storm", {
        templateUrl: "/views/partials/subpartialsecond/storm.html",
    }).
    when("/sunfire", {
        templateUrl: "/views/partials/subpartialsecond/sunfire.html",
    }).
    when("/thunderbird", {
        templateUrl: "/views/partials/subpartialsecond/thunderbird.html",
    }).
    when("/wolverine", {
        templateUrl: "/views/partials/subpartialsecond/wolverine.html",
    }).
    when("/forge", {
        templateUrl: "/views/partials/subpartialthird/forge.html",
    }).
    when("/phoenix", {
        templateUrl: "/views/partials/subpartialthird/phoenix.html",
    }).
    when("/psylocke", {
        templateUrl: "/views/partials/subpartialthird/psylocke.html",
    }).
    when("/rogue", {
        templateUrl: "/views/partials/subpartialthird/rogue.html",
    }).
    when("/shadowcat", {
        templateUrl: "/views/partials/subpartialthird/shadowcat.html",
    }).
    otherwise({
        redirectTo: "/angel"
    });

}]);

myApp.controller("firstController", ["$scope", function($scope) {
    console.log("On First Controller");
}]);
myApp.controller("secondController", ["$scope", function($scope) {
    console.log("On Second Controller");
}]);
myApp.controller("thirdController", ["$scope", function($scope) {
    console.log("On Third Controller");
}]);

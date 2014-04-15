var greetApp = angular.module('greet', []);

greetApp.controller('MyController', function ($scope) {
        $scope.username = "world";
      
        $scope.sayHello = function sayHello() {
            alert("test");
            $scope.greeting = "Hello " + $scope.username + "!";
        };
    });

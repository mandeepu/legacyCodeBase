///<reference path="../Script/angular.min.js" /> 

var myapp = angular.module('directiveApp', []);

myapp.controller('fundooCtrl', function($scope, $window) {
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {
        $window.alert("Rating selected - " + rating); 
    };

});

myapp.directive('span', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../Demo/directiveTemplate.html";

    return directive;
});

myapp.directive('userinfo', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "../Demo/userinfo-template.html";

});

myapp.directive('fundooRating', function() {

    return {
        restrict: 'A',
        template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function(scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({ filled: i < scope.ratingValue });
                }
            };
          
            scope.toggle = function(index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({ newRating: index + 1 });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });

        }
    };
});
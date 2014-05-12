var myapp = angular.module('watchApp', []);

myapp.controller('TextWatchCtrl', [
        '$scope', function($scope) {
            //var scope = $scope;
            $scope.watchtext = "first value";
            $scope.counter = 0;
            $scope.lastvalue = "";
            $scope.currentvalue = "";

            $scope.initCounter = function () {
                $scope.counter = 0;
            };

            $scope.$watch('watchtext', function (newvalue, oldvalue) {
                $scope.counter = $scope.counter + 1;
                $scope.lastvalue = oldvalue;
                $scope.currentvalue = newvalue;

            });


        }
    ]);
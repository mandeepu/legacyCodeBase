angular.module('login', ['auth'])
    .controller('LoginController', ['authenticationService', function (authenticationService) {
        this.username = "opensesame";
        this.password = "kgK5UkEsjQ";

    this.signin = function signin() {
      //  alert(this.username + " :" + this.password);
      authenticationService.login(this.username, this.password);
    };
   
    //if ($scope.form.$valid) {
    //   alert($scope.login);
    // .controller('LoginController', ['$scope', '$authenticationService', function ($scope, $authenticationService) {
    //$authenticationService.login($scope.login);
    //}
    // };

}]);


 


angular.module('logout', ['auth'])
    .controller('LogoutController', ['authenticationService', function(authenticationService) {
    
        this.logout = function logout() {
            authenticationService.logout();
        };
}]);
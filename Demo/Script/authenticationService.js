angular.module('auth', ['ngCookies'])
    .factory('authenticationService', ['$http', '$window', '$cookies', function ($http, $window, $cookies) {
    var API_BaseUrl = 'http://croco.api.mergermarket.com';
    var apiKey = "cyz1vwjTGMbhDJe3VykyaY8z9dCp3/FObkwvkw==";

    var login = function login(username, password) {
         var logindata = { Username: username, Password: password }; 
        //alert(username + ":" + password);
         var headers = {
            headers: {
                'apiKey': apiKey,
                'camelCase': 'true',
                'content-type': 'application/json'
            }
        };

        var  loginUrl = API_BaseUrl + '/services/auth/signin'; 
        $http.post( loginUrl, logindata, headers).success(function(data) {
           
            $cookies.authToken = data.authToken;
            $window.location.href = '/';
        });
    };

    var isLoggedIn = function isLoggegIn(callback) {
        $http({
            method: 'GET',
            url: API_BaseUrl + 'services/auth/authorise/status',
            headers: { 'authToken': $cookies.authToken }
        }).success(function(data) {
            callback(true);
        }).error(function(data) {
            callback(false);
        });
    };

    var logout = function logout() {
        $http({
            method: 'DELETE',
            url: API_BaseUrl + '/services/auth/logout',
            headers: { 'authToken': $cookies.authToken, 'apiKey': apiKey }
        }).success(function() {
            delete $cookies.authToken;
            $window.location.href = '/login.html';
        });

    };

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
    };

}]);
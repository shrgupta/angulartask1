var myapp = angular.module('app', ['ui.router','myServices']);
myapp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
            .state('/home', {
                url: "/home",
                templateUrl: "home.html",
//                controller: "LoginCtrl"
            })
            .state('/registration', {
                url: "/registration",
                templateUrl: "registration.html",
                controller: "RegistrationCtrl"
            })
            .state('/login', {
                url: "/login",
                templateUrl: "login.html",
//                controller: "DashboardCtrl"
            });
});
//myapp.config(function (localStorageServiceProvider) {
//  localStorageServiceProvider
//    .setPrefix('myapp')
//    .setStorageType('localStorage')
//    .setNotify(true, true)
//});



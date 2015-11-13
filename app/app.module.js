var myapp = angular.module('app', ['ui.router','myServices']);
myapp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
            .state('/home', {
                url: "/home",
                templateUrl: "layouts/home.html",
               controller: "HomeCtrl"
            })
            .state('/registration', {
                url: "/registration",
                templateUrl: "layouts/registration.html",
                controller: "RegistrationCtrl"
            })
            .state('/login', {
                url: "/login",
                templateUrl: "layouts/login.html",
//                controller: "DashboardCtrl"
            });
});
//myapp.config(function (localStorageServiceProvider) {
//  localStorageServiceProvider
//    .setPrefix('myapp')
//    .setStorageType('localStorage')
//    .setNotify(true, true)
//});



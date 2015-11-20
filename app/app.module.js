 (function () {
  'use strict';

 angular.module('app',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
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

})();




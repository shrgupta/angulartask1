 (function () {
  'use strict';

 angular.module('app',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider

            .state('/', {
            url: "/",
            views: {
                "viewA": {
                    templateUrl: "layouts/home.html",
                  controller: "HomeCtrl"
                },
                "viewB": {
                    templateUrl: "layouts/product.html"
                    
                }
            }
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




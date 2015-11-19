 (function () {
  'use strict';

 angular.module('app',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
               .state('/low', {
                url: "/low",
                templateUrl: "layouts/low.html",
                controller: "LowCtrl"
            })
               .state('/high', {
                url: "/high",
                templateUrl: "layouts/high.html",
                controller: "HighCtrl"
            })
              .state('/bsnl', {
                url: "/bsnl",
                templateUrl: "layouts/bsnl.html",
                controller: "BsnlCtrl"
            })
              .state('/karbon', {
                url: "/karbon",
                templateUrl: "layouts/karbon.html",
                controller: "KarbonCtrl"
            })
              .state('/micromax', {
                url: "/micromax",
                templateUrl: "layouts/micromax.html",
                controller: "MicromaxCtrl"
            })
             .state('/filterLast', {
                url: "/filterLast",
                templateUrl: "layouts/filterLast.html",
                controller: "FilterlastCtrl"
            })
             .state('/filterPage', {
                url: "/filterPage",
                templateUrl: "layouts/filterPage.html",
                controller: "FilterpageCtrl"
            })
            .state('/filter', {
                url: "/filter",
                templateUrl: "layouts/filter.html",
                controller: "FilterCtrl"
            })
            

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




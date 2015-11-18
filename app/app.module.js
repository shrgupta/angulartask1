var myapp = angular.module('app', ['ui.router','myServices']);
myapp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
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
            .state('/view', {
                url: "/view",
                templateUrl: "layouts/view.html",
                controller: "ViewCtrl"
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
//myapp.config(function (localStorageServiceProvider) {
//  localStorageServiceProvider
//    .setPrefix('myapp')
//    .setStorageType('localStorage')
//    .setNotify(true, true)
//});



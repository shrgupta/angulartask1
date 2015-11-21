'use strict';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("root",
            {
                 abstract: true,
                views: {
                    "": {
                        template: '<div ui-view=""></div>'
                    },
                    "header": {
                        
                        templateUrl: "layouts/header.html"
                    },
                    "footer": {
                        
                        templateUrl: "layouts/footer.html"
                    }
                }
            })
            .state("home",
            {
                parent: "root",
                url: "/home",
                views: {
                    "": {
                        controller: "HomeCtrl",
                        templateUrl: "layouts/home.html"
                    }
                }
            })


       .state("aboutPage",
            {
                parent: "root",
                url: "/aboutPage",
                views: {
                    "": {
                       
                        templateUrl: "layouts/aboutPage.html"
                    }
                }
            })

        .state("login",
            {
                parent: "root",
                url: "/login",
                views: {
                    "": {
                       
                        templateUrl: "layouts/login.html"
                    }
                
            }

         })

.state("registration",
            {
                parent: "root",
                url: "/registration",
                views: {
                    "": {
                       
                        templateUrl: "layouts/registration.html"
                    }
                
            }

         });





    }])
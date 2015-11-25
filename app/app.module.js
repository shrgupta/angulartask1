'use strict';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("root", {
                abstract: true,
                views: {
                    "": {
                        template: '<div ui-view=""></div>'
                    },
                    "header": {

                        templateUrl: "app/common/header.html"
                    },
                    "footer": {

                        templateUrl: "app/common/footer.html"
                    }
                }
            })
            .state("home", {
                parent: "root",
                url: "/home",
                views: {
                    "": {
                        controller: "HomeCtrl",
                        templateUrl: "app/home/home.html"
                    }
                }
            })


        .state("aboutPage", {
            parent: "root",
            url: "/aboutPage",
            views: {
                "": {

                    templateUrl: "app/about/aboutPage.html"
                }
            }
        })

        .state("login", {
            parent: "root",
            url: "/login",
            views: {
                "": {
                     controller: "LoginCtrl", 
                    templateUrl: "app/login/login.html"
                }

            }

        })

        .state("registration", {
            parent: "root",
            url: "/registration",
            views: {
                "": {
                    controller: "RegistrationCtrl", 
                    templateUrl: "app/registration/registration.html"
                }

            }

        })
        .state("dashboard", {
            parent: "root",
            url: "/dashboard",
            views: {
                "": {
                      controller:"DashBoardCtrl",  
                    templateUrl: "app/dashboard/dashboard.html"
                }

            }

        });




    }])
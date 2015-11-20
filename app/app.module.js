 (function () {
  'use strict';

 angular.module('app',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider

        .state('home', {
            url: '/home',
            views: {
               
               



                "viewB": {
                    templateUrl: 'layouts/home.html',
                    controller: 'HomeCtrl'
                },
                "viewA": {
                    templateUrl: 'layouts/header.html'
                      
                }

               
            }
        })
  

.state('/aboutPage', {
                url: "/aboutPage",
                views: {
                "viewB": {
                    templateUrl: 'layouts/aboutPage.html',
                    controller: 'HomeCtrl'
                },
                "viewA": {
                    templateUrl: 'layouts/header.html'
                      
                }
                
                } 
            })







.state('/registration', {
                url: "/registration",
                views: {
                "viewB": {
                    templateUrl: 'layouts/registration.html',
                    controller: 'RegistrationCtrl'
                },
                "viewA": {
                    templateUrl: 'layouts/header.html'
                      
                }
               } 
                
            })



         .state('/login', {
                url: "/login",
                views: {
                "viewB": {
                    templateUrl: 'layouts/login.html',
                    
                },
                "viewA": {
                    templateUrl: 'layouts/header.html'
                      
                }
               } 


            });

        
            
});

})();




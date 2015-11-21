var example = angular.module("app", ['ui.router']);
example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/root',
             views: {
               

                "header": {
                    templateUrl: 'layouts/header.html',
                    
                },
                "footer": {
                    templateUrl: 'layouts/footer.html'
                      
                }

               
            }
            
        })
        .state('home', {
           
            url: '/home',
            templateUrl: 'layouts/home.html',
            controller: 'HomeCtrl'
        })
        .state('aboutPage', {
            
            url: '/aboutPage',
            templateUrl: 'layouts/aboutPage.html',
            
        });
    $urlRouterProvider.otherwise('/root/home');
});
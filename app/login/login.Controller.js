(function() {
    'use strict';
    angular.module('app').controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope,Request,$state,$log,$localStorage) {



        $scope.submitForm = function() {

            //localStorageService.set('email', $scope.email);

            Request.send('login.php', {email: $scope.email, pass: $scope.pass }, 'POST').then(function(response) {

               $scope.data = response;

               if ($scope.data === "Invalid username or password") {
                        alert('Invalid');
                        } else {
                        $localStorage.email1 = $scope.email;
                        $localStorage.user1 = $scope.pass;
                        $state.go("dashboard") ;
                        
                    }

        }, function(response) {
                $log.error(response);
            });
  
        };
    };
})();
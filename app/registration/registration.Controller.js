(function() {
    'use strict';
    angular.module('app').controller('RegistrationCtrl', RegistrationCtrl);

    function RegistrationCtrl($scope,Request,$localStorage,$state,$log) {


        $scope.submit = function() {


            // Posting data to php file
             Request.send('registration.php', {user: $scope.user, email: $scope.email, pass: $scope.pass, cpass: $scope.cpass }, 'POST').then(function(response) {

               $scope.user = "";
                    $scope.email = "";
                    $scope.pass = "";
                    $scope.cpass = "";
                    $state.go("home");

        }, function(response) {
                $log.error(response);
            });
  
                
        };



    };
})();
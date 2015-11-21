(function() {
    'use strict';
    angular.module('app').controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $http, myfact) {



        $scope.submitForm = function() {

            //localStorageService.set('email', $scope.email);

            $http({
                    method: 'POST',
                    url: 'server/login.php',
                    headers: myfact.getHeader(),
                    transformRequest: myfact.getTransformRequest(),
                    data: {
                        email: $scope.email,
                        pass: $scope.pass
                    },
                })
                .success(function(data) {

                    if (data === "Invalid username or password") {
                        alert('Invalid');




                    } else {
                        $localStorage.email1 = $scope.email;
                        $localStorage.user1 = $scope.pass;



                        
                    }




                });


        };
    };
})();
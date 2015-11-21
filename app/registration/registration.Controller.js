(function() {
    'use strict';
    angular.module('app').controller('RegistrationCtrl', RegistrationCtrl);

    function RegistrationCtrl($scope, $http, myfact) {


        $scope.submit = function() {


            // Posting data to php file
            $http({
                    method: 'POST',
                    url: 'server/registration.php',
                    headers: myfact.getHeader(),
                    transformRequest: myfact.getTransformRequest(),
                    data: {
                        user: $scope.user,
                        email: $scope.email,
                        pass: $scope.pass,
                        cpass: $scope.cpass
                    },
                })
                .success(function(data) {


                    $scope.user = "";
                    $scope.email = "";
                    $scope.pass = "";
                    $scope.cpass = "";
                    location.href = "#/home";


                });
        };



    };
})();
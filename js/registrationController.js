
 myapp.controller('RegistrationCtrl', function($scope, $http,myfact) {


    $scope.submit = function() {


// Posting data to php file
        $http({
            method: 'POST',
            url: 'registration.php',
            headers: myfact.getHeader(),
            transformRequest:  myfact.getTransformRequest(),
            data: {user: $scope.user, email: $scope.email, pass: $scope.pass, cpass: $scope.cpass},
        })
                .success(function(data) {
                    
                      
                    $scope.user = "";
                    $scope.email = "";
                    $scope.pass = "";
                    $scope.cpass = "";
                     location.href = "#/home";

            
                });
    };



});

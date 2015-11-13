(function() {
    'use strict';
myapp.controller('LoginCtrl', ['$scope', '$http', '$localStorage', 'myfact', function($scope, $http, $localStorage, myfact) {


        $scope.submitForm = function() {
	    
            //localStorageService.set('email', $scope.email);

            $http({
                method: 'POST',
                url: 'server/login.php',
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest(),
                data: {email: $scope.email, pass: $scope.pass},
            })
                    .success(function(data) {
                        
                        if (data === "Invalid username or password")
                        {
                            alert('Invalid');
                            



                        }
                        else {
                            $localStorage.email1 = $scope.email;
                            $localStorage.user1 = $scope.pass;

//                            localStorageService.set('email', $scope.email);
//                            localStorageService.set('user', data);

                            location.href = "#/dashboard";
                        }




                    });


        };
    }]);
})();
//myapp.controller('RegistrationCtrl', function($scope, $http,myfact) {
//
//
//    $scope.submit = function() {
//
//
//// Posting data to php file
//        $http({
//            method: 'POST',
//            url: 'registration.php',
//            headers: myfact.getHeader(),
//            transformRequest:  myfact.getTransformRequest(),
//            data: {user: $scope.user, email: $scope.email, pass: $scope.pass, cpass: $scope.cpass},
//        })
//                .success(function(data) {
//                    
//                      
//                    $scope.user = "";
//                    $scope.email = "";
//                    $scope.pass = "";
//                    $scope.cpass = "";
//                    location.href = "#/login";
//
//            
//                });
//    };
//
//
//
//});
//myapp.controller('DashboardCtrl', ['$scope', 'localStorageService','myfact', function($scope,localStorageService) {
//
// var value = localStorageService.get('email');
// var value1 = localStorageService.get('user');
// 
//        if (value === null) {
//            alert('Please Login First');
//            location.href = "#/";
//        }
//        else {          
//            
//            $scope.val=value;
//            $scope.val1=value1;
//        }
//        
//
//    $scope.logout = function() {
//        
//        localStorageService.remove('email');
//        
//       
//
//   };
//
//
//}]);
//

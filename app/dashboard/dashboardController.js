(function() {
    'use strict';
    angular.module('app').controller('DashBoardCtrl', DashBoardCtrl);

    function DashBoardCtrl($scope,$localStorage,$state) {

 var value = $localStorage.email1;
  var value1 = $localStorage.user1;


// var value = localStorageService.get('email');
// var value1 = localStorageService.get('user');
 //alert(value);
        if (value === null) {
            alert('Please Login First');
             $state.go('#/') ;
        }
        else {          
            
            $scope.Email=value;
            $scope.User=value1;
        }
        

    $scope.logout = function() {
        
//        localStorageService.remove('email');
        $localStorage.$reset();
        

    };


};
})();
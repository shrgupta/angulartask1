(function () {
'use strict';


angular.module('app').controller('ViewCtrl', ViewCtrl);
  function ViewCtrl($scope,$http,myfact) {

    $scope.low = 0;
    $scope.high = 2000;

$http({
               method  : 'POST',
                url     : 'server/search.php',
                
                 data   : {low:$scope.low,high:$scope.high},
 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {
                   
                   $scope.data=data;
                 
                   
                  
                //alert("success");
                //alert($scope.data.num_rows);
               
              

                });


                $scope.filterValue = function() {
                location.href = "#/filter";
                  };

                  $scope.filterPage = function() {
                  location.href = "#/filterPage";
};
           $scope.micromax = function() {
                  location.href = "#/micromax";

};
$scope.filterLast = function() {
                  location.href = "#/filterLast";
                  
};
$scope.low = function() {
                  location.href = "#/low";
                  
};
$scope.high = function() {
                  location.href = "#/high";
                  
};

};
})();
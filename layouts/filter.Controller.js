(function () {
'use strict';

angular.module('app').controller('FilterCtrl',FilterCtrl); 
  function FilterCtrl($scope,$http,myfact) {
    $scope.low=2000;
    $scope.high=3000;
$http({
               method  : 'POST',
                url     : 'server/search.php',
                
                  data   : {low:$scope.low,high:$scope.high},
 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {
                   $scope.data=data;
                 
                   
                  
                alert("success");
                //alert($scope.data.num_rows);
               
              

                });
                $scope.setValue = function() {
                location.href = "#/view";

              };
              $scope.micromax = function() {
                location.href = "#/micromax";
};
            $scope.filterPage = function() {
                  location.href = "#/filterPage";
};
                
              $scope.filterLast = function() {
                 location.href = "#/filterLast";
};
           $scope.karbon = function() {
                 location.href = "#/karbon";
};
             $scope.bsnl = function() {
                 location.href = "#/bsnl";
};
};
})();
(function () {
'use strict';

angular.module('app').controller('FilterlastCtrl', FilterlastCtrl);
  function FilterlastCtrl($scope,$http,myfact) {
    $scope.low=4000;
    $scope.high=6000;
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


                $scope.filterValue = function() {
                location.href = "#/filter";
                  };

                  $scope.filterPage = function() {
                  location.href = "#/filterPage";
};
                $scope.setValue = function() {
                 location.href = "#/view";
};
              $scope.micromax = function() {
                 location.href = "#/micromax";
};

};
})();
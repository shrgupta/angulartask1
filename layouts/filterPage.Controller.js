(function () {
'use strict';

angular.module('app').controller('FilterpageCtrl',FilterpageCtrl);
 function FilterpageCtrl($scope,$http,myfact) {
    $scope.low=3000;
    $scope.high=4000;
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
                $scope.filterValue = function() {
                location.href = "#/filter";
                  };

                 
                
              $scope.filterLast = function() {
                 location.href = "#/filterLast";
};             
               $scope.micromax = function() {
                 location.href = "#/micromax";
};
              $scope.karbon = function() {
                 location.href = "#/karbon";
};
              $scope.bsnl = function() {
                 location.href = "#/bsnl";
};

};
})();
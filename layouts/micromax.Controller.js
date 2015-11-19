(function () {
'use strict';

angular.module('app').controller('MicromaxCtrl',MicromaxCtrl);
 function MicromaxCtrl($scope,$http,myfact) {
    $scope.brand="Micromax";
    
$http({
        method  : 'POST',
                url     : 'server/searchbrand.php',
                data    :  {Brand:$scope.brand},
//forms user 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {


                
                $scope.data=data;
               


                });
                $scope.setValue = function() {
                location.href = "#/view";
};
                $scope.filterValue = function() {
                location.href = "#/filter";
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
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


                //alert("success");
                $scope.data=data;
                // var pag = parseInt(data.num_rows);
               //alert(pag);
                //alert(data.length);

                // $scope.myNumber = pag;

                // $scope.getNumber = function(num) {
                //     return new Array(num);
                // };


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
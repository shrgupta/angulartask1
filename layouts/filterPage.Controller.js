myapp.controller('FilterpageCtrl', function($scope,$http,myfact) {
    $low=3000;
    $high=4000;
$http({
               method  : 'POST',
                url     : 'server/search.php',
                
                 data   : {low:$low,high:$high},
 
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
                  $scope.filterValue = function() {
                  location.href = "#/micromax";
                  };

});
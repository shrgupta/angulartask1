myapp.controller('FilterCtrl', function($scope,$http,myfact) {
    $low=2000;
    $high=3000;
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
              $scope.setValue = function() {
                location.href = "#/micromax";
};


});
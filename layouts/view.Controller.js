myapp.controller('ViewCtrl', function($scope,$http,myfact) {
    $low=0;
    $high=2000;
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


                $scope.filterValue = function() {
                location.href = "#/filter";
                  };

                  $scope.filterPage = function() {
                  location.href = "#/filterPage";
};
           $scope.micromax = function() {
                  location.href = "#/micromax";
};
// $scope.setValue = function(first,second) {
//       $http({
//         method  : 'POST',
//                 url     : 'server/search.php',
//                 data    :  {low:0,high:2000},
 
//                 headers: myfact.getHeader(),
//                 transformRequest: myfact.getTransformRequest()
//                 })
//                 .success(function(data) {


//                 alert("success1");
               
//                 $scope.data=data;
//                //  var pag = parseInt(data.num_rows);
//                // // alert(pag);
//                //  //alert(data.length);

//                //  $scope.myNumber = pag;

//                //  $scope.getNumber = function(num) {
//                //      return new Array(num);
//                //  };

//                 });
//         };
});
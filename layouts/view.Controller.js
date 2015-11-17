myapp.controller('ViewCtrl', function($scope,$http,myfact) {





$scope.setValue = function(first,second) {
       // alert(second);
      
        $http({
        method  : 'POST',
                url     : 'server/search.php',
                data    :  {low:first,high:second},
 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {


                //alert("success");
               
                $scope.data=data;
                var pag = parseInt(data.num_rows);
               // alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };

                });
        };



// $scope.orderby = function(index) {
//         alert(index);
//         $http({

//             method: 'POST',
//             url: 'server/search.php',
//             headers: myfact.getHeader(),
//             transformRequest: myfact.getTransformRequest(),
//             data: {page_position: index}
//         }).success(function(data) {

//             $scope.data = data;


//         });
//     };
});
(function () {
'use strict';

angular.module('app').controller('HomeCtrl', HomeCtrl);
function HomeCtrl($scope,$http,myfact) {

$scope.display = function() {

$http({
               method  : 'POST',
                url     : 'server/row.php',
                
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {
                   //alert(success);
                   $scope.data=data;
                   var pag = parseInt(data.num_rows);
               // alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };
                 

                });
}


$scope.sortdsc = function() {

$http({
        method  : 'POST',
                url     : 'server/sortdsc.php',
                
//forms user 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {


                //alert("success");
                $scope.data=data;

               
                });

            }


            $scope.sortasc = function() {

$http({
        method  : 'POST',
                url     : 'server/sortasc.php',
                
//forms user 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {


                //alert("success");
                $scope.data=data;

               
                });

            }


// $http.get("server/row.php").success(function(data) {
                
//                 //alert(data.6);
//                 $scope.data = data;
                
//              var pag = parseInt(data.num_rows);
//                // alert(pag);
//                 //alert(data.length);

//                 $scope.myNumber = pag;

//                 $scope.getNumber = function(num) {
//                     return new Array(num);
//                 };
                
             
//                 });





       
$scope.setValue = function(first,second) {

    // $scope.low = first;
    // $scope.high = second;

$http({
               method  : 'POST',
                url     : 'server/search.php',
                
                 data   : {low:first,high:second},
 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {
                   //alert(success);
                   $scope.data=data;
                 

                });
// location.href = "#/view";
};


$scope.searchbrand = function(brand) {
 

    
$http({
                method  : 'POST',
                url     : 'server/searchbrand.php',
                data    :  {Brand:brand},
//forms user 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {

                $scope.data=data;
               

                });

};




    $scope.orderby = function(index) {
        //alert(index);
        $http({
            method: 'POST',
            url: 'server/row.php',
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),
            data: {page_position: index}
        }).success(function(data) {

            $scope.data = data;


        });
    };

    
            };
  })();




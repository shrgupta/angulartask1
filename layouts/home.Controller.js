myapp.controller('HomeCtrl', function($scope,$http,myfact) {

	

   $http.get("server/row.php").success(function(data) {
                
                //alert(data.6);
                $scope.data = data;
                //alert(data.num_row);
                //alert(data);
             var pag = parseInt(data.num_rows);
               // alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };
                

                });





       
$scope.setValue = function() {
       // alert(second);
      
        $http({
        method  : 'POST',
                url     : 'server/search.php',
                
 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {
                  
                  if(data)
                  {
                   location.href = "#/view"; 
                  } 
                //alert("success");
               
               //  $scope.data=data;
               //  var pag = parseInt(data.num_rows);
               // // alert(pag);
               //  //alert(data.length);

               //  $scope.myNumber = pag;

               //  $scope.getNumber = function(num) {
               //      return new Array(num);
               //  };

                });
        };


$scope.find = function(brand) {
        alert(brand);
        $http({
        method  : 'POST',
                url     : 'server/searchbrand.php',
                data    :  {Brand:brand},
//forms user 
                headers: myfact.getHeader(),
                transformRequest: myfact.getTransformRequest()
                })
                .success(function(data) {


                //alert("success");
                $scope.data=data;
                var pag = parseInt(data.num_rows);
               //alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };


                });
        };


         $scope.sorthigh = function() {
         //if true make it false and vice versa
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

                var pag = parseInt(data.num_rows);
               //alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };

                });
    };

         $scope.sortlow = function() {
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
                var pag = parseInt(data.num_rows);
               //alert(pag);
                //alert(data.length);

                $scope.myNumber = pag;

                $scope.getNumber = function(num) {
                    return new Array(num);
                };


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

    //   $scope.orderby = function(index) {
    //     //alert(index);
    //     $http({
    //         method: 'POST',
    //         url: 'server/search.php',
    //         headers: myfact.getHeader(),
    //         transformRequest: myfact.getTransformRequest(),
    //         data: {page_position: index}
    //     }).success(function(data) {

    //         $scope.data = data;


    //     });
    // };

    $scope.ordeby = function(index) {
        //alert(index);
        $http({
            method: 'POST',
            url: 'server/sortasc.php',
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),
            data: {page_position: index}
        }).success(function(data) {

            $scope.data = data;


        });
    };
   $scope.orderby = function(index) {
        //alert(index);
        $http({
            method: 'POST',
            url: 'server/searchbrand.php',
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),
            data: {page_position: index}
        }).success(function(data) {

            $scope.data = data;


        });
    };

  $scope.orderby = function(index) {
        alert(index);
        $http({
            method: 'POST',
            url: 'server/sortdsc.php',
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),
            data: {page_position: index}
        }).success(function(data) {

            $scope.data = data;


        });
    };



            });




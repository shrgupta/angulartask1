myapp.controller('HomeCtrl', function($scope, $http,myfact) {

	$http.get("server/show.php").success(function(data) {
                
				//alert(data.6);
                $scope.data = data;
                //alert(data.image);

                

                });


$scope.change = function(first,second) {
        //alert(index);

        $http.get({
            method: 'POST',
            url: 'server/search.php',
            data: {low: first,high:second},
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),

        }).success(function(data) {
            alert(data);

            $scope.data = data;

        });
    // $http.get("search.php").success(function(data) {
                
    //             //alert(data.6);
    //             $scope.data = data;
    //             //alert(data.image);

                

    //             });





    };








            });




myapp.controller('HomeCtrl', function($scope, $http,myfact,$rootScope) {

	$http.get("show.php").success(function(data) {
                
				//alert(data.6);
                $scope.data = data;
                //alert(data.image);

                

                });


$scope.change = function(query1,query2) {
        //alert(index);

        $http({
            method: 'POST',
            url: 'search.php',
            data: {low: query1,high:query2},
            headers: myfact.getHeader(),
            transformRequest: myfact.getTransformRequest(),

        }).success(function(response) {
            alert(response);

            $rootScope.data = response;

        });
    };




            });




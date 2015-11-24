(function() {
    'use strict';

    angular.module('app').controller('BrandCtrl', BrandCtrl);

    function BrandCtrl($scope,Request,$log) {


             Request.send('brand.php', 'POST').then(function(response) {

               $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
                






    	    
})();

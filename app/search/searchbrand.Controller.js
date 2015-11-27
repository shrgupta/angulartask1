(function() {
    'use strict';

    angular.module('app').controller('SearchCtrl', SearchCtrl);
         var values=[];
    function SearchCtrl($scope,Request,$log) {
        console.log('hii');
               
         $scope.orderSearch = function(index) {
            
            
            
            Request.send('searchbrand.php', {page_position: index }, 'POST').then(function(response) {
                $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
  
     
                };
                






    	    
})();

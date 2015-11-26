(function() {
    'use strict';

    angular.module('app').controller('SearchCtrl', SearchCtrl);
         var values=[];
    function SearchCtrl($scope,Request,$log) {
        console.log('hii');
               
         $scope.searchbrand = function(brand) {
            
            values.push(brand);
            var len=values.length;
            var urlBase = "searchbrand.php?brand0="
            for (var i = 0; i < len; i++) {
                if(i==0)
                {
                urlBase=urlBase+values[0];
                }
                else
                {
                urlBase = urlBase + "&brand" + (i + 1) + "=" + values[i];    
                }
            }
            urlBase = urlBase  + "&length="+len+ "&setLatLon=Set";


             Request.send('brand.php', 'POST').then(function(response) {

               $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
                




};

    	    
})();

(function() {
    'use strict';

    angular.module('app').controller('SearchCtrl', SearchCtrl);
        
    function SearchCtrl($scope,Request,$log) {
        console.log('hii');
        var values=[];
         $scope.filters = [];  
            
         $scope.searchbrand = function(status,brand) {
            console.log(status);
            if(status==true){
             values.push(brand);   
            }
            else{
                console.log(values.indexOf(brand));
               if(values.indexOf(brand) != -1) {
                //pull out the brand from array
                values.splice(brand,1);
               }
            }
            
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

           console.log(urlBase);
           
             Request.send(urlBase,'','POST').then(function(response) {

               
               $scope.data = response;
                console.log($scope.filters);

        }, function(response) {
                $log.error(response);
            });
              
       

                };
        




         $scope.orderSearch = function(index) {
            
            
            
            Request.send('searchbrand.php', {page_position: index }, 'POST').then(function(response) {
                $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };



                 $scope.setValue = function(first, second) {
         Request.send('search.php', {low: first,high: second }, 'POST').then(function(response) {
            // $scope.low = first;
            // $scope.high = second;

            $scope.data = response;
                
                    
                }, function(response) {
                $log.error(response);
            });
  
     
                };
  
     
                };
                






    	    
})();

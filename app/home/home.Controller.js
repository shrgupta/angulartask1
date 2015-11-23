(function() {
    'use strict';

    angular.module('app').controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $http,Request,ascRequest,dscRequest) {

         $scope.display = function() {
             Request.send('row.php', 'POST').then(function(response) {
            $scope.data = response;
            var pag = parseInt($scope.data.num_rows);
                    // alert(pag);
                    //alert(data.length);

                    $scope.myNumber = pag;

                    $scope.getNumber = function(num) {
                        return new Array(num);
                    };

                
                    
                }, function(response) {
                $log.error(response);
            });
  
         }


         $scope.sortdsc = function() {
        dscRequest.desending().then(function(response) {
                
                $scope.data = response;
                console.log(response);
                    
                }, function(response) {
                $log.error(response);
            });
  
     
                };
            

        

         $scope.sortasc = function() {
                        //console.log('hii');
             ascRequest.ascending().then(function(response) {
                
                $scope.data = response;
                console.log(response);
                    
                }, function(response) {
                $log.error(response);
            });
                //console.log(asc);
                 
     
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
                
        


         $scope.searchbrand = function(brand) {
            Request.send('searchbrand.php', {Brand:brand,Brand1:brand }, 'POST').then(function(response) {

               $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
                

       



        $scope.orderby = function(index) {
            Request.send('row.php', {page_position: index }, 'POST').then(function(response) {
                $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
            
        


    };
})();
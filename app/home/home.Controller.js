(function() {
    'use strict';

    angular.module('app').controller('HomeCtrl', HomeCtrl);
    function HomeCtrl($scope, $http,Request,ascRequest,dscRequest,$log) {

         // $scope.display = function() {
             Request.send('row.php','', 'POST').then(function(response) {
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
  
         //}


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
                
        

           // $scope.showHideDiv = function (chkStatus) {
           //  alert(chkStatus);
           //   if ($scope.chkStatus) {
           //   $scope.showhideprop = true;
           //                   }
           //    else {
           //   $scope.showhideprop = false;
           //       }
           //   }








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
                

       



        $scope.orderby = function(index) {
            Request.send('row.php', {page_position: index }, 'POST').then(function(response) {
                $scope.data = response;

        }, function(response) {
                $log.error(response);
            });
  
     
                };
            
        


    };
})();
(function() {
    'use strict';

    angular.module('app').controller('HomeCtrl', HomeCtrl);
    function HomeCtrl($scope, $http,Request,ascRequest,dscRequest,$log) {
        var rootFilter = {};
        var page = 0;
        var order = false;
        $scope.query = {};
         var getData = function() {
         Request.send('serverData.php', {filters: rootFilter, page: page, order:order}, 'POST').then(function(response) {
            $scope.data = response;
             var pag = parseInt($scope.data.num_rows);
            $scope.myNumber = Math.ceil(pag/5);
        });
        };

          getData();
        $scope.getNumber = function(num) {
             return new Array(num);
        };

        $scope.getPage = function(pageNo) {
            page = pageNo;
            getData();
        }
       $scope.sortOrder = function() {
            // console.log(rootFilter);
            order = $scope.sort;
            getData();
        };
  
       
        $scope.setValue = function(first, second) {
            //  console.log($scope.query);
            // console.log(min+' '+max);
            rootFilter['range'] = $scope.query;
            getData();  
       };

        var values=[];
        $scope.filters = {};  
         
         $scope.searchbrand = function() {
            rootFilter['brand'] = $scope.filters;
            console.log(rootFilter);
            getData();
        };
        
       //  $scope.orderby = function(index) {
       //      Request.send('row.php', {page_position: index }, 'POST').then(function(response) {
       //          $scope.data = response;

       //  }, function(response) {
       //          $log.error(response);
       //      });
  
     
       // };
    };
})();
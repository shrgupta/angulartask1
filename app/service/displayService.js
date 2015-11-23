(function() {
    'use strict';
    angular.module('app')
            .service('displayRequest',displayRequest);
    function displayRequest($http,$q,Request) {
        return {
            load: function() {
                var def = $q.defer();
               Request.send('row.php', 'POST').then(function(response) {
            // $scope.data = response;

            // getNumber : function)_
            // var pag = parseInt($scope.data.num_rows);
            //         // alert(pag);
            //         //alert(data.length);

            //         $scope.myNumber = pag;

            //         $scope.getNumber = function(num) {
            //             return new Array(num);
            //         };
                    def.resolve();

                
                    
                }


                
            }return def.promise;
        };
    }

})();




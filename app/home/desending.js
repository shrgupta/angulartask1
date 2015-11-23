(function() {
    'use strict';
    angular.module('app')
            .service('dscRequest',dscRequest);
    function dscRequest($http,$q,Request) {
        return {
        	desending: function() {
                var def = $q.defer();
               Request.send('sortdsc.php', 'POST').then(function(response) {
               	//console.log('reach');
               	def.resolve(response);

               	


                
            });
               return def.promise;
        }	
    };
    
};
})();
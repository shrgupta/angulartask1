(function() {
    'use strict';
    angular.module('app')
            .service('ascRequest',ascRequest);
    function ascRequest($http,$q,Request) {
        return {
        	ascending: function() {
                var def = $q.defer();
               Request.send('sortasc.php', 'POST').then(function(response) {
               	console.log('reach');
               	def.resolve(response);

               	


                
            });
               return def.promise;
        }	
    };
    
};
})();
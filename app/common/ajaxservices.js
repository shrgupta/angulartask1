(function() {
    'use strict';
    angular.module('app')
            .service('Request', ajax);
    function ajax($http, $q) {
        return {
            
            send: function(api, data, method) {
                var baseApi = 'server/';
                var def = $q.defer();
                $http({
                    url: baseApi+api,
                    method: method,
                     transformRequest: false,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {data : data }
                }).success(function(data) {


                    def.resolve(data);
                }).error(function() {
                    def.reject('500');
                });
                return def.promise;
            },
        };
    }

})();
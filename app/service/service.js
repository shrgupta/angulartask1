
(function() {
    'use strict';
 
 angular.module('app').service('myfact',myfact);
  function myfact() {
    var factory = {};
    factory.getHeader = function() {
        return {'Content-Type': 'application/x-www-form-urlencoded'};
    };
    factory.getTransformRequest = function() {
        return function(obj) {
            var str = [];
            for (var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        };
    };
    return factory;
};
})();
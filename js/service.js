var myapp = angular.module('myServices', []);
myapp.factory('myfact', function() {
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
});

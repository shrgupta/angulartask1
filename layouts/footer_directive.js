


angular.module("app").directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'layouts/footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterController'
  };
});
 
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    $scope.loading = true;
    Links.addLinks($scope.link).then(function(){
      $scope.loading = false;
      $location.path('/')
    }).catch(function(err){
      console.log(err);
    });
  }
});


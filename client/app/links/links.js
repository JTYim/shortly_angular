angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.allLinks().then(function(links){
      $scope.data.links = links;
    }).catch(function(err){
      console.log(err);
    });
  };
  $scope.getLinks();
  $scope.name="LinksController";
});



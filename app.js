(function(){
'use strict';

//  x="hello"

angular.module('myFirstApp', [])

.controller('myFirstController', function($scope){

  $scope.name="shweta";
  $scope.sayHello=function(){
    return "hello coursera";
  }

});

})();

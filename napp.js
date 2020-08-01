(function(){
'use strict';



angular.module('nameCalculator', [])

.controller('nameCalculatorController', function($scope){

  
  $scope.name="";
  $scope.totalvalue = 0;
  $scope.displayvalue = function(){
    var totalcountvalue= calculatecount($scope.name);
    $scope.totalvalue= totalcountvalue;
  }

});
function calculatecount(string){
  var charcount=0;
  for(var i=0;i<string.length;i++)
  {
    charcount+= string.charCodeAt(i);
  }
  return charcount;
}
})();

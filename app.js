(function(){
  'use strict';

  angular.module("myFirstApp",[])
  .controller("MyController",function($scope){
    $scope.name="Jawad Nabi";
    $scope.finalValue=0;
    $scope.displayNumber=function(){
      var totalValue=calculateValue($scope.name);
      $scope.finalValue=totalValue;
    }

    function calculateValue(string){
      var totalStringValue=0;
      for(var i=0; i<string.length; i++){
          totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();

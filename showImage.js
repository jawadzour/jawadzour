angular.module("showImageOnClick",[])
.controller("imageController",function($scope){
  $scope.state="Decision";
  $scope.needFood=function(){
    $scope.state="Hungry";
  }
});

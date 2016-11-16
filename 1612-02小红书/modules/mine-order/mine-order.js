angular.module("orderModules",[])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('mine-order',{
               url:'/mine-order',
               templateUrl:'./modules/mine-order/mine-order.html',
               controller:'orderCtrl',
               css:'./modules/mine-order/mine-order.css'
          })
	})
	.controller("orderCtrl",['$scope',function($scope){
	       $scope.back =function(){
              history.back();
          }
	}])
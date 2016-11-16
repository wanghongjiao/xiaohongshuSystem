angular.module("CartModules",[])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('mine-cart',{
               url:'/mine-cart',
               templateUrl:'./modules/mine-cart/mine-cart.html',
               controller:'CartCtrl',
               css:'./modules/mine-cart/mine-cart.css'
          })
	})
	.controller("CartCtrl",['$scope',function($scope){
	    $scope.back =function(){
               history.back();
         }
	}])
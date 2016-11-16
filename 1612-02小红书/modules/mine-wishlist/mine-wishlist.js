angular.module("wishModules",[])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('mine-wish',{
               url:'/mine-wish',
               templateUrl:'./modules/mine-wishlist/mine-wishlist.html',
               controller:'wishCtrl',
               css:'./modules/mine-wishlist/mine-wishlist.css'
          })
	})
	.controller("wishCtrl",['$scope',function($scope){
	       $scope.back =function(){
              history.back();
          }
	}])
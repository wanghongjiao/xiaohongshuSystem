angular.module("personalModules",[])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('mine-personal',{
               url:'/mine-personal',
               templateUrl:'./modules/mine-personal/mine-personal.html',
               controller:'personalCtrl',
               css:'./modules/mine-personal/mine-personal.css'
          })
	})
	.controller("personalCtrl",['$scope',function($scope){
	       $scope.back =function(){
              history.back();
          }
	}])
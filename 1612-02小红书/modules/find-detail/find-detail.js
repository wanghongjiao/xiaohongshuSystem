angular.module("DetailModules",[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("find-detail",{
		url:"/find-detail/:detailId",
		templateUrl:"modules/find-detail/find-detail.html",
		controller:'DetailCtrl',
		css:"modules/find-detail/find-detail.css"
		
	})
})
.controller("DetailCtrl",function($scope,$state,$stateParams){
	var object=JSON.parse($stateParams.detailId);
	var obj=JSON.parse(object)
	$scope.arr=obj;
	$scope.back=function(){
		history.go(-1)
	}
})

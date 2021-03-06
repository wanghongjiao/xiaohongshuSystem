angular.module("FindallModules",[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("find-all",{
		url:"find-all",
		templateUrl:"modules/find-all/find-all.html",
		controller:"myLife",
		css:"modules/find-all/find-all.css"
	})
})
 .service("AllService",["$http",function($http){
	this.getevents=function(){
		return $http.get("json/find-lift-all.json")
	}
}])
.controller("myLife",function($scope,AllService){
	AllService.getevents().success(function(res){
		$scope.arr=res.data;
	})
})
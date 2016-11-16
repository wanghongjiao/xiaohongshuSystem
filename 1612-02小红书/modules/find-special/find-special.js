angular.module("FindSpecial",[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("find-special",{
		url:"/find-special",
		templateUrl:"modules/find-special/find-special.html",
		controller:"findSpecial",
		css:"modules/find-special/find-special.css"
	})
})
.service("SpecialService",function($http){
	this.getSpecial=function(){
		return $http.get("json/find-list-detail2-02.json")
	}
})
.controller("findSpecial",function($scope,SpecialService,$state){
	SpecialService.getSpecial().success(function(res){
		$scope.arr=res.data;
	})
	$(".find-body").on("click","ul",function(){
		var obj=$(this).find(".hide").text();
		var a=JSON.stringify(obj);
		
    	$state.go('find-detail', {detailId:a});


	})

})
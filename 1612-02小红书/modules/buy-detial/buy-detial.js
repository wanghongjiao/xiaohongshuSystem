angular.module("BuyDetailModules",[])
.config(function($stateProvider,$urlRouterProvider){
	// $stateProvider.state("buy-detail",{
	// 	url:"/buy-special/:byspecialId",
	// 	templateUrl:"modules/buy-detial/buy-detial.html",
	// 	controller:"buyDetail",
	// 	css:"modules/buy-detial/buy-detial.css"
	// })

	$stateProvider.state('buy-detail',{
		url:'/buy-detail/:godsId',
		templateUrl:'modules/buy-detial/buy-detial.html',
		controller:'buyDetail',
		css:'modules/buy-detial/buy-detial.css'
	})

})
.controller("buyDetail",function($scope,$state,$stateParams){
		$("#footer").hide();
		// var object=JSON.parse($stateParams.byspecialId);
		// $scope.arr=object;
		$scope.back=function(){
			history.back();
		}
		var godsObj=JSON.parse($stateParams.godsId);
		$scope.arr=godsObj;

})



/*王红娇写的*/

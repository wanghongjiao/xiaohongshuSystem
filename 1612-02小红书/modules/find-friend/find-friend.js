angular.module("FindFriend",[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("find-friend",{
		url:"/find-friend",
		templateUrl:"modules/find-friend/find-friend.html",
		controller:"myFriend",
		css:"modules/find-friend/find-friend.css"
	})
})
.controller("myFriend",function($scope){
	
})
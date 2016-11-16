
var app = angular.module('xhs',[
	'ui.router',
	'angularCSS',
	'InfoModules', 
	'BuyModules',
	'MineModules',
	'FindModules',
	'FindallModules',
	'FindFriend',
	'FindSpecial',
	'SearchModules',
	'HomeModules',
	'CartModules',
	'loadingModules',
	'orderModules',
	'BuyDetailModules',
	'DetailModules',
	'FindSpecial',
	'SpecialModules',
	"personalModules",
	"wishModules"
]);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/loading');

})


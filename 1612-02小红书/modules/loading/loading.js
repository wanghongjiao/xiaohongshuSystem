angular.module('loadingModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('loading',{
               url:'/loading',
               templateUrl:'./modules/loading/loading.html',
               controller:'LoadingCtrl',
               css:'./modules/loading/loading.css'
          })

     })

       .controller('LoadingCtrl',['$scope','$timeout','$location',function($scope,$timeout,$location){
        $scope.footerflag = true;
       			$timeout(function() {
       			   $location.path("/home")
				}, 3000);


       }])
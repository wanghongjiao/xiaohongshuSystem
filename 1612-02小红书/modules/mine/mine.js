angular.module('MineModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('mine',{
               url:'/mine',
               templateUrl:'./modules/mine/mine.html',
               controller:'MineCtrl',
               css:'./modules/mine/mine.css'
          })

     })
     .controller('MineCtrl',['$scope',function($scope){

     }])
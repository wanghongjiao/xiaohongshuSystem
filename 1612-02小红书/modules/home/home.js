angular.module('HomeModules', ['me-lazyload'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: './modules/home/home.html',
      controller: 'HomeCtrl',
      css: './modules/home/home.css'
    })

  })

.service('HomeService', ['$http', function($http) {
  this.gethomenavlist = function() {
    return $http.get('./json/home-nav-list.json');
  }
  this.gethomenavleft = function() {
    return $http.get('./json/home-nav-01.json');
  }
 
  this.mySwiper = function(){
      var mySwiper1 = new Swiper ('#swiper-container1', {
         watchSlidesProgress:true,
         watchSlidesVisibility:true,
         slidesPerView : 4
        }) ;     
    }
}])

.controller('HomeCtrl', ['$scope', 'HomeService', '$location',function($scope, HomeService,$location) {
     // $scope.footer_flag = false;
      HomeService.gethomenavlist().success(function(res) {
        $scope.homenavlist = res.data;
      });
      HomeService.gethomenavleft().success(function(res) {
        $scope.homeData= res.data;
      });
      
      /*下拉箭头的点击事件*/
      $scope.flag = true;
      $scope.changePages = function(index){
          $scope.changeStyle = [];
          $scope.changeStyle[index] = "active-nav";
          switch(index){
            // case 1: $location.path('/buy');
            // break;
          }
      }
      $scope.renderFinish = function(){
        //轮播事件
        HomeService.mySwiper()
      }
 }])
    app.directive('repeatFinish',function(){
        return {
            link: function(scope,element,attr){
              if(scope.$last){
                  scope.$eval( attr.repeatFinish )
                }
            }
        }
    })     
      
                

angular.module("FindModules",['me-lazyload'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('find',{
               url:'/find',
               templateUrl:'./modules/find/find.html',
               controller:'FindCtrl',
               css:'./modules/find/find.css'
          })
		})
.service("FindService",["$http",function($http){
	this.getevents=function(){
		return $http.get("json/find-banner.json")
	};
	this.getdata=function(){
		return $http.get("json/find-list.json")
	}
}])
 
.controller("FindCtrl",['$scope','FindService',function($scope,FindService){
	FindService.getevents().success(function(res){
		$scope.arr=res.data[0].events;
		$scope.ars=res.data[2].topic;
		$scope.ara=res.data[3].scenario;
		$scope.arw=res.data[5].destination;

	});
	FindService.getdata().success(function(rea){
		$scope.str=rea.data
	})

	//轮播图
		$scope.renderFinish = function(){

	     var mySwiper = new Swiper ('.banner', {
	     		autoplay:3000,
			 	pagination:'.swiper-pagination',
	   		})
		}
		$scope.render1Finish = function(){
			 var mySwiper2 = new Swiper ('.find-nav-content', {
				slidesPerView : 3
			 })
		} 
		$scope.render2Finish = function(){
			 var mySwiper3 = new Swiper ('.find-nav-contents', {
				slidesPerView :2.8
				

		   })
		}
		$scope.render3Finish = function(){
			 var mySwiper4 = new Swiper ('.find-nav-live', {
				slidesPerView :2.8
			 	})
	}
}])



app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            	if(scope.$last == true){
                scope.$eval( attr.repeatFinish )
            }
        }
    }
 })
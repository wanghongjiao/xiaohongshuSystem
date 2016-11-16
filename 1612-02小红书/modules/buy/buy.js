var app = angular.module('BuyModules', ['me-lazyload'])

	.config(function($stateProvider, $urlRouterProvider){

		$stateProvider.state('buy', {
			url: '/buy',
			templateUrl: './modules/buy/buy.html',
			controller: 'BuyCtrl',
			css: './modules/buy/buy.css',
		})

	})
	.service('BuyService',['$http',function($http){
		//导航菜单
	    this.getNavList = function(){
	        return $http.get('./json/buy-nav-list.json');
	    }
	    //Banner列表
	    this.getBannerList = function(){
	    	return $http.get('./json/buy-banner-01.json');
	    }
    }])




	.controller('BuyCtrl',function($scope, BuyService,$state){

		//导航列表
        BuyService.getNavList().success(function(res){
              $scope.arr = res.data.categories;
        });

        //banner列表 
        BuyService.getBannerList().success(function(res){
            $scope.bannerList1 = res.data[2].event;
            $scope.bannerList2 = res.data[3].event;
            $scope.bannerList3 = res.data[4].event;
        });

        $scope.renderFinish = function(){
		    var mySwiper = new Swiper('.swiper-container', {
				 slidesPerView : 3.2,
			})
		}

		// $(".buy-inside-li").on("click",".swiper-slide",function(){
		// 	var obj=$(this).find(".hide").val();
		// 	$state.go('buy-detail', {byspecialId:obj});
		// })



		/*王红娇写的页面传参的东西*/
		$scope.jump1=function(godsId){
			var info=$(".jumpi").find(".hide").val();
			$state.go('buy-detail', {godsId: info});
		}

    })




	//异步处理函数
app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
           if(scope.$last == true){
           	
                scope.$eval( attr.repeatFinish )
            }
        }
    }
})
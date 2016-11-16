var app = angular.module('SpecialModules', ['me-lazyload'])

	.config(function($stateProvider, $urlRouterProvider){

		$stateProvider.state('special', {
			url: '/special',
			templateUrl: './modules/special/special.html',
			controller: 'SpecialCtrl',
			css: './modules/special/special.css'
		})

	})


	.service('SpecialService',['$http',function($http){
		
		//请求页面数据
	    this.getSpecialInfo = function(){
	        return $http.get('./json/buy-banner-details.json');
	    }

    }])




	.controller('SpecialCtrl',['$scope', 'SpecialService', function($scope, SpecialService){

		//隐藏页脚
       	$(".find-footer").hide();
       	//回退上一个页面
        $scope.toBack = function(){
            window.history.back();
        }
       	//得到数据
       	SpecialService.getSpecialInfo().success(function(res){
            $scope.splList = res.data;   	
        });



        //显示和隐藏遮罩层
        $scope.show = false;
        $scope.showZ_list = function(){
            $scope.show = !$scope.show;

            if($scope.show == false){
            	$("#spl_flagg").removeClass().addClass("spl_flag");
            }
            if($scope.show == true){
            	$("#spl_flagg").removeClass().addClass("spl_flag1");
            }
        }

        //列表选项排序变化
        $scope.name="id";
        $scope.showspan1={
            "display":"inline-block"
        }
        $scope.ids=function(){
            $scope.showspan1={
                "display":"inline-block"
            };
            $scope.showspan2={
                "display":"none"
            };
            $scope.showspan3={
                "display":"none"
            }
            $scope.name="id";
            $scope.flag=0;
        }
        $scope.pricelow=function(){
            $scope.name='price';
            $scope.flag=0;
            $scope.showspan2={
                "display":"inline-block"
            };
            $scope.showspan1={
                "display":"none"
            };
            $scope.showspan3={
                "display":"none"
            }
        }
        $scope.pricehight=function(){
            $scope.name='price';
            $scope.flag=1;
            $scope.showspan3={
                "display":"inline-block"
            };
            $scope.showspan2={
                "display":"none"
            };
            $scope.showspan1={
                "display":"none"
            }
        }
    }])
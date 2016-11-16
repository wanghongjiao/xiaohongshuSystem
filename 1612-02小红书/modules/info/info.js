

angular.module('InfoModules',[])

     .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('info',{
               url:'/info',
               templateUrl:'./modules/info/info.html',
               controller:'InfoCtrl',
               css:'./modules/info/info.css'
          })

     })
     .service('InfoService',['$http',function($http){
        this.getData = function(){
            return $http.get('./json/info-dll-data.json');
        }
    }])

     .controller('InfoCtrl',['$scope','InfoService',function($scope,InfoService){
         InfoService.getData().success(function(res){
              $scope.arr = res.data;
        });

        setTopbar();
        function setTopbar() {
            var mySwiper1 = new Swiper('#swiper-container1',{
                watchSlidesProgress : true,
                watchSlidesVisibility : true,
                slidesPerView : 3,
                onTap: function(){
                    mySwiper2.slideTo( mySwiper1.clickedIndex)
                }
            });
            var mySwiper2 = new Swiper('#swiper-container2',{
                onSlideChangeStart: function(){
                    updateNavPosition();
                }
            });
            function updateNavPosition(){
                $('#swiper-container1 .active-nav').removeClass('active-nav');
                var activeNav = $('#swiper-container1 .swiper-slide').eq(mySwiper2.activeIndex).addClass('active-nav');
                if (!activeNav.hasClass('swiper-slide-visible')) {
                    if (activeNav.index()>mySwiper1.activeIndex) {
                        var thumbsPerNav = Math.floor(mySwiper1.width/activeNav.width())-1;
                        mySwiper1.slideTo(activeNav.index()-thumbsPerNav)
                    }
                    else{
                        mySwiper1.slideTo(activeNav.index())
                    }
                }
            }
        }
     }])

angular.module('SearchModules', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('search', {
      url: '/search',
      templateUrl: './modules/search/search.html',
      controller: 'SearchCtrl',
      css: './modules/search/search.css'
    })
  })
  .controller('SearchCtrl',['$scope',function($scope){
      $("#swiper-container3 .swiper-slide:first").addClass("search-changeBorder");
                //轮播事件
               var mySwiper1 = new Swiper ('#swiper-container3', {
                   watchSlidesProgress:true,
                   watchSlidesVisibility:true,
                   slidesPerView : 3,
                    onTap: function(){
                    mySwiper2.slideTo( mySwiper1.clickedIndex)
                      }
                  }) ;
               var mySwiper2 = new Swiper('#swiper-container4',{
                  onSlideChangeStart:function(){
                    updateNavPosition();
                  }
               });
               function updateNavPosition(){
                  $('#swiper-container3 .search-changeBorder').removeClass('search-changeBorder');
                  var activeNav = $('#swiper-container3 .swiper-slide').eq(mySwiper2.activeIndex).addClass('search-changeBorder');
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
  }])
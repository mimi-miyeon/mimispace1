(function ($) {
  $(function () {

    var $header = $('header'),
      $main = $('main'),
      $gnb = $header.find('.gnb'),
        
      $searchBtn = $header.find('.fa-search'),
      $search = $header.find('.search-wrap'),
      $close = $search.find('.close'),
        
      $second = $header.find('.second-nav'),
      $mMenu = $second.find('.menu'),
      $mClose = $second.find('.close');

    //gnb 클릭하면 고정
    $gnb.on('click', 'a', function () {
      $gnb.find('a').removeClass('on');
      $(this).addClass('on');
    }); //gnb-a-on

    //search 클릭하면 창 나오기
    $searchBtn.on('click', function () {
      $search.addClass('on');
    }); //searchbtn

    //main / x 클릭하면 search 창 들어가기
    $('figure').on('click', function () {
      $search.removeClass('on');
    }); //figure
    $close.on('click', function () {
      $search.removeClass('on');
    }); //close

    /*mobile menu*/
    $mMenu.on('click', function(){
      $(this).hide();
      $mClose.show();
      $mClose.addClass('on');
      $gnb.children().hide();
      $header.find('.gnb-wrap').slideDown();
      $gnb.children().fadeIn();
      $second.find('.search-btn').css({
        color: '#efefef'
      });
      $header.find('.logo').addClass('on');
    });//mMenu
    
    $mClose.on('click', function (){
      $(this).hide();
      $mMenu.show();
      $header.find('.gnb-wrap').slideUp(
      );
      $gnb.children().fadeOut();
      $second.find('.search-btn').css({
        color: '#222222'
      });
      $header.find('.logo').removeClass('on');
    });//mClose
  }); //function  
})(jQuery);
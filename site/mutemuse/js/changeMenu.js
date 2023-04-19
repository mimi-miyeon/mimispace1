(function ($) {
  $(function () {

    var $body = $('.wrap'),
      $header = $body.find('header'),
      $bar = $body.find('.fa-bars'),
      $slash = $body.find('.fa-slash'),
      $gnb = $header.find('.gnb'),
      $section = $body.find('section'),
      $fade = $body.find('.fade');

    $bar.on('click', function () {
      $bar.hide();
      $slash.fadeIn();
      $header.addClass('on', function(){
				$('.header-con').animate({
					left: 0,
					opacity: '1'
				},1900);//-con anima
				
				$('.header-pic').animate({
					marginLeft: '10%',
					opacity: '1'
				},2000);//-pic anima
			});
    }); //fa-bars - click

    $slash.on('click', function () {
      $bar.show();
      $slash.hide();
      $header.removeClass('on', function(){
				$('.header-con').animate({
					left: '-5%',
					opacity: 0
				},1900);//-con anima
				
				$('.header-pic').animate({
					marginLeft: '5%',
					opacity: 0
				},2000);//-pic anima
			});
    }); //slash - click

    $gnb.on('click', 'a', function () {
      $gnb.find('a').removeClass('on');
      $(this).addClass('on');

      $header.removeClass('on');
      $bar.fadeIn();
      $slash.hide();
      $section.removeClass('on');
      $section.eq($(this).index()).addClass('on');
    }); //gnb-click

    $('.logo').on('click', 'a', function () {
      $header.removeClass('on');
      $bar.fadeIn();
      $slash.hide();
      $section.removeClass('on');
      $('.visual').addClass('on');
      $gnb.find('a').removeClass('on');
    }); //logo-function

  }); //function
})(jQuery);

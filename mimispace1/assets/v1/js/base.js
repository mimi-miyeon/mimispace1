(function ($) {
  $(function () {

	var $header = $('.header-con'),
		$gnb = $header.find('.gnb'),
		$bar = $header.find('.bar'),
		$close = $header.find('.close');

	$('header').each(function () {

		var $header = $(this),
			headerBottom = $header.offset().top,

			copy = $header.contents().clone(),
			cover = $('<div class="clone"></div>');

		/*헤더 고정
		스크롤 좌표값이
		헤더 높이 아래로 내려오면
		.clone이 나타난다.
		*/
		//클론 만들기
		cover.append(copy);
		cover.appendTo('body');

		//클론이 나타난다. 만약 스크롤 좌표값이 > 헤더 높이 값
		$(window).on('scroll', function () {
			var scroll = Math.floor($(this).scrollTop());

			if (scroll > headerBottom) {
				cover.addClass('on');
				$('header').hide();
				$($header).show();
			} else {
				cover.removeClass('on');
				$('header').show();
			}

		}); //scroll
	}); //header-each
	
	/*모바일 메뉴 버튼*/
	$('.bar').on('click', function () {
		$gnb.addClass('on');
		$('.bar').hide();
		$close.show();

	}); //bar-click
	$close.on('click', function () {
		$gnb.removeClass('on');
		$('.bar').show();
		$close.hide();
	}); //close-click
  }); //function  
})(jQuery);
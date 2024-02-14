(function ($) {
	$(function () {

		var $main = $('main'),
			$slide = $main.find('.slide'),
			$prev = $main.find('.prev'),
			$next = $main.find('.next'),

			currentIndex = 0,
			count = $slide.length;


		/*section3 banner*/
		$('.slide').each(function (i) {
			$(this).css({
				left: 100 * i + '%'
			});
		}); //each-function

		/*'이전','이후'로 이동*/
		//1. 슬라이드 함수

		function slideShow(n) {
			$('.slide-wrap').stop().animate({
				left: -100 * n + '%'
			});

			currentIndex = n;
			upDate ();
		}

		$prev.on('click', function (e) {
			e.preventDefault();
			slideShow(currentIndex - 1)
		}); //prev-function

		$next.on('click', function (e) {
			e.preventDefault();
			slideShow(currentIndex + 1)
		}); //next-function

		/*이전, 이후 없애기*/
		function upDate() {
		if (currentIndex == 0) {
			$prev.hide()
		} else {
			$prev.show()
		}

		if (currentIndex == (count - 1)) {
			$next.hide()
		} else {
			$next.show()
		}
		};

upDate();

	}); //function  
})(jQuery);

(function ($) {
	$(function () {

		var $main = $('.main-con'),
			$opt = $main.find('.opt'),
			idx = $(this).index(),
				
			$ingre = $main.find('.ingre');

		/*클릭하면 고정*/
		$opt.on('click', 'a', function (e) {
			e.preventDefault();

			$opt.find('h4').removeClass();
			$(this).find('h4').addClass('on');
		}); //opt-a

		/*재료 나오기*/
		$opt.on('click', function () {
			$ingre.hide();
			$ingre.eq(idx).show();
		}); //opt-show
	}); //function
})(jQuery);
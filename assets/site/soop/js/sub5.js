(function ($) {
	$(function () {

		var $main = $('.main-con'),
			$opt = $main.find('.opt'),
      $heart = $main.find('.fa-heart'),
				
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
			$ingre.eq($(this).index()).show();
		}); //opt-show
		
			/*추가 레시피 나오기*/
	$('.pic1').on('click', function(){
		$('.recom-wrap').slideToggle();
	});//aubergine
  $opt.on('click', function(){
		$('.recom-wrap').fadeOut();
	})
		/*'좋아요' toggle*/
    $heart.on('click', function (e) {
      e.preventDefault();
      $(this).siblings('button').toggle();
      $(this).hide();
    }); //rheart-toggle
		
		/*식재료 나열*/
		$('.ingre1').find('.opt-pic').each(function (j){
			$(this).css({
				left: 130 * j + 'px'
			});		
		});//opt-pic each
		
		$('.ingre2').find('.opt-pic').each(function (j){
			$(this).css({
				left: 130 * j + 'px'
			});		
		});
	}); //function
})(jQuery);
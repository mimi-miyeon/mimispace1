(function($) {
	$(function(){
		
		$('.sub').on('click', function(){
			$('.page').find('img').hide();
			$('.page').chidren().show();
		});
		
	});//function
})(jQuery);
(function($) {
	$(function(){
		
		$('.gnb li').on('click', function (){
			$('.gnb li').removeClass('on');
			$(this).addClass('on');
			
			$('img').hide();
			$('img').eq($(this).index()).show();
		});//gnb-a
		
		$('.logo').on('click', function(){
			$('img').hide();
			$('img').eq(0).show();
			$('.gnb li').removeClass('on');
			$('.gnb li').eq(0).addClass('on');
		})
	});//function
})(jQuery);
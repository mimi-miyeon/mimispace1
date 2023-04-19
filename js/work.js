(function ($) {
  $(function () {

	var $work = $('.work'),
		$graph = $work.find('.graphic'),
		$all = $work.find('.all'),
		$web = $work.find('.web'),
		$etc = $work.find('.etc');

	/*팝업*/
	$('.con-left .con').click('a', function (e) {
		var i = $('.con-left .con').index(this);
		e.preventDefault();
		$('body').css({
			overflowY: 'hidden'
		});
		$('.pop').eq(i * 2).slideDown();
		// $('.pop'+ i*2).slideDown()
	}); //click-left

	$('.con-right a').click(function (e) {
		var i = $('.con-right a').index(this);
		e.preventDefault();
		$('body').css({
			overflowY: 'hidden'
		});

		$('.pop').eq(1 + i + i++).slideDown();
	});

	$('.pop').click(function () {
		$('.pop').slideUp(function () {
			$('.pop').scrollTop(0);
		});
		$('body').css({
			overflowY: 'scroll'
		});
	});	
		
		/*준비중*/
		$('.prep').click(function() {
			$('.unpop').css({display:'none'});
			$('body').css({overflowY: 'auto'});
		});
		
	/*work fi1lter*/
	$('.local').on('click', 'a', function (e) {
		e.preventDefault();
		
		/*클릭 메뉴 표시*/
		$('.local').find('a').removeClass();
		$(this).addClass('on');
	}); //local
		
   /*all 나오기*/
		$('.local a').eq(3).on('click', function(){
			$work.find($all).fadeIn();
		});
		
		/*web 나오기*/
		$('.local a').eq(2).on('click', function(){
			$work.find($all).fadeOut();
			$work.find($web).fadeIn();
		});
		
		/*graph 나오기*/
		$('.local a').eq(1).on('click', function(){
			$work.find($all).fadeOut();
			$work.find($graph).fadeIn();
		});
		
		/*etc 나오기*/
		$('.local a').eq(0).on('click', function(){
			$work.find($all).fadeOut();
			$work.find($etc).fadeIn();
		});
		
		/*슬라이드 업*/
		var $conL = document.getElementsByClassName("con-left")[0],
				$conR = document.getElementsByClassName("con-right")[0];
		
		function slideUp (e) {
			e.classList.add("up");
		}
		
		slideUp($conL);
		slideUp($conR);
		
//		var $con = document.getElementsByClassName("con");
//		
//		function slideUp($con) {
//			$con.classList.add("up");
//		}
//		
//		function delay(slower) {
//			var delayTime = 0;
//			
//			for (var i in slower) {
//				setTimeout(slideUp, delayTime, slower[i]);
//				delayTime += 500;
//			}
//		}
//		delay($con);
		
  }); //function  
})(jQuery);
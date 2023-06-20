//(function ($) {
//	$(function () {
//		/*paging*/
//		$(window).on('load', function () {
//			$('.step1').css('display', 'block');
//		});
//		setTimeout(function () {
//			$('.step1').find('.text-wrap > p').eq(0).addClass('paral');
//		}, 100);
//		setTimeout(function () {
//			$('.step1').find('.text-wrap > p').eq(1).addClass('paral');
//		}, 500);
//		
//		var bye = 0,
//				hi = 1,
//				hintBye = 1;
//		
//		/*next btn*/
//		$('.next-btn').on('click', function () {
//			bye++;
//			hi++;
//			
//				$('.step'+hi).css('display','block');
////				$('.hint'+hi).fadeOut();
//				$('.step'+bye).fadeOut();
//				setTimeout(function() {
//					$('.step'+hi).find('.text-wrap > p').eq(0).addClass('paral');
//				}, 100);
//				setTimeout(function() {
//					$('.step'+hi).find('.text-wrap > p').eq(1).addClass('paral');
//				}, 500);
//
//				setTimeout(function() {
//					$('.step'+hi).find('.con3').css({display:'block',opacity:1});
//				}, 2300);
//
//				setTimeout(function() {
//					$('.step'+hi).find('.text-wrap > .text1').addClass('paral');
//				}, 100);
//				setTimeout(function() {
//					$('.step'+hi).find('.text-wrap > .text1').addClass('scale');
//				}, 2500);
//				setTimeout(function() {
//					$('.step'+hi).find('.text-wrap > .text2').addClass('paral');
//				}, 2500); 
//			
//				setTimeout(function() {
//					$('.hint'+hi).fadeOut();
//				}); 
//			
//			if (hi >=8 && hi <=17) {
//				$('.btn-wrap').fadeOut();
//			}
//		}); //next-click
//	});
//})(jQuery);
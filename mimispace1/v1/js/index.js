$(function(){
	
	var $main = $('main'),
			$left1 = $main.find('.plant-l1'),
			$left2 = $main.find('.plant-l2'),
			$gradient = $main.find('.gradient'),
			$right = $main.find('.plant-r');
	
	$main.on('mousemove', function(e){
    //마우스 좌표값 저장하기
    var mx = e.pageX,
        my = e.pageY;
    
    $left1.css({
      left : 0 - (mx/100),
      top: 150 - (my/50)
    });
    $left2.css({
      left : 130 + (mx/100),
      top: 100 + (my/60)
    });
    
    $right.css({
      right : 0 - (mx/750),
      top: 50 - (my/40)
    });
    
  });
});
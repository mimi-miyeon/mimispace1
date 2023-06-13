(function ($) {
  $(function () {

	var $work = $('.work'),
		$graph = $work.find('.graphic'),
		$all = $work.find('.all'),
		$web = $work.find('.web'),
		$etc = $work.find('.etc');

	$('.work li a').click(function (e) {
		e.preventDefault();
		const popId = this.getAttribute('aria-labelledby');
		
		const href = document.querySelector('.pop .go-work');
		const name = document.querySelector('.project-name');
		const title = document.querySelector('.project-title');
		const type = document.querySelector('.project-type');
		const date = document.querySelector('.project-date');
		const bgImg = document.querySelector('.section-header__bg__img');

		const explainUl = document.querySelector('.section-explain__ul');

		fetch('./js/work_detail.json').then(res=>{
			return res.json()
		}).then(data =>{
			const index = () => {
				for(let i=0;i<data.length;i++) {
					if(data[i].id===popId) {
						return i;
					}
				}
			}

			if(index() != undefined) {
				const object = data[index()];
				$('body').css({
					overflowY: 'hidden'
				});
				$('.pop').slideDown();
				if(object.href != ""){
					document.querySelector('.pop .go-work').removeAttribute('onclick');
					href.setAttribute('href', object.href);
				} else {
					href.setAttribute('onclick',"alert('현재 작업중입니다❤'); this.removeAttribute('onclick');");
					href.removeAttribute('href');
				}
				name.innerHTML = object.name;
				title.innerHTML = object.title;
				type.innerHTML = object.type;
				date.innerHTML = object.date;

				// header 아래 모바일 기기 적용된 이미지
				if(object.screenImg !== ''){
					const img = new Image();
					img.src = object.screenImg;
					img.alt='';
					img.classList.add('project-screen-img')
					document.querySelector('.section-header__inner').appendChild(img);
				}
				bgImg.style.backgroundImage = `url("${object.bgImg}")`;

				// 설명 텍스트 부분
				explainUl.innerHTML='';
				function liCreator(con) {
					const li = document.createElement('li');
					const h5 = document.createElement('h5');
					const p = document.createElement('p');
					
					li.classList.add('section-explain__ul__li');
					h5.classList.add('color');
					h5.innerHTML = con.split('/')[0];
					p.innerHTML = con.split('/')[1];
					// li.innerHTML = con;
					li.appendChild(h5)
					li.appendChild(p)
					return li;
				};
				for(let i=0;i<object.details.length;i++){
					explainUl.appendChild(liCreator(object.details[i]));
				}

				if(object.details.length>0){
					const fragment = document.createDocumentFragment();

					function imgCreator(con) {
						const img = new Image();
						img.src = con;
						img.alt='';
						return img;
					};
					
					for(let i=0;i<object.imgs.length;i++){
						fragment.appendChild(imgCreator(object.imgs[i]));
					}

					const li = document.createElement('li');
					li.classList.add('section-explain__ul__li');
					li.classList.add('section-explain__ul__li--imgs');
					li.appendChild(fragment);
					explainUl.appendChild(li);
				}

				const colorArr=document.querySelectorAll('.color');
				colorArr.forEach(el=>{
					el.style.color = object.color;
				});

				const pop = document.querySelector('.pop');
				if(object.style != ''){
					pop.innerHTML += `<div class="style-wrap"><style>${object.style}</style></div>`
				} else {
					if(document.querySelector('.style-wrap')) {
						document.querySelector('.style-wrap').remove();
					}
				}
				document.querySelector('.pop button.close').onclick=function () {
					$('.pop').slideUp(function () {
						$('.project-screen-img').remove();
						$('.style-wrap').remove();
					
						document.querySelector('.pop .go-work').removeAttribute('onclick');
						document.querySelector('.pop .go-work').removeAttribute('href');
					});

					$('body').css({
						overflowY: 'scroll'
					});
					setTimeout(()=>{$('.pop').scrollTop(0)}, 300)
				};	

				// $('.pop button.close').click(function () {
				// 	$('.pop').slideUp(function () {
				// 		console.log(document.querySelector('.pop').scrollTop);
				// 		$('.pop').scrollTop = 0
				// 		$('.project-screen-img').remove();
				// 	});
				// 	$('body').css({
				// 		overflowY: 'scroll'
				// 	});
				// 	setTimeout(()=>{$('.style-wrap').remove();}, 500)
				// });	
				
			} else {
				alert('현재 작업중입니다❤');
				return;
			}
		})
	});
	
	
		
		/*준비중*/
		// $('.prep').click(function() {
		// 	$('.unpop').css({display:'none'});
		// 	$('body').css({overflowY: 'auto'});
		// });
		
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
		
  }); //function  
})(jQuery);
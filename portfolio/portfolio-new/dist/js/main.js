$(document).ready(function () {

//	HEADER0ACTIVE
	
	$('.click-menu').click(function(){
		$('.header-page').toggleClass('active');
	});
	
//	BTN
	
	$('.button-animation__left').hover(function(){
		$(this).closest('.button-animation').toggleClass('left');
	});
	
	$('.button-animation__right, .button-animation__desc').hover(function(){
		$(this).closest('.button-animation').toggleClass('right');
	});
	
	
	
	
	
});


$(function () {
	$(window).scroll(function () {
		
		var height = $(".top-section").height();
		var top = $(document).scrollTop();

		if (top >= height){
			$(".content-sect__top-panel").addClass('fix');
		}
		else{
			$(".content-sect__top-panel").removeClass('fix');
		}
	});
});

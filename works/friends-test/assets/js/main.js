$(document).ready(function(){
//	---SLICK-1---
	$(".slick-slider-1").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: false,
		responsive: [{
			breakpoint: 892,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				infinite: true
			}
		}]
	});
	//	---SLICK-1 END---
	
	//	---MENU---
	$('.header-page').on('click', '.open-menu-min', function() {
		$('.header-page').toggleClass('open-sub-menu');
		//	---MENU END---
	});
})
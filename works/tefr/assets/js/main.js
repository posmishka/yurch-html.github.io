$(document).ready(function(){
//	---SLICK-1---
	$(".slick-slider-1").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				infinite: true
			}
		}]
	});
	//	---SLICK-1 END---
})
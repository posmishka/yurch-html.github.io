$(document).ready(function () {
	
//	tumbler face
	
	
	$('.clip__cont').click(function(){
		$('.header-page').toggleClass('active');
	});
	
	$('.nav-slider__click').click(function(){
		$(this).closest('.nav-slider__item').addClass('active').siblings().removeClass('active');
		
		$('.main-page__wrap').removeClass('js-33 js-66 js-0').addClass( $(this).attr('id') );
	});
	
	//	product-card-SLIDER	
	$(".slick-slider-1").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
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
	
	$(".slick-slider-2").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
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
	
	
});

var vid = '';
function playVid() {
	if ($(vid).length > 0) {
		$("#video-play").fadeOut(300, function () {
			$("#poster").fadeOut(1000, function () {
				vid.play();
			});
		});
	}
}

$(document).ready(function () {
	vid = $('#video-item')[0];

	if ($(vid).length > 0) {
		vid.onended = function () {
			$("#poster").fadeIn(1000, function () {
				$("#video-play").fadeIn(300);
			});
		}
	}
});


//-----------------------MAIN PAGE----------------------------

$(document).ready(function() {

    //	tumbler face


    $('.clip__cont').click(function() {
        $('.header-page').toggleClass('active');
    });

    $('.nav-slider__click').click(function() {
        $(this).closest('.nav-slider__item').addClass('active').siblings().removeClass('active');

        $('.main-page__wrap').removeClass('js-33 js-66 js-0').addClass($(this).attr('id'));
    });


    $('.nav-slider__click').click(function() {
        $('.line').removeClass('js-33 js-66 js-0').addClass($(this).attr('id'));
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

    //	leng

    $('body').on('click', '.leng-list__link', function() {
        $(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
    });
	
//	LINE
	if ($('#poster').hasClass('video-bord')) {
		$('.line').show();
	}

});


//---video
var vid = '';

function playVid() {
    if ($(vid).length > 0) {
        $("#video-play").fadeOut(300, function() {
            $("#poster").fadeOut(1000, function() {
                vid.play();
            });
        });
    }
}

$(document).ready(function() {
    vid = $('#video-item')[0];

    if ($(vid).length > 0) {
        vid.onended = function() {
            $("#poster").fadeIn(1000, function() {
                $("#video-play").fadeIn(300);
            });
        }
    }


    //	--------------------------Why we PAGE--------------------

    //	double-slider

	$('.item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		asNavFor: '.thumb-slider',
        dots: true,
        arrows: false,
        focusOnSelect: true,
        draggable: false,
		vertical: true,
        infinite: true
    });

	$('.thumb-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		asNavFor: '.item-slider',
        infinite: true,
        draggable: false,
		autoplay: true,
		autoplaySpeed: 15000,
		fade: true,


    });

	
	
	if ($('.why-page-slide').hasClass('page')) {
		$('.wi-page-line').show();
	}
	
	  
	
	$(window).on('load', function(){
		if( $('#mCSB_2_container').height()  < $('.item-slider__desc-wp').height()  ){
			$('.mCSB_draggerContainer').hide();			
		}else{
			$('.mCSB_draggerContainer').show();		
		}
	})

	$('.tag').hover(function(){
		$('.why-page-slide__anim').toggleClass('active');
	});
	

	
	
	$('.thumb-slider').on('beforeChange', function(event, slick, currentSlide){
		$('.tag').toggleClass('active');
	});
		

	//	--------------------------CATALOGUE PAGE--------------------
	
	$('.catalogue-item__front').click(function(){
		$(this).closest('.catalogue-item').addClass('rotate');
	});
	
	$('.catalogue-item__back').mouseleave(function(){
		$(this).closest('.catalogue-item').removeClass('rotate');
	});
	
});
	
	
	
	
	
	
	
	
	
$(document).ready(function(){
	
//	LENG
	$('.leng-item').click(function(){
		$(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
	});
	
	var leng = $('.leng-list__item.active .leng-item__text').text();
	
	$('.leng__active').text( leng );
	
	
//	MAIN-BANNER
	var owlMain = $('.owl-carousel-1');
	owlMain.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 3000, 
		nav: true,
		dots: false
	});
	
//	BRaND-SLIDER
	var owlBrand = $('.owl-carousel-2');
	owlBrand.owlCarousel({
		items: 8,
		nav: true,
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 3000
		
	});
	
//	ancor
	jQuery("a[href^='#']").click(function() {
		var elementClick = jQuery(this).attr("href");
		var destination = jQuery(elementClick).offset().top;
		jQuery("html, body").animate({
			scrollTop: destination
		}, 300);


		return false;
	});
	
});


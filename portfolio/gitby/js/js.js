  jQuery(document).ready(function () {
//	  ---menu
	  $('.nav-bar').click(function(){
		  $('.nav-page').slideToggle(300);
	  })
	  
	
//	  
	  
	  
	  $('.aside-page__click').click(function(){
		var block = $(this).closest('.aside-page__item');
		var btn = $(this);
		var submenu = $(block).find('.aside-page__submenu');
		
		if($(block).hasClass('active')){
			$(block).removeClass('active');
			$(submenu).slideUp(300);
		}
		else{
			$(block).addClass('active');
			$(submenu).slideDown(300);
		}
	  });
	  
	$('input[type="tel"]').mask('+38 (999) 999-99-99');

  	$(this).find('.tabs-slide__item').each(function (i) {
  		$(this).click(function () {
  			$(this).addClass('active').siblings().removeClass('active')
  				.closest('.tabs-slide').find('.tabs-slide__content').removeClass('active').eq(i).addClass('active');
  		});
  	});

  	function starRotator() {
  		var that = this;
  		that.intervalId = null;
  		that.intervalDuration = 18000;
  		that.els = $('.tabs-slide__item');

  		that.init = function () {
  			that.els.hover(that.stop);
  			that.els.mouseleave(that.start);
  			that.start();
  		}

  		that.stop = function () {
  			clearInterval(that.intervalId);
  		}

  		that.start = function () {
  			that.intervalId = setInterval(function () {
  				var el = that.els.filter('.active').next();
  				el = el.length ? el : that.els.filter(':first-child');
  				el.click();
  			}, that.intervalDuration);
  		}
  	}

  	(new starRotator()).init()

  	$(window).on('load', function () {
  		var $preloader = $('#page-preloader'),
  			$spinner = $preloader.find('.spinner');
  		$spinner.fadeOut();
  		$preloader.delay(350).fadeOut('slow');
  	});


  	jQuery('a[href^="#"]').click(function () {
  		var elementClick = jQuery(this).attr("href");
  		if (jQuery(elementClick).length > 0) {
  			var destination = jQuery(elementClick).offset().top;
  			jQuery(".baron__scroller").animate({
  				scrollTop: destination
  			}, 400);
  		}
  		return false;
  	});
  	//

  	// scroll-top 
  	$(function () {
  		$('.baron__scroller').scroll(function () {
  			var top = $('.baron__scroller').scrollTop();
  			if (top < 600) $(".scroll-top").removeClass('fixed-arrow');
  			else $(".scroll-top").addClass('fixed-arrow');
  		});
  	});
  	//
  	// video
  	$('.video-play').click(function () {
  		$('.video-page__padding').addClass('play-play');
  		$('.poster').addClass('d_none');
  	});
  });

  function playVid() {
  	$("#video-play").fadeOut(300, function () {
  		$("#poster").fadeOut(1000, function () {
  			vid.play();
  		});
  	});
  }
  var vid = $('#video-item')[0];
  vid.onended = function () {
  	$("#poster").fadeIn(1000, function () {
  		$("#video-play").fadeIn(300);
  	});
  };



  $(function () {
  	$('.baron__scroller').scroll(function () {
  		var top = $('.baron__scroller').scrollTop();
  		console.log($(window).height());
  		console.log(top);
  		if (top > 200) $(".last-work-h").addClass('anim_l');
  		if (top > 300) $(".last-works-tittle__sub").addClass('anim_r');
  		if (top > 900) $(".video-tittle").addClass('anim_l');
  		if (top > 1700) $(".sect-whywy__tittle").addClass('anim_r');

  		if (top > 1800) $(".advantage-list__item:nth-child(1)").addClass('anim_s');
  		if (top > 1930) $(".advantage-list__item:nth-child(2)").addClass('anim_s');
  		if (top > 2050) $(".advantage-list__item:nth-child(3)").addClass('anim_s');

  		if (top > 2400) $(".h1-wrap").addClass('anim_l');
  		if (top > 3400) $(".form-wrap__wrap-tittle").addClass('anim_l');
  	});
  });


  	$(function () {
  		$('.baron__scroller').scroll(function () {
  			var top = $('.baron__scroller').scrollTop();
  			if (top < 80) $(".header-pege").removeClass('header-pege__menu-scroll');
  			else $(".header-pege").addClass('header-pege__menu-scroll');
  		});
  	});














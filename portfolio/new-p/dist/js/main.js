$(document).ready(function() {
    //	PRELOADER---
    $(window).load(function() {
        setTimeout(function() {
            $('body').addClass('load');
        }, 1000);

    });

    //	anchor
    jQuery("a[href^='#']").click(function() {
        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 300);


        return false;
    });

    //	HEADER0ACTIVE

    $('.click-menu').click(function() {
        $('.header-page').toggleClass('active');
    });

    //	BTN

    $('.button-animation__left').hover(function() {
        $(this).closest('.button-animation').toggleClass('left');
    });

    $('.button-animation__right, .button-animation__desc').hover(function() {
        $(this).closest('.button-animation').toggleClass('right');
    });

    //	TABPAGES

	$('.mywork, .button-animation__link').click(function() {
        $('.portfolio').addClass('active');
        $('.use').removeClass('active');
        $('.contact').removeClass('active');
    });

    $('.ause').click(function() {
        $('.portfolio').removeClass('active');
        $('.use').addClass('active');
        $('.contact').removeClass('active');
    });

    $('.cinfo').click(function() {
        $('.portfolio').removeClass('active');
        $('.use').removeClass('active');
        $('.contact').addClass('active');
    });



});


$(function() {
    $(window).scroll(function() {

        var height = $(".top-section").height();
        var top = $(document).scrollTop();

        if (top >= height) {
            $(".content-sect__top-panel").addClass('fix');
        } else {
            $(".content-sect__top-panel").removeClass('fix');
        }


        var scrollText = $(this).scrollTop();

        $('.top-section__desc').css({
            'transform': 'translate( 0%, " + scrollText + "%'
        });

        var scrollText = $(this).scrollTop();

        $('.top-section__desc').css({
            "transform": "translate(0%, -" + scrollText / 3 + "px)"
        });
		
		
    });
});

















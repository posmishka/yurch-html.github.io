//video
if($('#video-yt').length > 0) {
  $('body').on('click', '.play-video-ico', function(){
    $(this).attr('disabled', true);
    var iframe = document.createElement('iframe');
    var VIDEO_ID = $('#video-yt').attr('data-video').split('watch?v=')[1];
    var linkEmbedVideo = "https://www.youtube.com/embed/" + VIDEO_ID + "?autoplay=1";

    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');

    $(this).closest('.video-yt').find('.video-yt__video').append(iframe);
    $(iframe).attr('src', linkEmbedVideo);
    $('.video-yt__bord').fadeOut(2000);
  });
}

$(document).ready(function(){
  //burger
  $('body').on('click', '.open-menu', function(){
    $('.header-page').toggleClass('active');
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
  
//  slick
  $(".comment-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true
      }
    }]
  });
  
  $(".file-slider-1").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });
  
  $(".file-slider-2").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });
});


$(document).ready(function() {
  /*
			 *  Simple image gallery. Uses default settings
			 */

  $('.fancybox').fancybox();

  /*
			 *  Different effects
			 */

  // Change title type, overlay closing speed
  $(".fancybox-effects-a").fancybox({
    helpers: {
      title : {
        type : 'outside'
      },
      overlay : {
        speedOut : 0
      }
    }
  });

});













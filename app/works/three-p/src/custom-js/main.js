//video
if($('#video-yt').length > 0) {
  $('body').on('click', '.play-video-ico', function(){
    $(this).attr('disabled', true);
    var iframe = document.createElement('iframe');
    var linkEmbedVideo = $('#video-yt').attr('data-video');

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
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true
      }
    }]
  });
  
  /////////////////////////
  $('.fancybox').fancybox();

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
  
  /////////////////////////
  $('.js-call').click(function(){
    $('.js-call-modall').addClass('active');
    $('body').addClass('modal-fixed');
  });
  
  $('.close-btn, .modal-wrap__close').click(function(){
    $('.modal-wrap').removeClass('active');
    $('body').removeClass('modal-fixed');
  });
  
  $('.js-modal-1').click(function(){
    $('.modal-1').addClass('active');
    $('body').addClass('modal-fixed');
  });
  
  $('.js-modal-2').click(function(){
    $('.modal-2').addClass('active');
    $('body').addClass('modal-fixed');
  });
  
  $('.js-modal-3').click(function(){
    $('.modal-3').addClass('active');
    $('body').addClass('modal-fixed');
  });
  
  /////////////////////////  
  $('input[type="tel"]').inputmask({"mask": "+7(999) 999-99-99"});
});















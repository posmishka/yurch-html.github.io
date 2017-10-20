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
});

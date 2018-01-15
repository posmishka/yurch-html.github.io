//////////////////////////////////////////////
$(document).ready(function(){
  $('.open-menu').click(function(){
    $('.header-page').toggleClass('active');
  });
  
  if ( $('.step-second-wrap') ) {
    var tabH = $('.tabs-services__list-item').height();

    $('.form-creation__body-scroll').scroll(function(){
      var crollT = $('.form-creation__body-scroll').scrollTop();

      if ( crollT > 270 ) {
        $('.tabs-services__list').css('padding-top', tabH);
        $('.tabs-services__menu').addClass('fix').css('width', $('.tabs-services__desc').width());
      }else {
        $('.tabs-services__list').css('padding-top', 0);
        $('.tabs-services__menu').removeClass('fix');
      }
    });
  }
});

if ($('#tv').length > 0) {
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var vidLink = $('#tv').attr('data-video-yt').split('watch?v=')[1];
var tv,
    playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};

var tv2,
    playerDefaults = { autohide: 1,  modestbranding: 0, rel: 0, showinfo: 0, controls: 1, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};

var vid = {'videoId': vidLink, 'suggestedQuality': 'hd1080', 'startSeconds': 1};
var vid2 = {'videoId': vidLink, 'suggestedQuality': 'hd1080', 'startSeconds': 1};

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
  tv2 = new YT.Player('tv2', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv
    .loadVideoById(vid)
    .mute();

  tv2
   
    .loadVideoById(vid2)
    .stopVideo();
//    .mute()
}

function onPlayerStateChange(e){
  if (e.data === 1){
  } else if (e.data === 0){
  }
}

function vidRescale(){

  var w = $(window).width()+200,
      h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}


$(window).on('load resize', function(){
  vidRescale();
  
  setTimeout(function(){
    $('.video-bord').addClass('active');
  }, 100);
});

/////////////////////////////////////
$('body').on('click', '#play-video', function(){
  tv.pauseVideo();
  tv2.playVideo();
  $(this).prop('disabled', true);
  $('.video-sect__vid, .video-sect__full-control').addClass('active');
});

$('body').on('click', '#close-vid', function(){
  $('.video-sect__full-control').removeClass('active');
  $('#play-video').prop('disabled', false);
  tv.playVideo();
  tv2.pauseVideo();
});

}







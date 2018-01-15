$(document).ready(function(){
//  lang
  $('.lang-list__btn').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  //  menu
  $('.open-menu').click(function() {
    $('.main-control').toggleClass('active');
  });
  
//  search
  var botPanel = $('.bott-panel').outerHeight();
  
  $('.js-open-search').click(function() {
    $('.squares-sect').addClass('open-search');
  });
  
  $('.js-close-search').click(function() {
    $('.squares-sect').removeClass('open-search');
  });
  
//  js-open-social
  $('.js-open-social').click(function() {
    $('.social-list').toggleClass('active');
  });

  // slider
  $(".js-carousel-1").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: false
  });
});















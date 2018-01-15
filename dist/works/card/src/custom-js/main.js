$(document).ready(function(){
  //	product-card-SLIDER	
  $(".js-slick-slider-1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-slick-slider-2',
    dots: false,
    focusOnSelect: true,
    draggable: false,
    infinite: true,
    vertical: true,
    arrows: false,
    responsive: [{
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        vertical: false,
      }
    }]
  });

  $(".js-slick-slider-2").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-slick-slider-1',
  });

  //prew-slider
  $(".js-slick-slider-3").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    padding: 15,
    responsive: [{
      breakpoint: 777,
      settings: {
        slidesToShow: 2,
        vertical: false,
      }
    }]
  });
  
  //burger
  $('body').on('click', '.open-menu', function(){
    $('.header-page').toggleClass('active');
  });
});













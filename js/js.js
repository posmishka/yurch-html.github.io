$(document).ready(function() {
    $('.menu_main_on_of').click(function() {
        $('.menu_main').toggleClass('red');

        $('header').toggleClass('n_header');
    });


    $('header, .slide_menu a, article, footer').click(function() {
        $('.red').removeClass('red');
        $('.n_header').removeClass('n_header');
    });
    
    
    $('header, .slide_mobil a, article, footer').click(function() {
        $('.mobile_scroll').removeClass('mobile_scroll');
       
    });

    

    $('.top_bottom').click(function() {
        $('.menu_mobile').toggleClass('mobile_scroll');
  
    });

    $('.left_div').hover(function() {
        $('.button').toggleClass('left');


    });
    $('.right_div, .right_div+span').hover(function() {
        $('.button').toggleClass('right');
       

    });


    $('.social_tw').click(function() {
        $(this).find('.twitter').toggleClass('twit_d');
    });
    $('header, .menu_p_b, .front_mobile_b').click(function() {
        $('.twitter').removeClass('twit_d');
    });


     $('.prod_a').click(function() {
$('.prod_a').addClass('prod_a_line');
        $('.margin_plus').addClass('margin_plus_none');
         $('.margin_minus').removeClass('margin_minus_none');
         $('.prod_b').removeClass('prod_b_line');
         $('.prod_q').removeClass('prod_q_line');
    });
      $('.prod_b').click(function() {
          $('.prod_b').addClass('prod_b_line');
        $('.margin_minus').addClass('margin_minus_none');
           $('.margin_plus').removeClass('margin_plus_none');
          $('.prod_a').removeClass('prod_a_line');
          $('.prod_q').removeClass('prod_q_line');
    });
    $('.prod_q').click(function() {
        $('.margin_minus, .margin_plus').removeClass('margin_minus_none margin_plus_none');
     $('.prod_q').addClass('prod_q_line');
        $('.prod_b').removeClass('prod_b_line');
        $('.prod_a').removeClass('prod_a_line');
   }); 
    
    
    
    

});
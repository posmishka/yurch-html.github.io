$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
	
	
	$(function () {                                      // Когда страница загрузится
    $('.aa3').each(function () {             // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('active');  //добавляем класс
        }
    });
});
	

});
$(document).ready(function(){
$(".acc-h").click(function(){
$(this).next().slideToggle(1000);	
	
	
});

});	

// llllllllllllllll

$(function () {

$('.menu li').hover(function () {
//показать подменю
$('ul', this).slideToggle(100);

}

);

});
$(document).ready(function(){



	
// });
// 


$(".acc-h").click(function(){
$(this).toggleClass("active1");		


});



 $("#onnn").hover(function(){
 $("#onn").toggleClass("active11");			
});



 $(".buttom").click(function(){
 $(".buttom").toggleClass("active1111");			
});

});














	
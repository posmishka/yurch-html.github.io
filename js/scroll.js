var menu_selector = ".menu_aside";

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function() {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function() {
    jQuery("a").click(function() {

        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 500);


        return false;


    });
    $(document).on("scroll", onScroll);

    $("a[href^=#]").click(function(e) {
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function() {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });

});
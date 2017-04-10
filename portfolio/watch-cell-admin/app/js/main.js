$(document).ready(function () {
	//PIE	

	function sliceSize(dataNum, dataTotal) {
		return (dataNum / dataTotal) * 360;
	}
	function addSlice(sliceSize, pieElement, offset, sliceID, color) {
		$(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
		var offset = offset - 1;
		var sizeRotation = -179 + sliceSize;
		$("."+sliceID).css({
			"transform": "rotate("+offset+"deg) translate3d(0,0,0)"
		});
		$("."+sliceID+" span").css({
			"transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
			"background-color": color
		});
	}
	function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
		var sliceID = "s"+dataCount+"-"+sliceCount;
		var maxSize = 179;
		if(sliceSize<=maxSize) {
			addSlice(sliceSize, pieElement, offset, sliceID, color);
		} else {
			addSlice(maxSize, pieElement, offset, sliceID, color);
			iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
		}
	}
	function createPie(dataElement, pieElement) {
		var listData = [];
		$(dataElement+" span").each(function() {
			listData.push(Number($(this).html()));
		});
		var listTotal = 0;
		for(var i=0; i<listData.length; i++) {
			listTotal += listData[i];
		}
		var offset = 0;
		var color = [
			"#b4e06c", 
			"#ffab2d", 
			"#3e72db", 
			"#9c98d7", 
			"#ff7781", 
			"purple", 
			"turquoise", 
			"forestgreen", 
			"navy", 
			"gray"
		];
		for(var i=0; i<listData.length; i++) {
			var size = sliceSize(listData[i], listTotal);
			iterateSlices(size, pieElement, offset, i, 0, color[i]);
			$(dataElement+" li:nth-child("+(i+1)+")").css("color", color[i]);
			offset += size;
		}
	}
	createPie(".pieID.legend", ".pieID.pie");

});





//ANCHOR-MENU

var menu_selector = ".anchor-list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.offset().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 jQuery("a").click(function() {

        var elementClick = jQuery(this).attr("href");
       var destination = jQuery(elementClick).offset().top;
            jQuery("html, body").animate({
                scrollTop: destination
            }, 500);
        

        return false;


    });
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});



$(document).ready(function () {
	//ACORD
	$('.acordion-mech__title').click(function () {
		var block = $(this).closest('.acord-list__item');
		var btn = $(this);
		var submenu = $(block).find('.acordion-mech__desc');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
			$(submenu).slideDown(300);
		} else {
			$(block).addClass('active');
			$(submenu).slideUp(300);
		}
	});


	//TAB	
	$(this).find('.tabs-title-list__item').each(function (i) {
		$(this).click(function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('.tabs-desc-wrap').find('.tabs-desc__item').removeClass('active').eq(i).addClass('active');
		});
	});

	//FIXMENU
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() >= 200) {
			jQuery('.anchor-list, .contant-admin__anchor-list').addClass('fixed');
		} else jQuery('.anchor-list, .contant-admin__anchor-list').removeClass('fixed');
	});
	
	
//	COMMENT
		$('.ico-del').click(function () {
		var block = $(this).closest('.acordion-mech__title-ico');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
		} else {
			$(block).addClass('active');
		}
	});
});



//TAGINPUT

var foo = new TIB(document.getElementById('tag-input__input'), {
	join: ', ',
	text: ['eee'],
	values: ['Застежка']
	
});
foo.create();



var foo = new TIB(document.getElementById('tag-input__input-2'), {
	join: ', ',
	text: ['eee'],
	values: ['Застежка']
	
});
foo.create();










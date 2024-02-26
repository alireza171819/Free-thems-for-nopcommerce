
$(window).scroll(function(){
    if ($(window).scrollTop() >= 81) {
        $('.master-wrapper-page').addClass('headerfixed');
        $('.small-search-box-form', '.store-search-box').css("display", "none");
    }
    else {
        $('.master-wrapper-page').removeClass('headerfixed');
        $('.small-search-box-form', '.store-search-box').css("display", "block");
    }
});

/****************Mobile search******************/
$(document).ready(function () {
    $(".searchclick").click(function () {
        $(".small-search-box-form").slideToggle('fast');
    });

	$(".mobilemenulink").click(function(){
	    $("body").toggleClass("showmenu");
	});
	$(".closemenu").click(function(){
	    $("body").removeClass("showmenu");
	});	

	$(".myaccount").click(function(){
	    $("ul.myaccount-dropdown").slideToggle("show");
	});		




});
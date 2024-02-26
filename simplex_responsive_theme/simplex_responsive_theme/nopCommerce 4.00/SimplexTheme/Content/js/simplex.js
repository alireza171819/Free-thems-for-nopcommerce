/*!
 * nopAccelerate Simplex Theme v2.0.0 (http://themes.nopaccelerate.com/themes/nopaccelerate-simplex-theme-3/)
 * Copyright 2017 Xcellence-IT.
 * Licensed under http://www.nopaccelerate.com/terms/
 */

/* Using Simplex js for nopAccelerate Simplex Theme */

$(document).ready(function () {
    //Used js for Header Sticky Menu  
    //http://www.jqueryscript.net/menu/Sticky-Navigation-Bar-with-jQuery-Bootstrap.html
    $(window).bind('scroll', function() {
        var navHeight = $("div.header").height();
        var navWidth = $("div.header").width();
        ($(window).scrollTop() > navHeight) ? $('.main-menu').addClass('goToTop').width(navWidth) : $('.main-menu').removeClass('goToTop');
    });

    //Used js for Responsive Website Checker
    $('#exit').click(function (e) {
        $('.responsive').hide();
        $('.master-wrapper-page').css('margin-top', '0');
    });

    //Used js for Left Sliderbar Collapse(Responsive Devices)
    $('.block .title').click(function() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
        if (result.width < 991) {
            $(this).siblings('.listbox').slideToggle('slow');
            $(this).toggleClass("arrow-up-down");
        }
    });

    //Used js for flayout cart
    $("#flyout-cart").live("mouseenter", function () {
        $('#flyout-cart-wrapper').addClass('active');
    });

    $("#flyout-cart").live("mouseleave", function () {
        $('#flyout-cart-wrapper').removeClass('active');
    });
    //$(".shopping-cart-link").mouseenter(function () {
    //    $('#flyout-cart-wrapper').addClass('active');
    //});
    //$(".header-lower").mouseenter(function () {
    //    $('#flyout-cart-wrapper').removeClass('active');
    //});
    //$(".flyout-cart-wrapper").mouseleave(function () {
    //    $('#flyout-cart-wrapper').removeClass('active');
    //});


    //Used js for Product Box and Product Thumbs Slider
    $("#home-category-slider,#sub-category-slider,#manufacturer-slider").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
        lazyLoad: true
    });
    $("#product-slider").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 2],
        itemsScaleUp: true,
        autoPlay: true,
        responsive: true,
        navigation: true,
        lazyLoad: true
    });
    $("#crosssell-products-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider").owlCarousel({
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
        lazyLoad: true
    });
    $("#home-news-slider").owlCarousel({
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
        lazyLoad: true
    });


    /* Used js for BackTop Page Scrolling*/
    (function ($) {
        $.fn.backTop = function (options) {
            var backBtn = this;
            var settings = $.extend({
                'position': 400,
                'speed': 500,
            }, options);

            //Settings
            var position = settings['position'];
            var speed = settings['speed'];
            
            backBtn.css({
                'right': 40,
                'bottom': 40,
                'position': 'fixed',
            });

            $(document).scroll(function () {
                var pos = $(window).scrollTop();
                console.log(pos);

                if (pos >= position) {
                    backBtn.fadeIn(speed);
                } else {
                    backBtn.fadeOut(speed);
                }
            });

            backBtn.click(function () {
                $("html, body").animate({
                    scrollTop: 0
                },
                {
                    duration: 1200
                });
            });
        }
    }(jQuery));

    $('#backTop').backTop({
        'position': 200,
        'speed': 500,
    });

});

//Used js for Product Increase and Decrease Quantity Item
function IncreaseQuantity(e) {
    var id = document.getElementById(e.id).value;
    var qtyValue = parseInt(id);
    qtyValue = qtyValue + 1;
    document.getElementById(e.id).value = qtyValue;
    return true;
}

function DecreaseQuantity(e) {
    var id = document.getElementById(e.id).value;

    if (id <= 0)
        return 0;

    var qtyValue = parseInt(id);
    qtyValue = qtyValue - 1;
    document.getElementById(e.id).value = qtyValue;
    return true;
}



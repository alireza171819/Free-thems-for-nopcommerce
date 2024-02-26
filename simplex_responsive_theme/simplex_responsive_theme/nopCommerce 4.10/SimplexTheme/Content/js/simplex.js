/*!
 * nopAccelerate Simplex Theme v2.1.0 (http://themes.nopaccelerate.com/themes/nopaccelerate-simplex-theme-3/)
 * Copyright 2018 Xcellence-IT.
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
    $("#flyout-cart").on('mouseenter', function (event) {
        $('#flyout-cart-wrapper').addClass('active');
    });

    $("#flyout-cart").on('mouseleave', function (event){
        $('#flyout-cart-wrapper').removeClass('active');
    });


    //Used js for Product Box and Product Thumbs Slider

    $('#home-category-slider,#sub-category-slider,#manufacturer-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            641: {
                items: 3
            },
            768: {
                items: 3
            },
            980: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });

    $('#product-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 2
            },
            641: {
                items: 3
            },
            768: {
                items: 3
            },
            980: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });

    $('#crosssell-products-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            641: {
                items: 3
            },
            768: {
                items: 3
            },
            980: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    $('#home-news-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["prev", "next"],
        autoPlay: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            980: {
                items: 2
            },
            1199: {
                items: 2
            }
        }
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



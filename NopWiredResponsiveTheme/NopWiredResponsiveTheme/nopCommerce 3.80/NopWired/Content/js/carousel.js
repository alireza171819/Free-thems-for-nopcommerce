
$(window).load(function () {
    function handleOwlCarouselControl(element, show) {
        if (show) {
            $(element).find('.owl-controls').show();
        }
        else {
            $(element).find('.owl-controls').hide();
        }
    }

    var owl0 = $(".home-page-product-grid");
    owl0.on('initialized.owl.carousel', function (event) {
        handleOwlCarouselControl(event.target, event.page.count > 1);
    });
    owl0.on('resized.owl.carousel', function (event) {
        handleOwlCarouselControl(event.target, event.page.count > 1);
    });
    owl0.owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 3
            },
            991: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        nav: true,
    });
});
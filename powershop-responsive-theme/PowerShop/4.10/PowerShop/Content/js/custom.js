$(window).load(function () {
    $('#dvLoading').fadeOut(1500);
});

$(document).ready(function () {

    //Sticky Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1 && $(window).innerWidth() > 1000) {
            $('header').addClass("sticky-top");
        }
        else {
            $('header').removeClass("sticky-top");
        }
    });


    //Accordion
    var acc = document.getElementsByClassName("accordion-title");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }

    //set sticky footer
    setFooterPosition();
    $(window).resize(function () {
        setFooterPosition();
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


});

function setFooterPosition() {
    var windowHeight = $(window).innerHeight();
    var mwpHeight = $('div.master-wrapper-page').innerHeight();
    var footerHeight = $('div.footer').innerHeight();

    if (windowHeight > mwpHeight) {
        $('body').css('padding-bottom', footerHeight);
        $('div.footer').addClass('sticky-footer');
    } else {
        $('body').css('padding-bottom', 0);
        $('div.footer').removeClass('sticky-footer');
    }
}

$(document).ready(function () {
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass("active");

        // get current click button
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector
        })
        return false;
    })

    $(".project-area .button-group #btn1").trigger("click");

    // gallery
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // owl carousel
    $(".about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })


    // sticky navigation menu
    let nav_offset_top = $('.header_area').height() + 50;
    function navbarFixed() {
        if ($(".header_area").length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area .main-menu").addClass("navbar_fixed");
                } else {
                    $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }
    navbarFixed();


    // initialize aos
    AOS.init();
})


$(document).ready(function () {
    $('.navbar-nav a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 50) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();
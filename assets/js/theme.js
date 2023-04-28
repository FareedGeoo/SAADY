(function($) {
    'use strict';
    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });
    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
  
     /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 900000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
   // Slider Active
    $('.slider_list').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
      // Case Study Active
    $('.case-study').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1400: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
     // testimonial Active
    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        center: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-right''></i>", "<i class='fas fa-long-arrow-alt-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
    // testimonial Active
    $('.testimonial-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-right''></i>", "<i class='fas fa-long-arrow-alt-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
      // testimonial Active
    $('.testimonial2_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: false,
        navText: ["<i class='fas fa-long-arrow-alt-right''></i>", "<i class='fas fa-long-arrow-alt-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
      // Case Study Active
    $('.brand-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1400: {
                items: 5
            },
            1920: {
                items: 6
            }
        }
    })
      // feature Active
    $('.feature-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach: true,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1400: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    })
    
     // team Active
    $('.team-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: false,
        navText: ["<i class='fas fa-long-arrow-alt-right''></i>", "<i class='fas fa-long-arrow-alt-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1000: {
                items: 2
            },
            1400: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })     	
    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 900000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
   /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '.Regulatory',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering .filter').on('click', function() {

                $('.menu-filtering .filter').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });
    
 // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })

    // Calender Jquery
var curDate = (new Date()).getDate();
var curMonth = (new Date()).getMonth();
var curYear = (new Date()).getFullYear();
var startDay = (new Date(curYear, curMonth, 1)).getDay();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
var prevMonth = noofdays[curMonth - 1];
if (curMonth == 11) {
prevMonth = noofdays[0]
} else if (curMonth == 0) {
prevMonth = noofdays[11]
};
var totalDays = noofdays[curMonth];
var counter = 0;
var precounter = prevMonth - (startDay - 1);
var rightbox = 6;
var flag = true;

jQuery('.curr-month b').text(months[curMonth]);
for (var i = 0; i < 42; i++) {
if (i >= startDay) {
counter++;
if (counter > totalDays) {
counter = 1;
flag = false;
}
if (flag == true) {
jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
} else {
jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
}
} else {
jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
precounter++;
}

if (i == rightbox) {
jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
rightbox = rightbox + 7;
}

if (i > 34) {
jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
}

if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
jQuery(jQuery('.all-date ul li')[i]).css({
"background-color": "#02548b",
"color": "#fff"
});
}
};


})(jQuery);
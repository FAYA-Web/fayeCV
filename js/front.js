$(document).ready(function() {
    'use strict';

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar scroll behavior
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling
    $('.link-scroll').on('click', function(e) {
        var target = $(this.hash);
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Close navbar on click on mobile
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Add animation to timeline items
    $('.timeline-item').attr('data-aos', 'fade-up');
    $('.skill-item').attr('data-aos', 'fade-up');
    $('.contact-item').attr('data-aos', 'fade-up');
});

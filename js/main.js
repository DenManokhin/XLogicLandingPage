$(document).ready(function () {
    // Hamburger menu button animation
    $('.navbar-toggler').on('click', function () {
        $('.animated-navbar-toggler-icon').toggleClass('open');
    });

    // Navbar active state
    $('.nav .nav-link').on('click', function () {
        $('.nav').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.navbar-brand').on('click', function () {
        $('.nav').find('.active').removeClass('active');
    });
    $('#welcomeBtn').on('click', function () {
        $('.nav li:first-child').addClass('active');
    });

    // About section counter animation
    var $window = $(window);
    var $elem = $('#about');
    var counterFinished = true;

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        var isVisible = ((elemBottom > docViewTop) && (elemTop < docViewBottom));
        return isVisible;
    }
    
    var wasVisible = isScrolledIntoView($elem, $window);

    $(document).on("scroll", function () {
        var isVisible = isScrolledIntoView($elem, $window);
        if (!wasVisible && isVisible && counterFinished) {
            counterFinished = false;
            $('.counter-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }).promise().done( function () { counterFinished = true; } );
        }
        wasVisible = isVisible;
    });

    // Smooth scroll
    $('.nav-link, .navbar-brand, #welcomeBtn').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    });
});


document.addEventListener("DOMContentLoaded", function(event) {

    // Intialisation de WOW.js pour animer les textes
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // change this if you are not using animate.css
            offset:       0,          // default
            mobile:       true,       // keep it on mobile
            live:         true        // track if element updates
        }
    )
    wow.init();



    // Menu de navigation Hamburger
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });

    // Carrousel de base
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: { delay: 3000, },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 50
            },

            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
    });

    // Carrousel de la section à propos
    var mySwiper2 = new Swiper ('.s2', {
        pagination: {
            el: '.swiper-pagination2',
        },

        autoplay: { delay: 6000 },

        spaceBetween: 50

    });

});
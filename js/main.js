'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    // dot.each(function () {
    //     var index = $(this).index() + 1;
    //     if (index < 10) {
    //         $(this).append(index);
    //     } else {
    //         $(this).html(index);
    //     }
    // });

 

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

})(jQuery);

//GSAP below

var tl= gsap.timeline()

function page1Animation(){
    tl.from("header ,nav li,.header__nav__social a",{
        y: -40,
        delay: 1,
        duration: 2,
        opacity: 0,
        stagger: 0.15,
    });
}


function aboutPageAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            scroller:"body",
            start:"top 60%",
            end:"top 35%",
            scrub:2
        }
    });
    
    tl2.from("#about .about__pic div, #about .about__text div",{
        scale:0,
        opacity:0,
        duration:1,
        stagger:0.5
    })
}

function skillsPageAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#skills",
            scroller:"body",
            start:"top 55%",
            end:"top 15%",
            scrub:2
        }
    });

    tl3.from(".services__title div,.services__title span,.services__title h2,.services__title p,.services__title a",{
        y:300,
        opacity:0,
        duration:1,
        stagger:0.5
    })

    tl3.from(".services__item",{
        x:300,
        opacity:0,
        duration:2,
        stagger:0.5
    })

}

function QualificationPgAnimation(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#Qualification",
            scroller:"body",
            start:"top 55%",
            end:"top 15%",
            scrub:2
        }
    });

    tl4.from("#card1,#card2,#card3",{
        y:400,
        opacity:0,
        duration:2,
        stagger:1
    })
}

function softSkillsAnimation(){
    var tl5= gsap.timeline({
        scrollTrigger:{
            trigger:"#SoftSkills",
            scroller:"body",
            start:"top 45%",
            end:"top 20%",
            scrub:2
        }
    });

    tl5.from("#SoftSkills h4,#SoftSkills img,#SoftSkills li",{
        scale:0,
        opacity:0,
        duration:2,
        stagger:1
    })
}

function projectsPgAnimation(){
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:"#project",
            scroller:"body",
            start:"top 55%",
            end:"top 15%",
            scrub:2
        }
    });

    tl6.from("#project .section-title",{
        scale:0,
        opacity:0,
        duration:2,
        stagger:1
    })

    tl6.from("#project ul li,#project .portfolio__item",{
        y:400,
        opacity:0,
        duration:2,
        stagger:1
    })

    tl6.from("#project .pagination__option",{
        scale:0,
        opacity:0,
        duration:2,
        stagger:1
    })
}

page1Animation()
aboutPageAnimation()
skillsPageAnimation()
QualificationPgAnimation()
softSkillsAnimation()
projectsPgAnimation()


//one of the most imp problem here is that using scroll animations in gsap only scrolled pages can be seen. pages accessed using page up down button and arrow keys on keyboard are displayed as blank white pages.
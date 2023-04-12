const w = window.innerWidth;
const smallScreenWidth = 1024;
const tabletsWidth = 768;
const mediumScreenWidth = 1200;
if ( w <= smallScreenWidth) {
    document.getElementById("4_theme").style.display = 'none';
    const sections = document.getElementById('sections');
    sections.innerHTML = "";
}

if ( w <= tabletsWidth) {
    document.getElementById("3_theme").style.display = 'none';
    document.getElementById("video3").style.display = 'none';
}

if ( w <= mediumScreenWidth) {
    document.getElementById("video4").style.display = 'none';
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const sections = document.getElementById('sections');
        sections.innerHTML = "Sezioni";
        document.getElementById("4_theme").style.display = 'initial';
    } else {
        const sections = document.getElementById('sections');
        sections.innerHTML = "";
        document.getElementById("4_theme").style.display = 'none';
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("3_theme").style.display = 'initial';
        document.getElementById("video3").style.display = 'flex';
    } else {
        document.getElementById("3_theme").style.display = 'none';
        document.getElementById("video3").style.display = 'none';
    }

    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.getElementById("video4").style.display = 'flex';
    } else {
        document.getElementById("video4").style.display = 'none';
    }

    //navbar fixed mobile
    if (window.matchMedia("(min-width: 501px)").matches) {
        //not mobile
    } else {
        //mobile
        const element = document.getElementById('navbar_mobile_bottom')
        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            document.getElementById("navbar_mobile_center").style.position = 'static';
            document.getElementById("navbar_mobile_center").style.height = '45%';
        }

        // checking for not visibility
        if(position.top < window.innerHeight && position.bottom < 0) {
            document.getElementById("navbar_mobile_center").style.position = 'fixed';
            document.getElementById("navbar_mobile_center").style.height = '10vh';
        }
    }
})

window.addEventListener('scroll', function() {
    const element = document.getElementById('corriere_big_logo')
    const position = element.getBoundingClientRect();

    // checking whether fully visible
    /*if(position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
    }*/

    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom - vh(10.5) >= 0) {
        document.getElementById("logo").style.display = 'none';
        document.getElementById("weather").style.display = 'flex';

    }

    // checking for not visibility
    if(position.top < window.innerHeight && position.bottom - vh(10.5) < 0) {
        document.getElementById("weather").style.display = 'none';
        document.getElementById("logo").style.display = 'initial';
    }

    //navbar fixed mobile
    if (window.matchMedia("(min-width: 501px)").matches) {
        //not mobile
    } else {
        //mobile
        const element = document.getElementById('navbar_mobile_bottom')
        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            document.getElementById("navbar_mobile_center").style.position = 'static';
            document.getElementById("navbar_mobile_center").style.height = '45%';
        }

        // checking for not visibility
        if(position.top < window.innerHeight && position.bottom < 0) {
            document.getElementById("navbar_mobile_center").style.position = 'fixed';
            document.getElementById("navbar_mobile_center").style.height = '10vh';
        }
    }
});

function vh(percent) {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

function vw(percent) {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

function getScrollBarWidth() {
    let el = document.createElement("div");
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    let width = el.offsetWidth - el.clientWidth;
    el.remove();
    return width;
}

$.fn.disableScroll = function() {
    window.oldScrollPos = $(window).scrollTop();

    $(window).on('scroll.scrolldisabler',function ( event ) {
        $(window).scrollTop( window.oldScrollPos );
        event.preventDefault();
    });
};

$.fn.enableScroll = function() {
    $(window).off('scroll.scrolldisabler');
};

$(document).ready(function () {
    $(".menu").click(function () {
        $(".sections_navbar").toggleClass("active");
        //$("#selector").disableScroll();
        //$('body').css('overflow-y', 'hidden');
    });
    $(".mobile_menu").click(function () {
        $(".sections_navbar").toggleClass("active");
        //$("#selector").disableScroll();
        //$('body').css('overflow-y', 'hidden');
    });
    $("#sections").click(function () {
        //$('body').css('overflow-y', 'hidden');
        $(".sections_navbar").toggleClass("active");
        //$("#selector").disableScroll();
        //$('#content').addClass('fixed');
    });
    $("#close_lateral_navbar").click(function () {
        $(".sections_navbar").toggleClass("active");
        //$("#selector").enableScroll();
        //$('body').css('overflow-y', 'visible');
        //$('#content').removeClass('fixed');
        //$('body').css.removeClass('no_scroll');
    });
});

function disableScrolling(){
    const x=window.scrollX;
    const y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}


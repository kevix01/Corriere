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
        console.log('Element is partially visible in screen');
        document.getElementById("weather").style.display = 'none';
        document.getElementById("logo").style.display = 'initial';
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
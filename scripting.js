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
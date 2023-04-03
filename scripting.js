const w = window.innerWidth;
const targetWidth = 1024;
if ( w > targetWidth) {
}
else {
    document.getElementById("section").textContent="";
    const sections = document.getElementById('sections');
    sections.innerHTML = "";
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const sections = document.getElementById('sections');
        sections.innerHTML = "Sezioni";
    } else {
        const sections = document.getElementById('sections');
        sections.innerHTML = "";
    }
})
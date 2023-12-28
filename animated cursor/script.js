var pt = document.querySelector(".cursor")
var vw = document.querySelector(".main")

pt.style.opacity = 0;




vw.addEventListener("mousemove", function (details) {
    pt.style.opacity = 1;
    // console.log(details);
    pt.style.left = details.x + "px";
    pt.style.top = details.y + "px";




})


vw.addEventListener("mouseleave", function () {
    pt.style.opacity = 0;
})

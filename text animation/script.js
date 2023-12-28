const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





const section = document.querySelectorAll('.text');
console.log(section);

gsap.registerPlugin(ScrollTrigger);
section.forEach((char, i) => {

    const texts = new SplitType(char, { types: 'chars' })
    gsap.from(texts.chars, {
        scrollTrigger: {
            trigger: char,
            scrub: true,
            start: "top 80%",
            end: "top 20%",
            markers: true,
        }
        ,
        opacity: 0.1,
        stagger: 0.2,
        y: 20
    })


})
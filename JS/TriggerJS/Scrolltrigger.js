gsap.to(".OURSTORY__Headingtext",{
    scrollTrigger: {
        trigger: ".OURSTORY__Headingtext",
        start: "top center",
        end: '+=2000',
        scrub: true,
        pin: true,
    },
    duraion: 5,
    opacity: 1,
});

gsap.to(".OURSTORY__Catchcopy",{
    scrollTrigger: {
        trigger: ".OURSTORY__Catchcopy",
        start: "top center",
        end: '+=2000',
        scrub: true,
        pin: true,
    },
    duraion: 5,
    opacity: 1,
});

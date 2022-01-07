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
        scrub: true,
    },
    duraion: 5,
    opacity: 1,
});

gsap.to(".OURSTORYconteiner__Twocontents",{
    scrollTrigger: {
        trigger: ".OURSTORYconteiner__Twocontents",
        start: "top center",
        end: '+=1000',
        scrub: true,
    },
    duraion: 1,
    opacity: 1,
});

gsap.to(".OURSTORYconteiner__Brandeintroductory",{
    scrollTrigger: {
        trigger: ".OURSTORYconteiner__Brandeintroductory",
        start: "top center",
        end: '+=1000',
        scrub: true,
    },
    duraion: 5,
    opacity: 1,
});

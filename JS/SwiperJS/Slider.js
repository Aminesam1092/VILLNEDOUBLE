const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    effect: "fade",
    loop: true,


    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false,
        loop: true,
    },
});

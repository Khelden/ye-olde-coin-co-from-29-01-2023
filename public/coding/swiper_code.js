//! === SWIPER === 
const swiper = new Swiper('.myswiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto', 
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifer: 1,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination'
    }
})

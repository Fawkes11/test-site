$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    nav: true,
    autoplay: true,
    navText: [$('.btn-prev'),$('.btn-next')],
    dotsContainer: '#owl-indicators-container',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items: 3
        }
    }
})
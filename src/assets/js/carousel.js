$(document).ready(() => {
    var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 5,
        loop: true,
        autoWidth:true,
        nav:true,
        dots:true,
        items:4,
        responsiveRefreshRate: 10,
        responsive:{
            0:{items: 3},
            500:{items: 5},
            1000:{items: 5},
        }
      })

      
})
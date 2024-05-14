(function($){
    'use strict';
    
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.books').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
      });

      $('.library-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
      });

      

        

        

})(jQuery);
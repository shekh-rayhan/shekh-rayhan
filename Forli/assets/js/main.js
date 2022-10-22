$(document).ready(function(){
    $(".home").bxSlider({
      mode: 'fade',
         speed: 2000,
         auto: true,
         pager: false,
         controle: false,
         touchEnabled: false,
    });
    $(".choose-slider").bxSlider({
        mode: 'fade',
         speed: 2000,
         auto: true,
         pager: false,
         controle: false,
         touchEnabled: false,
      });
      $(".teritory-slider ").bxSlider({
        mode: 'fade',
         speed: 2000,
         auto: true,
         pager: false,
         controle: false,
         touchEnabled: false,
      });
      $('.destinations-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true,
            },
            600:{
                items:3,
                nav:false,
            },
            1000:{
                items:5,
                nav:true,
                loop:false,
            }
        }
    });
    
    
    
    });
    
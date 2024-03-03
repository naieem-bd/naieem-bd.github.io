(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
		
		// Magnific Popup for home page video
		$('.video-popup').magnificPopup({
				type:'video'
			});
			

        
		
		
		// Magnific Popup for left-box-gallery
        $(".lb-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });		
		
		
		
		// Magnific Popup for left-box-gallery
        $(".main-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
		
		
		
		// Slick Nav
        $("ul#navigation").slicknav({
            prependTo: ".responsive-mobile-menu"
        });
		
		
		// owl Carousel Post Slider
		$(".post-slider-wrap").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
        });
		
		
		// owl Carousel Trending Slider
		$(".trending-post-slider").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
        });
	
		
		
	
	});

		
	$(window).load(function(){
		
		
	});

})(jQuery);
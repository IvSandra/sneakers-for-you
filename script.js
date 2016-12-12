// Carousel

$(document).ready(function () {

    $("#owl-slider").owlCarousel({
        
        navigation: false, 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsive: { 
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
      
    });

});



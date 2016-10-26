// JavaScript source code
$(document).ready(function () {

    $("#owl-slider").owlCarousel({
        
        navigation: false, 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        itemsScaleUp: true,
        autoHeight: true,
        itemsCustom: [
                    [768, 1],
                    [990, 2],
                    [1200, 3]
    ]
    });

});
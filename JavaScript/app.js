$( function ()
{
    $( '#hero-slider' ).owlCarousel( {
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1500,
        navText: [ 'PREV', 'NEXT' ],
        responsive: {
            0: {
                nav: false,
            },
            768: {
               nav: true,
            },
        }
    } );
    
    $( '#project-slider' ).owlCarousel( {
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        smartSpeed: 1500,
        margin: 24,
        responsive: {
            0: {
                
            },
            768: {
            
            },
            1140: {
               items: 2,
            }
        }
    });
});
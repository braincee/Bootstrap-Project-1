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
        nav: true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1500,
        margin: 24,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
                dots: true,
            },
            768: {
                items: 1,
                dots: true,
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
            }
        }
    });
});
$(document).ready(function () {

    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        smartSpeed: 500,
        //margin:2
    });

    $('#shopSliderLeft').click(function () {
        console.log('left');
        shopSlider.trigger('prev.owl.carousel', [300]);
    })

    $('#shopSliderRight').click(function () {
        console.log('right');
        shopSlider.trigger('next.owl.carousel', [300]);
    })



    /*
        
            var headerSlider = $('.owl-carousel');
            headerSlider.owlCarousel({
                items: 1,
               // loop: true,
                dots: false,
                smartSpeed: 2000
            });
        
     
        
            headerSlider.on('changed.owl.carousel', function (event) {
                console.log('Finished');
                //console.log(event.item.count);
                //console.log(event.item.index);
                console.log(event.page.index);
        
                $('.slide-control-number__active').text(event.item.index -2);
                $('.slide-controls-number__total').text(event.item.count);
        
            }); */
});
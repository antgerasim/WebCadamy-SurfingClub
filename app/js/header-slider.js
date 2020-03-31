$(document).ready(function () {

    var headerSlider = $('#headerSlider');
    headerSlider.owlCarousel({
        items: 1,
       // loop: true,
        dots: false,
        smartSpeed: 2000
    });

    $('#headerSliderLeft').click(function () {
        console.log('left');
        headerSlider.trigger('prev.owl.carousel', [300]);
    })

    $('#headerSliderRight').click(function () {
        console.log('right');
        headerSlider.trigger('next.owl.carousel');
    })

    headerSlider.on('changed.owl.carousel', function (event) {        

        $('.slide-control-number__active').text(event.item.index +1);
        $('.slide-controls-number__total').text(event.item.count);

    });
});
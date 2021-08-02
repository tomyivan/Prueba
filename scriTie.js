/*<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
*/

$(document).ready(function() {
    $(".carrusel1,.carrusel,.carrusel2,.carrusel3").owlCarousel({
        margin: 10,
        loop: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
    var owl = $('.carrusel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {

        owl.trigger('prev.owl.carousel', [300]);
    })
    var a = $('.carrusel1');
    owl.owlCarousel();
    $('.customNextBtn1').click(function() {
        a.trigger('next.owl.carousel');
    })
    $('.customPrevBtn1').click(function() {

        a.trigger('prev.owl.carousel', [300]);
    })
    var b = $('.carrusel2');
    owl.owlCarousel();
    $('.customNextBtn2').click(function() {
        b.trigger('next.owl.carousel');
    })
    $('.customPrevBtn2').click(function() {

        b.trigger('prev.owl.carousel', [300]);
    })
    var c = $('.carrusel3');
    owl.owlCarousel();
    $('.customNextBtn3').click(function() {
        c.trigger('next.owl.carousel');
    })
    $('.customPrevBtn3').click(function() {

        c.trigger('prev.owl.carousel', [300]);
    })

})
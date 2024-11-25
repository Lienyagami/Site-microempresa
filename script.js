// Modal de Promoções
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('promoModal');
    const span = document.getElementsByClassName('close')[0];

    setTimeout(function () {
        modal.style.display = 'block';
    }, 2000);

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// Animações de Rolagem
AOS.init({
    duration: 1000,
    once: true
});

// Carrossel de Depoimentos
$(document).ready(function () {
    $('.depoimentos-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true
    });
});

// Rolagem Suave para âncoras
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

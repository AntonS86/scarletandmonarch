'use strict';
import '../src/scss/index.scss';
import Swiper from 'swiper';

const sliderPresentation = new Swiper ('#slider-presentation', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.slider-presentation__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            console.log(className)
            return `<span class="${className}"></span>`;
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-presentation__control--next',
        prevEl: '.slider-presentation__control--prev',
    },

    // And if we need scrollbar
});


const sliderProduct = new Swiper('#slider-product', {
    slidesPerView: 4,
    spaceBetween: 1,
    breakpoints: {
        // when window width is >= 320px

        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    },
    navigation: {
        nextEl: '.product-tile__control--next',
        prevEl: '.product-tile__control--prev',
    },

});
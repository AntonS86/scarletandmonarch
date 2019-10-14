'use strict';
import Swiper from 'swiper/js/swiper.min';

export default new Swiper('#slider-product', {
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
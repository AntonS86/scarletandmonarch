'use strict';
import Swiper from 'swiper/js/swiper.min';

export default new Swiper ('#slider-presentation', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.slider-presentation__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-presentation__control--next',
        prevEl: '.slider-presentation__control--prev',
    },
});
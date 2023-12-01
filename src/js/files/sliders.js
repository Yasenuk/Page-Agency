import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

const ClientsLSwiper = new Swiper('.clients__slider', {
	modules: [Pagination, Autoplay],

	direction: "vertical",
	effect: 'slide',

	initialSlide: 1,
	slidesPerView: 2,

	autoHeight: true,
	loop: true,
	
	autoplay: {
		delay: 1500,
	},

	pagination: {
		el: '.clients-swiper-pagination',
		type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}"></span>`;
		}
	}
});

const BlogSwiper = new Swiper('.blog__slider', {
	modules: [Pagination, Autoplay],
	slidesPerView: 2,
	loop: true,

	spaceBetween: 20,

	autoplay: {
		delay: 2500
	},

	pagination: {
		el: '.blog-swiper-pagination',
		type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}"></span>`;
		}
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		}
	}
});
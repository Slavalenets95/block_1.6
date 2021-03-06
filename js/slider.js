import Swiper from 'swiper/bundle';
const sliderBrand = document.querySelector('.slider-brand')
const sliderTechnical = document.querySelector('.slider-technical')
const sliderPrice = document.querySelector('.price-table')
let mySwiper = [];


function mobileSliderBrand() {
	if (window.innerWidth <= 767 && sliderBrand.dataset.mobile == 'false') {
		mySwiper[0] = new Swiper(sliderBrand, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			slideClass: 'brand-list__item',
			pagination: {
			 	el: '.pagination',
				 clickable: true,
				 bulletClass: 'pagination-bullet',
				 bulletActiveClass: 'pagination-bullet-active'
			 },
		});

		sliderBrand.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		sliderBrand.dataset.mobile = 'false';
		if (sliderBrand.classList.contains('swiper-container-initialized')) {
			mySwiper[0].destroy();
		}
	}
}

function mobileSliderTechnical() {
	if (window.innerWidth <= 767 && sliderTechnical.dataset.mobile == 'false') {
		mySwiper[1] = new Swiper(sliderTechnical, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			slideClass: 'technical-list__item',
			pagination: {
				el: '.pagination',
				clickable: true,
				bulletClass: 'pagination-bullet',
				bulletActiveClass: 'pagination-bullet-active'
			},
		});

		sliderTechnical.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		sliderTechnical.dataset.mobile = 'false';
		if (sliderTechnical.classList.contains('swiper-container-initialized')) {
			mySwiper[1].destroy();
		}
	}
}

function mobileSliderPrice() {
	if (window.innerWidth <= 767 && sliderPrice.dataset.mobile == 'false') {
		mySwiper[2] = new Swiper(sliderPrice, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			slideClass: 'price-table__row',
			pagination: {
			 	el: '.swiper-pagination',
			 	clickable: true,
			 },
		});

		sliderPrice.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		sliderPrice.dataset.mobile = 'false';
		if (sliderPrice.classList.contains('swiper-container-initialized')) {
			mySwiper[2].destroy();
		}
	}
}


mobileSliderBrand()
mobileSliderTechnical()
mobileSliderPrice()
window.addEventListener('resize', () => {
    mobileSliderBrand();
    mobileSliderTechnical();
    mobileSliderPrice()
});
const sliderBrand = document.querySelector('.slider-brand')
const sliderTechnical = document.querySelector('.slider-technical')
let mySwiper;


function mobileSliderBrand() {
	if (window.innerWidth <= 767 && sliderBrand.dataset.mobile == 'false') {
		mySwiper = new Swiper(sliderBrand, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			slideClass: 'brand-list__item',
			pagination: {
			 	el: '.swiper-pagination',
			 	clickable: true,
			 },
		});

		sliderBrand.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

function mobileSliderTechnical() {
	if (window.innerWidth <= 767 && sliderTechnical.dataset.mobile == 'false') {
		mySwiper = new Swiper(sliderTechnical, {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			slideClass: 'technical-list__item',
			pagination: {
                el: '.swiper-pagination',
                clickable: true,
			 },
		});

		sliderTechnical.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}


mobileSliderBrand()
mobileSliderTechnical()
window.addEventListener('resize', () => {
    mobileSliderBrand();
    mobileSliderTechnical();
});
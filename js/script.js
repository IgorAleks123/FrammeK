const sliderItems = [...document.querySelectorAll('.hover-slider__item')];
const navItems = [...document.querySelectorAll('.hover-slider__nav-item')];

sliderItems.forEach((item, index) => {
	item.dataset.index = index;

	if (index === 0) {
		item.classList.add('hover-slider__item__active-slider');
	}
});

navItems.forEach((item, index) => {
	item.dataset.index = index;

	if (index === 0) {
		item.classList.add('hover-slider__nav-item__active-slider');
	}		
});

const toggleActivity = (index) => {
	console.log(index);
	for (let i = 0; i < sliderItems.length; i++) {
		if (i === Number(index)) {
			sliderItems[i].classList.add('hover-slider__item__active-slider');
			navItems[i].classList.add('hover-slider__nav-item__active-slider');
		} else {
			sliderItems[i].classList.remove('hover-slider__item__active-slider');
			navItems[i].classList.remove('hover-slider__nav-item__active-slider');
		}
	}
};

document.querySelector('.hover-slider__nav').addEventListener('mouseover', (event) => {
	if (event.target.classList.contains('hover-slider__nav-item')) {
		toggleActivity(event.target.dataset.index);
	}
});

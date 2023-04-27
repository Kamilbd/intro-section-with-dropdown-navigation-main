'use strict';
const burgerMenu = document.querySelector('.nav__btn-menu');
const burgerClose = document.querySelector('.nav__btn-close');
const navMobileLinks = document.querySelector('.nav__links');
const navMobileShadow = document.querySelector('.nav__shadow');
const companyBtn = document.querySelector('.nav__btn-company');
const featuresBtn = document.querySelector('.nav__btn-features');
const featuresLink = document.querySelector('.nav__features-links');
const companyLink = document.querySelector('.nav__company-links');
const iconArrowFeatures = featuresBtn.querySelector('.nav__arrow-icon');
const iconArrowCompany = companyBtn.querySelector('.nav__arrow-icon');

const showNav = () => {
	navMobileLinks.classList.add('nav__active-menu');
	shadowMobile();
	remmoveBtns();
};
const closeWindowShadowMobile = () => {
	navMobileLinks.classList.remove('nav__active-menu');
	shadowMobile();
};
const shadowMobile = () => {
	const mobileShadow = document.querySelector('.nav__shadow');
	if (navMobileLinks.classList.contains('nav__active-menu')) {
		mobileShadow.style.display = 'block';
	} else {
		mobileShadow.style.display = 'none';
	}
};

const openCardFeatures = () => {
	featuresLink.classList.toggle('nav__active-links');
	iconArrowFeatures.classList.toggle('nav__arrow-icon-active');
};
const openCardCompany = () => {
	companyLink.classList.toggle('nav__active-links');
	iconArrowCompany.classList.toggle('nav__arrow-icon-active');
};

const remmoveBtns = () => {
	featuresLink.classList.remove('nav__active-links');
	companyLink.classList.remove('nav__active-links');
	iconArrowFeatures.classList.remove('nav__arrow-icon-active');
	iconArrowCompany.classList.remove('nav__arrow-icon-active');
};
navMobileShadow.addEventListener('click', closeWindowShadowMobile);
burgerMenu.addEventListener('click', showNav);
burgerClose.addEventListener('click', closeWindowShadowMobile);
featuresBtn.addEventListener('click', openCardFeatures);
companyBtn.addEventListener('click', openCardCompany);
window.addEventListener('click', event => {
	if (!event.target.closest('.nav') && !burgerMenu.contains(event.target)) {
		remmoveBtns();
	}
});

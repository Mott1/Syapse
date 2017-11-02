// Header

class Header {

	constructor() {

		this.initVars();
		this.initEvents();
		this.onScroll();

	}

	initVars() {

		this.coreHeader = document.querySelector('.core-header');
		this.coreNavButton = document.querySelector('.core-header .nav-button');
		this.toggleNavRef = this.toggleNav.bind(this);
		this.lastScrollY = 0;
		this.ticking = false;

	}

	initEvents() {

		const _this = this;

		window.addEventListener('scroll', _this.onScroll.bind(this), false);

		this.coreNavButton.addEventListener('click', _this.toggleNavRef, false);

	}

	stopEvents() {

		const _this = this;

		this.coreNavButton.removeEventListener('click', _this.toggleNavRef, false);

	}

	toggleNav(e) {

		e.preventDefault();
		this.coreNavButton.classList.toggle('close');
		document.body.classList.toggle('nav-open');

	}

	onScroll() {

	this.lastScrollY = window.scrollY;
	this.requestTick(this);

	}

	requestTick(_this) {

	if (!_this.ticking) {
			requestAnimationFrame(_this.update.bind(_this));
			_this.ticking = true;
	}

	}

	update() {

	const _this = this;

	// let isMobile = document.documentElement.clientWidth < 768;

	if (_this.lastScrollY > _this.coreHeader.clientHeight) {
			_this.coreHeader.classList.add('sticky');
	} else {
			_this.coreHeader.classList.remove('sticky');
	}

	_this.ticking = false;

	}

}
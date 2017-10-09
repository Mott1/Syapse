// Header

class Header {

	constructor(header) {

		this.initVars(header);
		this.initEvents();
		this.onScroll();

	}

	initVars(header) {

		this.coreHeader = document.querySelector('.core-header');
		this.lastScrollY = 0;
	    this.ticking = false;

	}

	initEvents() {

		const _this = this;

		window.addEventListener('scroll', _this.onScroll.bind(this), false);

	}

	onScroll() {

	    this.lastScrollY = window.scrollY;
	    this.requestTick(this);

	}

	requestTick(_this) {

	    if(!_this.ticking) {
	        requestAnimationFrame(_this.update.bind(_this));
	        _this.ticking = true;
	    }

	}

	update() {

		const _this = this;

		let isMobile = document.documentElement.clientWidth < 768;

	    if(_this.lastScrollY > _this.coreHeader.clientHeight) {
            _this.coreHeader.classList.add('sticky');
        } else {
            _this.coreHeader.classList.remove('sticky');
        }

	    _this.ticking = false;

	}

}
class Reveal {

	constructor() {

		this.initVars();
		this.initEvents();
		this.onScroll();

	}

	initVars() {

		const _this = this;

		this.revealCollection		= document.querySelectorAll('.reveal');
		this.lastScrollY			= 0;
		this.ticking				= false;
		this.offsetMultipler 		= 0.85;
		this.offsetMultiplerMobile 	= 1;

		this.onScrollRef = this.onScroll.bind(this);

	}

	initEvents() {

		const _this = this;
		
		window.addEventListener('scroll', _this.onScrollRef, false);

	}

	stopEvents() {

		const _this = this;

		window.removeEventListener('scroll', _this.onScrollRef, false);

	}

	onScroll() {

		this.lastScrollY = window.pageYOffset; // window.scrollY; // Does not work in IE11.
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

		let isMobile = document.documentElement.clientWidth < 768;
		let newOffsetMultipler = this.offsetMultipler;

		if (isMobile) {
			let newOffsetMultipler = this.offsetMultiplerMobile;
		}

		let reveal 		= null,
			revealTop 	= [],
			offset 		= window.innerHeight * newOffsetMultipler;

		for(var i = 0; i < _this.revealCollection.length; i++) {

			reveal = _this.revealCollection[i];
			revealTop[i] = reveal.offsetTop;

			if(_this.lastScrollY > revealTop[i] - offset) {
				reveal.classList.add('reveal-show');
			} else {
				reveal.classList.remove('reveal-show');
			}

		}

		_this.ticking = false;

	}

}
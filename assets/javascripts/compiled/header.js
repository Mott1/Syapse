'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Header

var Header = function () {
	function Header() {
		_classCallCheck(this, Header);

		this.initVars();
		this.initEvents();
		this.onScroll();
	}

	_createClass(Header, [{
		key: 'initVars',
		value: function initVars() {

			this.coreHeader = document.querySelector('.core-header');
			this.coreNavButton = document.querySelector('.core-header .nav-button');
			this.toggleNavRef = this.toggleNav.bind(this);
			this.lastScrollY = 0;
			this.ticking = false;
		}
	}, {
		key: 'initEvents',
		value: function initEvents() {

			var _this = this;

			window.addEventListener('scroll', _this.onScroll.bind(this), false);

			this.coreNavButton.addEventListener('click', _this.toggleNavRef, false);
		}
	}, {
		key: 'stopEvents',
		value: function stopEvents() {

			var _this = this;

			this.coreNavButton.removeEventListener('click', _this.toggleNavRef, false);
		}
	}, {
		key: 'toggleNav',
		value: function toggleNav(e) {

			e.preventDefault();
			this.coreNavButton.classList.toggle('close');
			document.body.classList.toggle('nav-open');
		}
	}, {
		key: 'onScroll',
		value: function onScroll() {

			this.lastScrollY = window.scrollY;
			this.requestTick(this);
		}
	}, {
		key: 'requestTick',
		value: function requestTick(_this) {

			if (!_this.ticking) {
				requestAnimationFrame(_this.update.bind(_this));
				_this.ticking = true;
			}
		}
	}, {
		key: 'update',
		value: function update() {

			var _this = this;

			// let isMobile = document.documentElement.clientWidth < 768;

			if (_this.lastScrollY > _this.coreHeader.clientHeight) {
				_this.coreHeader.classList.add('sticky');
			} else {
				_this.coreHeader.classList.remove('sticky');
			}

			_this.ticking = false;
		}
	}]);

	return Header;
}();

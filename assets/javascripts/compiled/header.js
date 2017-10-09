'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Header

var Header = function () {
	function Header(header) {
		_classCallCheck(this, Header);

		this.initVars(header);
		this.initEvents();
		this.onScroll();
	}

	_createClass(Header, [{
		key: 'initVars',
		value: function initVars(header) {

			this.coreHeader = document.querySelector('.core-header');
			this.lastScrollY = 0;
			this.ticking = false;
		}
	}, {
		key: 'initEvents',
		value: function initEvents() {

			var _this = this;

			window.addEventListener('scroll', _this.onScroll.bind(this), false);
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

			var isMobile = document.documentElement.clientWidth < 768;

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
//# sourceMappingURL=header.js.map

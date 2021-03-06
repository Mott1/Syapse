'use strict';

// App Controller

// Is Mobile
// let isMobile = document.documentElement.clientWidth < 768;

// Draggable
// let draggable = true;

// Reveal
var reveal = void 0;
var revealCollection = document.querySelectorAll('.reveal');

// Header
var header = document.querySelector('.core-header');

// Modal
var modal = document.querySelector('.modal');

// Logo Grid
var logoGridCollection = [];
var logoGrids = document.querySelectorAll('.logo-grid');

document.addEventListener("DOMContentLoaded", function (e) {

	// document.body.classList.add('isDraggable');

	// if (isMobile) {
	// 	document.body.classList.add('isMobile');
	// }

	initNav();
	// initLogoGrid();

	initReveal();
	// initResize();

	initModal();
});

function initResize() {

	var optimizedResize = function () {

		var callbacks = [],
		    running = false;

		// fired on resize event
		function resize() {

			if (!running) {
				running = true;

				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(runCallbacks);
				} else {
					setTimeout(runCallbacks, 66);
				}
			}
		}

		// run the actual callbacks
		function runCallbacks() {

			callbacks.forEach(function (callback) {
				callback();
			});

			running = false;
		}

		// adds callback to loop
		function addCallback(callback) {

			if (callback) {
				callbacks.push(callback);
			}
		}

		return {
			// public method to add additional callback
			add: function add(callback) {
				if (!callbacks.length) {
					window.addEventListener('resize', resize);
				}
				addCallback(callback);
			}
		};
	}();

	// start process
	optimizedResize.add(function () {

		// isMobile = document.documentElement.clientWidth < 768;
		// let currentDraggable = document.body.classList.contains('isDraggable');

		// if (isMobile && !currentDraggable) {
		// 	document.body.classList.add('isMobile');
		// 	updateDraggable();
		// } else if (!isMobile && currentDraggable) {
		// 	document.body.classList.remove('isMobile');
		// 	updateDraggable();
		// }

	});
}

// function updateDraggable() {

// 	let currentDraggable = document.body.classList.contains('isDraggable');

// 	if (isMobile && !currentDraggable) {

// 		document.body.classList.add('isDraggable');

// 		logoGridCollection.forEach((element, index) => {
// 			element.setEnable();
// 		});

// 	} else if (!isMobile && currentDraggable) {

// 		document.body.classList.remove('isDraggable');

// 		logoGridCollection.forEach((element, index) => {
// 			element.setDisable();
// 		});

// 	}

// }

function initReveal() {

	if (revealCollection.length) {
		reveal = new Reveal();
	}
}

function initNav() {

	if (header !== null) {
		header = new Header();
	}
}

function initModal() {

	if (modal !== null) {
		modal = new Modal();
	}
}

function initLogoGrid() {

	if (logoGrids.length) {

		logoGrids.forEach(function (element, index) {
			logoGridCollection[index] = new LogoGrid(element, index);
		});

		// updateDraggable();
	}
}

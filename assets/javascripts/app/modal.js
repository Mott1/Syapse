// Modal

class Modal {

	constructor() {

		this.initVars();
		this.initEvents();

	}

	initVars() {

		this.modal = document.querySelector('.modal');
		this.modalLinks = document.querySelectorAll('.modal-link');
		this.modalClose = document.querySelector('.modal-close');
		this.openModalRef = this.openModal.bind(this);
		this.closeModalRef = this.closeModal.bind(this);

	}

	initEvents() {

		const _this = this;

		
		this.modalClose.addEventListener('click', _this.closeModalRef, false);

		for (var i = 0, len = this.modalLinks.length; i < len; i++) {
			_this.modalLinks[i].addEventListener('click', _this.openModalRef, false);
		}

	}

	stopEvents() {

		const _this = this;

		this.modalClose.removeEventListener('click', _this.closeModalRef, false);

		for (var i = 0, len = this.modalLinks.length; i < len; i++) {
			_this.modalLinks[i].removeEventListener('click', _this.openModalRef, false);
		}

	}

	openModal(e) {

		e.preventDefault();

		if (document.body.classList.contains('modal-open')) {
			return;
		}

		let target = e.target;

		let modalType = target.getAttribute('data-modal-type');

		// Resource

		if (modalType == 'resource') {

			let title = target.getAttribute('data-modal-title');
			let modalTitle = this.modal.querySelector('.modal-title');

			let iframe = target.getAttribute('data-iframe');
			let modalInfo = this.modal.querySelector('.modal-info');

			modalTitle.innerHTML = title;
			modalInfo.innerHTML = iframe;

		}

		// Team

		if (modalType == 'team') {

			let name = target.getAttribute('data-name');
			let jobTitle = target.getAttribute('data-job-title');
			let bio = target.getAttribute('data-bio');

			let modalName = this.modal.querySelector('.name');
			let modalJobTitle = this.modal.querySelector('.job-title');
			let modalBio = this.modal.querySelector('.bio');

			modalName.innerHTML = name;
			modalJobTitle.innerHTML = jobTitle;
			modalBio.innerHTML = bio;

		}

		document.body.classList.add('modal-open');

	}

	closeModal(e) {

		e.preventDefault();

		let modalType = e.target.getAttribute('data-modal-type');

		// Resource

		if (modalType == 'resource') {

			let modalTitle = this.modal.querySelector('.modal-title');
			let modalInfo = this.modal.querySelector('.modal-info');

			modalTitle.innerHTML = "";
			modalInfo.innerHTML = "";

		}

		// Team

		if (modalType == 'team') {

			let modalName = this.modal.querySelector('.name');
			let modalJobTitle = this.modal.querySelector('.job-title');
			let modalBio = this.modal.querySelector('.bio');

			modalName.innerHTML = "";
			modalJobTitle.innerHTML = "";
			modalBio.innerHTML = "";

		}

		document.body.classList.remove('modal-open');

	}

}
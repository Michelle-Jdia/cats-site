// validate
export default class Validate {
	constructor(formSelector, inputSelector, btnSelector, errorSelector, checkB) {
		this._formSelector = formSelector;
		this._inputSelector = inputSelector;
		this._btnSelector = btnSelector;
		this._errorSelector = errorSelector;
		this._errorSelector = errorSelector;
		this._checkB = checkB;
	}
	_checkInputValidity() {
		if (!this._inputSelector.validity.valid) {
			this._errorSelector.textContent = this._inputSelector.validationMessage;
			this._btnSelector.disabled = true;
			this._btnSelector.classList.add('footer__btn-submit_disabled');
		} else {
			this._errorSelector.textContent = '';
			this._btnSelector.disabled = false;
			this._btnSelector.classList.remove('footer__btn-submit_disabled');
			this._disableBtn();
		}
	}
	_disableBtn() {
		if (this._inputSelector.value.length <= 2) {
			this._btnSelector.disabled = true;
			this._btnSelector.classList.add('footer__btn-submit_disabled');
		}
	}
	_checkBb() {
		if (!this._checkB.validity.valid) {
			this._btnSelector.disabled = true;
			this._btnSelector.classList.add('footer__btn-submit_disabled');
			this._errorSelector.textContent = this._checkB.validationMessage;
		} else {
			this._errorSelector.textContent = '';
			this._btnSelector.disabled = false;
			this._btnSelector.classList.remove('footer__btn-submit_disabled');
		}
	}
	setEventListeners() {
		this._inputSelector.addEventListener('input', () => {
			this._checkInputValidity();
		});
		this._formSelector.addEventListener('submit', function(e) {
			e.preventDefault();
		});
		this._checkB.addEventListener('change', () => {
			this._checkBb();
		});
	}
}

export default class Popup {
	constructor(popupFav, popupTake) {
		this._popup = popupFav;
		this._popupT = popupTake;
	}
	_toggleLike(b) {
		if (!b.classList.contains('cards__like_type_active')) {
			b.classList.add('cards__like_type_active');
			this._handleOpenPopup();
		} else {
			b.classList.remove('cards__like_type_active');
			this._handleOpenPopupT();
		}
	}
	_handleOpenPopup() {
		this._popup.classList.add('popup__opened');
	}
	_handleOpenPopupT() {
		this._popupT.classList.add('popup__opened');
	}

	_handleClosePopup() {
		this._popup.classList.remove('popup__opened');
	}
	_handleClosePopupT() {
		this._popupT.classList.remove('popup__opened');
	}
	setEventListeners(b) {
		this._popup.querySelector('.popup__close').addEventListener('click', () => this._handleClosePopup());
		this._popup.querySelector('.popup__button').addEventListener('click', () => this._handleClosePopup());
		this._popupT.querySelector('.popup__close').addEventListener('click', () => this._handleClosePopupT());
		this._popupT.querySelector('.popup__button').addEventListener('click', () => this._handleClosePopupT());
		this._toggleLike(b);
	}
}

export default class Card {
	constructor(data, selector) {
		this._price = data.price;
		this._image = data.image;
		this._selector = selector;
	}

	_getTemplate() {
		const templateCard = document
			.querySelector(this._selector)
			.content.querySelector('.cards__card-item')
			.cloneNode(true);
		return templateCard;
	}
	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		this._element.querySelector('.cards__img').src = this._image;
		this._element.querySelector('.cards__price').textContent = this._price;
		return this._element;
	}

	_handleToggleBtn() {
		this._element.querySelector('.card__btn').classList.toggle('card__btn_color_black');
		if (this._element.querySelector('.card__btn').classList.contains('card__btn_color_black')) {
			this._element.querySelector('.card__btn').value = 'Продано';
		} else {
			this._element.querySelector('.card__btn').value = 'Купить';
		}
	}

	_setEventListeners() {
		this._element.querySelector('.card__btn').addEventListener('click', () => {
			this._handleToggleBtn();
		});
	}
}

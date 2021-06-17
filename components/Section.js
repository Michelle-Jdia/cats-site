export default class Section {
	constructor({ data, renderer }, containerSelector) {
		this._data = data;
		this._renderer = renderer;
		this._containerSelector = document.querySelector(containerSelector);
	}

	rendererItems() {
		this._data.forEach((item) => {
			this._renderer(item);
		});
	}

	setItem(element) {
		this._containerSelector.append(element);
	}
	clear() {
		this._container.innerHTML = '';
	}
}

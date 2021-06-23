export default class SortItems {
	constructor(items, selector, selectorAge, selectorContainer) {
		this._items = items;
		this._selector = selector;
		this._selectorAge = selectorAge;
		this._selectorContainer = document.querySelectorAll(selectorContainer);
	}

	sort() {
		if (this._selector.value === 'price') {
			this._items.sort((a, b) => {
				return parseInt(a.price) - parseInt(b.price);
			});
		}
        this._selectorAge.selectedIndex = '';
		this.clear();
	}
	sortAge() {
		if (this._selectorAge.value === 'age') {
			this._items.sort((a, b) => {
				return parseInt(a.age) - parseInt(b.age);
			});
		}
		this._selector.selectedIndex = '';
		this.clear();
	}
	clear() {
		this._selectorContainer.forEach((c) => {
			return c.remove();
		});
	}
}

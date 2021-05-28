export default class Popup {
  constructor(poppupSelector) {
    this._popup = document.querySelector(poppupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  closePopup() {
    this._popup.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }
  setEventListeners() {
    this._popup
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());
  }
}

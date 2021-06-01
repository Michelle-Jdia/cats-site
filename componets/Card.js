const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupTakeMeCloseButton = document.querySelector(".popup-take-me__close");
const popupCloseBySubmitBtn = document.querySelector(".popup__button");
const popupTakeMeCloseBySubmitBtn = document.querySelector(".popup-take-me__btn-close");
const popupTakeMe = document.querySelector(".popup-take-me");
const sortSelector = document.querySelector(".selector__select");
export default class Card {
  constructor(data) {
    this._price = data.price;
    this._image = data.image;
  }

  _getTemplate() {
    const templateCard = document
      .querySelector(".template")
      .content.querySelector(".cards__card-item")
      .cloneNode(true);
    return templateCard;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".cards__img").src = this._image;
    this._element.querySelector(".cards__price").textContent = this._price;
    return this._element;
  }

  _handleToggleBtn() {
    this._element
      .querySelector(".card__btn")
      .classList.toggle("card__btn_color_black");
    if (
      this._element
        .querySelector(".card__btn")
        .classList.contains("card__btn_color_black")
    ) {
      this._element.querySelector(".card__btn").value = "Продано";
    } else {
      this._element.querySelector(".card__btn").value = "Купить";
    }
  }

  _handleOpenPopup(popup) {
    popup.classList.add("popup__opened");
  }

  _handleClosePopup(popup) {
    popup.classList.remove("popup__opened");
  }

  _toggleLike() {
    if (
      !this._element
        .querySelector(".cards__like")
        .classList.contains("cards__like_type_active")
    ) {
      this._element
        .querySelector(".cards__like")
        .classList.add("cards__like_type_active");
      this._handleOpenPopup(popupElement);
    } else {
      this._element
        .querySelector(".cards__like")
        .classList.remove("cards__like_type_active");
      this._handleOpenPopup(popupTakeMe);
    }
  }
//  function sort cards by price
//   _sortCards() {
//     const cardsContainer = document.querySelector('.cards');
//     this._element = this._getTemplate();
//     this._element.price = +this._element.price.replace(/\D/g, "");

//     this._element.sort((a, b) => (a.price > b.price ? 1 : -1));
//   cardsContainer.querySelector('.cards').innerHTML = "";
//   this.generateCard()
// }


  _setEventListeners() {
    this._element.querySelector(".card__btn").addEventListener("click", () => {
      this._handleToggleBtn();
    });
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", () => {
        this._toggleLike();
      });
    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup(popupElement);
    });
    popupCloseBySubmitBtn.addEventListener("click", () => {
      this._handleClosePopup(popupElement);
    });
    popupTakeMeCloseButton.addEventListener("click", () => {
      this._handleClosePopup(popupTakeMe);
    });
    popupTakeMeCloseBySubmitBtn.addEventListener("click", () => {
      this._handleClosePopup(popupTakeMe);
    });
    // sortSelector.addEventListener("change", () => {
    //   if (sortSelector.value == "price") {
    //     this._sortCards()
    //   }
    // });
  }
}

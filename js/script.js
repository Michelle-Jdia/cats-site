//  popups
const popup = document.querySelector(".popup");
const popupTakeMe = document.querySelector(".popup-take-me");
// close btn
const closeBtnPopup = document.querySelector(".popup__close");
const closePopupbtn = document.querySelector(".popup__button");
//
const closeBtnPopupTakeMe = document.querySelector(".popup-take-me__btn-close");
const closePopupTakeMeb = document.querySelector(".popup-take-me__close");
//  scroll btn
const scrollUpBtn = document.querySelector(".btn-scroll");

// universal function to open popup
function openPopup(pop) {
  pop.classList.add("popup__opened");
}
// function to close popups
function closePopup() {
  popup.classList.remove("popup__opened");
}
function closePopupTakeMe() {
  popupTakeMe.classList.remove("popup__opened");
}
//  function to make toggle like and open popup
function toggleLike(evt) {
  if (!evt.target.classList.contains("cards__like_type_active")) {
    evt.target.classList.add("cards__like_type_active");
    openPopup(popup);
  } else {
    evt.target.classList.remove("cards__like_type_active");
    openPopup(popupTakeMe);
  }
}

function toggleBtn(evt) {
  evt.target.classList.toggle("card__btn_color_black");
  if (evt.target.classList.contains("card__btn_color_black")) {
    evt.target.value = "Продано";
  } else {
    evt.target.value = "Купть";
  }
}

// run a loop in elements
const allBtn = document.querySelectorAll(".cards__like");
allBtn.forEach(function (btn) {
  btn.addEventListener("click", toggleLike);
});

// start scroll btn

// function whene the user scrolls down show the button
window.onscroll = function () {
  scrollPage();
};

function scrollPage() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// function whene the user clicks on the button, page scrolls to the top
function scrollPageUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// events listener
closeBtnPopup.addEventListener("click", closePopup);
closePopupbtn.addEventListener("click", closePopup);

closeBtnPopupTakeMe.addEventListener("click", closePopupTakeMe);
closePopupTakeMeb.addEventListener("click", closePopupTakeMe);

scrollUpBtn.addEventListener("click", scrollPageUp);

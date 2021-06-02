import Card from "../componets/Card.js";
const scrollUpBtn = document.querySelector(".btn-scroll");
const initialCards = [
  {
    price: "30 000 руб.",
    image: "./image/cards/cat (1).jpg",
  },
  {
    price: "40 000 руб.",
    image: "./image/cards/cat (2).jpg",
  },
  {
    price: "20 000 руб.",
    image: "./image/cards/cat (3).jpg",
  },
  {
    price: "25 000 руб.",
    image: "./image/cards/cat (1).jpg",
  },
  {
    price: "30 000 руб.",
    image: "./image/cards/cat (2).jpg",
  },
  {
    price: "10 000 руб.",
    image: "./image/cards/1234.jpg",
  },
];
const sortSelector = document.querySelector(".selector__select");
const cardsContainer = document.querySelector(".cards");
const templateEl = document.querySelector(".template");

initialCards.forEach((item) => {
  const elemenCard = new Card(item);
  const creatCardsElement = elemenCard.generateCard();
  cardsContainer.append(creatCardsElement);
});
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
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollUpBtn.addEventListener("click", scrollPageUp);

// validate
const formInput = document.querySelector(".form");
const emailInput = formInput.querySelector(".form__input");
const btnSubmit = formInput.querySelector(".form__btn");
const error = formInput.querySelector(".footer__input-error");

function checkInputValidity() {
  if (!emailInput.validity.valid) {
    error.textContent = emailInput.validationMessage;
    btnSubmit.disabled = true;
    btnSubmit.classList.add("footer__btn-submit_disabled");
  } else {
    error.textContent = "";
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("footer__btn-submit_disabled");
    disableBtn();
  }
}

function disableBtn() {
  if (emailInput.value.length <= 2) {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("footer__btn-submit_disabled");
  }
}
emailInput.addEventListener("input", checkInputValidity);
formInput.addEventListener("submit", function (e) {
  e.preventDefault();
});
disableBtn();
sortSelector.addEventListener("change", () => {
  if (sortSelector.value == "price") {
    sortCards();
  }
});

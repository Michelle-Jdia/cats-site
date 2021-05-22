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
    image: "./image/cards/cat (3).jpg",
  },
];
const listContainerEl = document.querySelector(".cards");
const templateEl = document.querySelector(".template");
const sortSelector = document.querySelector(".selector__select");
//  function clone cards from DOM and add  like & btn toggle
function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const addPrice = newItem.querySelector(".cards__price");
  const addImg = newItem.querySelector(".cards__img");
  addPrice.textContent = item.price;
  addImg.src = item.image;
  const likeBtn = newItem.querySelector(".cards__like");
  likeBtn.addEventListener("click", toggleLike);
  const cardBuyBtn = newItem.querySelector(".card__btn");
  cardBuyBtn.addEventListener("click", toggleBtn);

  return newItem;
}
//  function add cards to page
function addEl() {
  const page = initialCards.map(getItem);
  listContainerEl.prepend(...page);
}

addEl();
//  function sort cards by price
function sortCards() {
  initialCards.map((item) => {
    item.price = +item.price.replace(/\D/g, "");
  });
  initialCards.sort((a, b) => (a.price > b.price ? 1 : -1));
  listContainerEl.innerHTML = "";
  addEl();
}

sortSelector.addEventListener("change", () => {
  if (sortSelector.value == "price") {
    sortCards();
  }
});

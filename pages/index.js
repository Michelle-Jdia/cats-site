import Card from "../componets/Card.js";

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

const cardsContainer = document.querySelector('.cards');

initialCards.forEach((item)=>{

  const elemenCard = new Card (item);
  const creatCardsElement = elemenCard.generateCard();
  cardsContainer.append(creatCardsElement);
})

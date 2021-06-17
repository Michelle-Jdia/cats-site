import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import { popupFav, popupTakeMe, cardsContainer, templateEl, initialCards } from '../utils/constants.js';
function addAllItems() {
	const rendItems = new Section(
		{
			data: initialCards,
			renderer: (item) => {
				const card = new Card(item, templateEl);
				const creatCardsElement = card.generateCard();
				rendItems.setItem(creatCardsElement);
			}
		},
		cardsContainer
	);
	rendItems.rendererItems();
	const btnLike = document.querySelectorAll('.cards__like');
	const popup = new Popup(popupFav, popupTakeMe);
	console.log(btnLike)
	btnLike.forEach((btn) => {
		btn.addEventListener('click', () => {
			popup.setEventListeners(btn);
		});
	});
}
addAllItems();

// /////////////////////////////////////////
const scrollUpBtn = document.querySelector('.btn-scroll');
window.onscroll = function() {
	scrollPage();
};

function scrollPage() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollUpBtn.style.display = 'block';
	} else {
		scrollUpBtn.style.display = 'none';
	}
}

// function when the user clicks on the button, page scrolls to the top
function scrollPageUp() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
scrollUpBtn.addEventListener('click', scrollPageUp);

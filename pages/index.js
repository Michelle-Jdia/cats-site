import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import Validate from '../components/Validation.js';
import SortItems from '../components/SortItems.js';
import {
	form,
	emailInput,
	btnSubmit,
	error,
	popupFav,
	popupTakeMe,
	cardsContainer,
	templateEl,
	initialCards,
	checkBoxInput,
	selectorSortPrice,
	containerCards,
	selectorSortAge
} from '../utils/constants.js';
//  add cards to DOM ////////////////////////////

function createCards(card) {
	const newCard = new Card(card, templateEl);
	const newUserCard = newCard.generateCard();

	return newUserCard;
}
const rendItems = new Section(
	{
		data: initialCards,
		renderer: (item) => {
			const newCard = createCards(item);
			rendItems.setItem(newCard);
		}
	},
	cardsContainer
);

rendItems.rendererItems();
//  sort items //////////////////////
selectorSortPrice.addEventListener('change', () => {
	const sortItems = new SortItems(initialCards, selectorSortPrice, selectorSortAge, containerCards);
	sortItems.sort();
	rendItems.rendererItems();
	popups();
});
selectorSortAge.addEventListener('change', () => {
	const sortItems = new SortItems(initialCards, selectorSortPrice, selectorSortAge, containerCards);
	sortItems.sortAge();
	rendItems.rendererItems();
	popups();
});
//  popup like and fav /////////////////////////
function popups() {
	const btnLike = document.querySelectorAll('.cards__like');
	const popup = new Popup(popupFav, popupTakeMe);
	btnLike.forEach((btn) => {
		btn.addEventListener('click', () => {
			popup.setEventListeners(btn);
		});
	});
}
popups();
// add more items functions////////////////////////
const addedMoreItemsBtn = document.querySelector('.add-items__btn');
addedMoreItemsBtn.addEventListener('click', () => {
	rendItems.rendererItems();
	popups();
});
// validate/////////////////////////////////
const validateForm = new Validate(form, emailInput, btnSubmit, error, checkBoxInput);
validateForm.setEventListeners();

// scroll page functions///////////////////
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
function scrollPageUp() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
scrollUpBtn.addEventListener('click', scrollPageUp);

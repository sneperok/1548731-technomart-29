'use strict';
const cartPopup = document.querySelector(".modal-cart");
const cartButton = document.querySelectorAll(".buy");
const close = document.querySelectorAll(".close-button");

cartButton.forEach(cartButton => cartButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.add("modal-show");
}));

close.forEach(close => close.addEventListener('click', function(evt) {
	evt.preventDefault();
    cartPopup.classList.remove("modal-show");
}));

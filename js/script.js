'use strict';
const writeButton = document.querySelector(".map-button");
const writePopup = document.querySelector(".modal-writeus");
const mapButton = document.querySelector(".open-map");
const mapPopup = document.querySelector(".modal-map");
const close = document.querySelectorAll(".close-button");

const writeForm = document.querySelector(".writeus");
const fullName = document.querySelector("[name=fullname]");
const writeMail = document.querySelector("[name=email]");
const review = document.querySelector("[name=appeal]");


writeButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	writePopup.classList.add("modal-show");
	fullName.focus();
});

mapButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});


close.forEach(close => close.addEventListener('click', function(evt) {
    writePopup.classList.remove("modal-show");
	mapPopup.classList.remove("modal-show");
	writePopup.classList.remove("modal-error");
  }));


writeForm.addEventListener("submit", function (evt) {
	if (!fullName.value || !writeMail.value) {
		evt.preventDefault();
		writePopup.classList.add("modal-error");
	}
});

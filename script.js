"use strict";

// ENVIRONMENT
const envPath = "http://127.0.0.1:3000/";
// DOM Elements
const menuNav = document.querySelector(".ham-menu");
const mblMenu = document.querySelector(".mbl-navigation");
const bgNav = document.querySelector(".bg-navigation");
let clicked = true;

menuNav.addEventListener("click", function (evt) {
	if (clicked) {
		// Clicked Ham Menu
		this.src = "images/icon-close.svg";
		mblMenu.classList.add("active");
		bgNav.classList.add("active-bg-nav");
	} else {
		this.src = "images/icon-hamburger.svg";
		mblMenu.classList.remove("active");
		bgNav.classList.remove("active-bg-nav");
	}
	// Check whether it is true or not
	clicked = clicked ? 0 : 1;
});

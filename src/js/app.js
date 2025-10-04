import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import * as webpTest from "./modules/iswebp.js";

webpTest.isWebp();

//theme switcher
let dataTheme = document.documentElement.dataset;
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(dataTheme) {
	if (dataTheme.theme === "light" || darkThemeMq.matches) {
		dataTheme.theme = "dark";
	} else {
		dataTheme.theme = "light";
	}
}
// setTheme(dataTheme)
// btn.onclick = () => setTheme(dataTheme)
// //доделать
const sliderOptions = {
	spaceBetween: 10,
	autoHeight: true,
	modules: [Pagination],
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
};
new Swiper(".swiper", sliderOptions);

let rem;
function setRem() {
	rem = +parseFloat(
		getComputedStyle(document.documentElement).fontSize,
	).toFixed(2);
}

const stickyElement = document.querySelector(".recipe__ingredients-column");

setRem();

const center = { x: window.innerWidth / 2, y: window.innerHeight / 4 };
let lastElement;
window.onscroll = (e) => {
	const element = document
		.elementFromPoint(center.x, center.y)
		?.closest(".recipes__card");
	if (!element) return lastElement?.classList.remove("recipes__card--expanded");

	element.classList.add("recipes__card--expanded");
	lastElement = element;
};

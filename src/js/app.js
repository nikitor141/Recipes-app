import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

import * as webpTest from './modules/iswebp.js'

webpTest.isWebp()

//theme switcher
let dataTheme = document.documentElement.dataset
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

function setTheme(dataTheme) {
	if (dataTheme.theme === 'light' || darkThemeMq.matches) {
		dataTheme.theme = 'dark'
	} else {
		dataTheme.theme = 'light'
	}
}
// setTheme(dataTheme)
// btn.onclick = () => setTheme(dataTheme)
// //доделать
const sliderOptions = {
	spaceBetween: 10,
	modules: [Pagination],
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
}
const rolling = new Swiper('.rolling', sliderOptions)

const glaze = new Swiper('.glace', sliderOptions)

const mediaQueryTablet = window.matchMedia('(max-width: 1024px)')
let rem
function setRem() {
	rem = +parseFloat(getComputedStyle(document.documentElement).fontSize).toFixed(2)
}

const stickyElement = document.querySelector('.recipe__ingredients-column')

function sticky() {
	const stickyElementTop = +stickyElement.getBoundingClientRect().top.toFixed(1)
	if (stickyElementTop === +(rem * 2.8).toFixed(1)) {
		stickyElement.classList.add('pinned')
	} else {
		stickyElement.classList.remove('pinned')
	}
}

setRem()
if (!mediaQueryTablet.matches) {
	window.addEventListener('scroll', sticky)
}
mediaQueryTablet.addEventListener('change', () => {
	setRem()
	if (mediaQueryTablet.matches) {
		window.removeEventListener('scroll', sticky)
	} else {
		window.addEventListener('scroll', sticky)
	}
})

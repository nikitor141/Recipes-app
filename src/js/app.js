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
	autoHeight: true,
	modules: [Pagination],
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
}
new Swiper('.swiper', sliderOptions)

let rem
function setRem() {
	rem = +parseFloat(getComputedStyle(document.documentElement).fontSize).toFixed(2)
}

const stickyElement = document.querySelector('.recipe__ingredients-column')

setRem()

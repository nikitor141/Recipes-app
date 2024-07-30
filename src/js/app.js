import * as webpTest from './modules/iswebp.js';
webpTest.isWebp()

//theme switcher
let dataTheme = document.documentElement.dataset;
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(dataTheme) {
	if (dataTheme.theme === 'light' || darkThemeMq.matches) {
		dataTheme.theme = 'dark'
	} else {
		dataTheme.theme = 'light'
	}
}
setTheme(dataTheme)
btn.onclick = () => setTheme(dataTheme)
//доделать
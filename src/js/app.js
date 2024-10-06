import * as webpTest from './modules/iswebp.js'

// import * as test from './modules/test.js'

// test.test()

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
// findBanner()

// function findBanner() {
// 	if (
// 		!document.querySelector(
// 			'a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=localhost&utm_campaign=free-widget"]'
// 		)
// 	) {
// 		setTimeout(() => {
// 			findBanner()
// 		}, 300)
// 	} else {
// 		document.querySelector(
// 			'a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=localhost&utm_campaign=free-widget"]'
// 		).style.display = 'none'
// 	}
// }
// console.log()

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pageAboutUs": () => (/* binding */ pageAboutUs),
/* harmony export */   "pageCustomer": () => (/* binding */ pageCustomer)
/* harmony export */ });
// the menu page
const pageHome = (() => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    content.appendChild(header);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Stinky Bean Coffee House ☕';
    header.appendChild(headerTitle);

    const pages = document.createElement('div');
    pages.id = 'pages';
    content.appendChild(pages);

    const pageMenu = document.createElement('div')
    const pageReviews = document.createElement('div')
    const pageAbout = document.createElement('div')

    pageMenu.id = 'buttonMenu';
    pageReviews.id = 'buttonReviews';
    pageAbout.id = 'buttonAbout';

    pageMenu.classList.add('page');
    pageReviews.classList.add('page');
    pageAbout.classList.add('page');

    pageMenu.textContent = 'Menu';
    pageReviews.textContent = 'Our Customers';
    pageAbout.textContent = 'About us';

    pages.appendChild(pageMenu)
    pages.appendChild(pageReviews)
    pages.appendChild(pageAbout)
    
    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    const gridOne = document.createElement('div');
    const gridTwo = document.createElement('div');
    const gridThree = document.createElement('div');
    const gridFour = document.createElement('div');
    const gridFive = document.createElement('div');
    const gridSix = document.createElement('div');

    main.appendChild(gridOne); main.appendChild(gridTwo);
    main.appendChild(gridThree); main.appendChild(gridFour);
    main.appendChild(gridFive); main.appendChild(gridSix);

    gridOne.classList.add('mainPart'); 
    gridTwo.classList.add('mainPart');
    gridThree.classList.add('mainPart'); 
    gridFour.classList.add('mainPart');
    gridFive.classList.add('mainPart'); 
    gridSix.classList.add('mainPart');

    gridOne.id = 'image'; 
    gridThree.id = 'image'; 
    gridFive.id = 'image';

    gridTwo.id = 'gridText'; 
    gridFour.id = 'gridText'; 
    gridSix.id = 'gridText';

    gridTwo.appendChild(document.createElement('span')).textContent = 'Pick your morning pick-me-up:'
    gridFour.appendChild(document.createElement('span')).textContent = 'Choose your beans!'
    gridSix.appendChild(document.createElement('span')).textContent = 'Accompany your silky java journey with a treat:'
    
    let gridTwoList = [1, 2, 3, 4, 5]
    let gridFourList = [1, 2, 3, 4, 5]
    let gridSixList = [1, 2, 3, 4, 5]

    const gridTwoUl = document.createElement('ul');
    const gridFourUl = document.createElement('ul');
    const gridSixUl = document.createElement('ul');

    gridTwo.appendChild(gridTwoUl);
    gridFour.appendChild(gridFourUl);
    gridSix.appendChild(gridSixUl);
    
    for (let i = 0; i < gridTwoList.length; i++) {
        gridTwoUl.appendChild(document.createElement('li')).textContent = 'Coffee choice';
    };

    for (let i = 0; i < gridFourList.length; i++) {
        gridFourUl.appendChild(document.createElement('li')).textContent = 'Bean choice';
    };

    for (let i = 0; i < gridSixList.length; i++) {
        gridSixUl.appendChild(document.createElement('li')).textContent = 'Dessert choice';
    };

    gridOne.appendChild(document.createElement('img')).src = '../images/coffeecup.jpg';
    gridThree.appendChild(document.createElement('img')).src = '../images/coffeebeans.jpg';
    gridFive.appendChild(document.createElement('img')).src = '../images/coffeecake.jpg';

    pageMenu.addEventListener('click', () => {
        window.location.reload()
    });

    pageReviews.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageCustomer()
        console.log('switched to pageCustomer')
    });

    pageAbout.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageAboutUs()
        console.log('switched to pageAboutUs')
    })
})();

// the reviews page
const pageCustomer = (() => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    content.appendChild(header);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Stinky Bean Coffee House ☕';
    header.appendChild(headerTitle);

    const pages = document.createElement('div');
    pages.id = 'pages';
    content.appendChild(pages);

    const pageMenu = document.createElement('div')
    const pageReviews = document.createElement('div')
    const pageAbout = document.createElement('div')

    pageMenu.id = 'buttonMenu';
    pageReviews.id = 'buttonReviews';
    pageAbout.id = 'buttonAbout';

    pageMenu.classList.add('page');
    pageReviews.classList.add('page');
    pageAbout.classList.add('page');

    pageMenu.textContent = 'Menu';
    pageReviews.textContent = 'Our Customers';
    pageAbout.textContent = 'About us';

    pages.appendChild(pageMenu)
    pages.appendChild(pageReviews)
    pages.appendChild(pageAbout)

    const headerReviews = document.createElement('h2');
    headerReviews.id = 'headerReviews';
    headerReviews.textContent = 'Hear from our regular coffee enjoyers';
    content.appendChild(headerReviews);

    const reviews = document.createElement('div');
    reviews.id = 'reviews';
    content.appendChild(reviews);

    const reviewJenny = document.createElement('p');
    reviewJenny.classList.add('review');
    reviewJenny.textContent = 'The best coffee in the cosiest coffee house! I always come here to do my work! - Jenny'

    const reviewTom = document.createElement('p');
    reviewTom.classList.add('review');
    reviewTom.textContent = 'I like coffee, dis coffee gud - Tom'

    const reviewMel = document.createElement('p');
    reviewMel.classList.add('review');
    reviewMel.textContent = 'My kids absolutely love the carrot cake, but I just come for the handsome baristas... - Mel'

    const reviewHank = document.createElement('p');
    reviewHank.classList.add('review');
    reviewHank.textContent = `The best motivated hot chocolate I've ever tasted - Hank`

    reviews.appendChild(reviewJenny);
    reviews.appendChild(reviewTom);
    reviews.appendChild(reviewMel);
    reviews.appendChild(reviewHank);

    pageMenu.addEventListener('click', () => {
        window.location.reload()
    });

    pageReviews.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageCustomer()
        console.log('switched to pageCustomer')
    });

    pageAbout.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageAboutUs()
        console.log('switched to pageAboutUs')
    })
});

const pageAboutUs = (() => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.id = 'header';
    content.appendChild(header);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Stinky Bean Coffee House ☕';
    header.appendChild(headerTitle);

    const pages = document.createElement('div');
    pages.id = 'pages';
    content.appendChild(pages);

    const pageMenu = document.createElement('div')
    const pageReviews = document.createElement('div')
    const pageAbout = document.createElement('div')

    pageMenu.id = 'buttonMenu';
    pageReviews.id = 'buttonReviews';
    pageAbout.id = 'buttonAbout';

    pageMenu.classList.add('page');
    pageReviews.classList.add('page');
    pageAbout.classList.add('page');

    pageMenu.textContent = 'Menu';
    pageReviews.textContent = 'Our Customers';
    pageAbout.textContent = 'About us';

    pages.appendChild(pageMenu)
    pages.appendChild(pageReviews)
    pages.appendChild(pageAbout)

    const aboutUs = document.createElement('div');
    aboutUs.id = 'aboutUs';
    content.appendChild(aboutUs);

    const telephoneNumber = document.createElement('p');
    const address = document.createElement('p');
    const ownerName = document.createElement('p');
    const emailAddress = document.createElement('p');

    telephoneNumber.textContent = 'Telephone: 01234 567890';
    address.textContent = 'Address: Unit 5A, Java Road, Joe Town';
    ownerName.textContent = 'Owner: Mr Joe Javason';
    emailAddress.textContent = 'Email: theteam@stinkybeancoffee.com';

    aboutUs.appendChild(telephoneNumber)
    aboutUs.appendChild(address)
    aboutUs.appendChild(ownerName)
    aboutUs.appendChild(emailAddress)

    pageMenu.addEventListener('click', () => {
        window.location.reload()
    });

    pageReviews.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageCustomer()
        console.log('switched to pageCustomer')
    });

    pageAbout.addEventListener('click', () => {
        while (content.firstChild){
            content.removeChild(content.lastChild)
        };
        pageAboutUs()
        console.log('switched to pageAboutUs')
    })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageHome);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTs7QUFFQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7O0FBRUEsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQsaUVBQWUsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHRoZSBtZW51IHBhZ2VcbmNvbnN0IHBhZ2VIb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdTdGlua3kgQmVhbiBDb2ZmZWUgSG91c2Ug4piVJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlcy5pZCA9ICdwYWdlcyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlcyk7XG5cbiAgICBjb25zdCBwYWdlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFnZVJldmlld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHBhZ2VBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBwYWdlTWVudS5pZCA9ICdidXR0b25NZW51JztcbiAgICBwYWdlUmV2aWV3cy5pZCA9ICdidXR0b25SZXZpZXdzJztcbiAgICBwYWdlQWJvdXQuaWQgPSAnYnV0dG9uQWJvdXQnO1xuXG4gICAgcGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgIHBhZ2VSZXZpZXdzLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBwYWdlQWJvdXQuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuXG4gICAgcGFnZU1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgcGFnZVJldmlld3MudGV4dENvbnRlbnQgPSAnT3VyIEN1c3RvbWVycyc7XG4gICAgcGFnZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJztcblxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VNZW51KVxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VSZXZpZXdzKVxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VBYm91dClcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgZ3JpZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdyaWRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdyaWRGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ3JpZFNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChncmlkT25lKTsgbWFpbi5hcHBlbmRDaGlsZChncmlkVHdvKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdyaWRUaHJlZSk7IG1haW4uYXBwZW5kQ2hpbGQoZ3JpZEZvdXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ3JpZEZpdmUpOyBtYWluLmFwcGVuZENoaWxkKGdyaWRTaXgpO1xuXG4gICAgZ3JpZE9uZS5jbGFzc0xpc3QuYWRkKCdtYWluUGFydCcpOyBcbiAgICBncmlkVHdvLmNsYXNzTGlzdC5hZGQoJ21haW5QYXJ0Jyk7XG4gICAgZ3JpZFRocmVlLmNsYXNzTGlzdC5hZGQoJ21haW5QYXJ0Jyk7IFxuICAgIGdyaWRGb3VyLmNsYXNzTGlzdC5hZGQoJ21haW5QYXJ0Jyk7XG4gICAgZ3JpZEZpdmUuY2xhc3NMaXN0LmFkZCgnbWFpblBhcnQnKTsgXG4gICAgZ3JpZFNpeC5jbGFzc0xpc3QuYWRkKCdtYWluUGFydCcpO1xuXG4gICAgZ3JpZE9uZS5pZCA9ICdpbWFnZSc7IFxuICAgIGdyaWRUaHJlZS5pZCA9ICdpbWFnZSc7IFxuICAgIGdyaWRGaXZlLmlkID0gJ2ltYWdlJztcblxuICAgIGdyaWRUd28uaWQgPSAnZ3JpZFRleHQnOyBcbiAgICBncmlkRm91ci5pZCA9ICdncmlkVGV4dCc7IFxuICAgIGdyaWRTaXguaWQgPSAnZ3JpZFRleHQnO1xuXG4gICAgZ3JpZFR3by5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnRleHRDb250ZW50ID0gJ1BpY2sgeW91ciBtb3JuaW5nIHBpY2stbWUtdXA6J1xuICAgIGdyaWRGb3VyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHlvdXIgYmVhbnMhJ1xuICAgIGdyaWRTaXguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS50ZXh0Q29udGVudCA9ICdBY2NvbXBhbnkgeW91ciBzaWxreSBqYXZhIGpvdXJuZXkgd2l0aCBhIHRyZWF0OidcbiAgICBcbiAgICBsZXQgZ3JpZFR3b0xpc3QgPSBbMSwgMiwgMywgNCwgNV1cbiAgICBsZXQgZ3JpZEZvdXJMaXN0ID0gWzEsIDIsIDMsIDQsIDVdXG4gICAgbGV0IGdyaWRTaXhMaXN0ID0gWzEsIDIsIDMsIDQsIDVdXG5cbiAgICBjb25zdCBncmlkVHdvVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGdyaWRGb3VyVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGdyaWRTaXhVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBncmlkVHdvLmFwcGVuZENoaWxkKGdyaWRUd29VbCk7XG4gICAgZ3JpZEZvdXIuYXBwZW5kQ2hpbGQoZ3JpZEZvdXJVbCk7XG4gICAgZ3JpZFNpeC5hcHBlbmRDaGlsZChncmlkU2l4VWwpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFR3b0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ3JpZFR3b1VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpLnRleHRDb250ZW50ID0gJ0NvZmZlZSBjaG9pY2UnO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRGb3VyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkRm91clVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpLnRleHRDb250ZW50ID0gJ0JlYW4gY2hvaWNlJztcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l4TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBncmlkU2l4VWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSkudGV4dENvbnRlbnQgPSAnRGVzc2VydCBjaG9pY2UnO1xuICAgIH07XG5cbiAgICBncmlkT25lLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKS5zcmMgPSAnLi4vaW1hZ2VzL2NvZmZlZWN1cC5qcGcnO1xuICAgIGdyaWRUaHJlZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSkuc3JjID0gJy4uL2ltYWdlcy9jb2ZmZWViZWFucy5qcGcnO1xuICAgIGdyaWRGaXZlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKS5zcmMgPSAnLi4vaW1hZ2VzL2NvZmZlZWNha2UuanBnJztcblxuICAgIHBhZ2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIHBhZ2VSZXZpZXdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpXG4gICAgICAgIH07XG4gICAgICAgIHBhZ2VDdXN0b21lcigpXG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2hlZCB0byBwYWdlQ3VzdG9tZXInKVxuICAgIH0pO1xuXG4gICAgcGFnZUFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpXG4gICAgICAgIH07XG4gICAgICAgIHBhZ2VBYm91dFVzKClcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaGVkIHRvIHBhZ2VBYm91dFVzJylcbiAgICB9KVxufSkoKTtcblxuLy8gdGhlIHJldmlld3MgcGFnZVxuZXhwb3J0IGNvbnN0IHBhZ2VDdXN0b21lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnU3Rpbmt5IEJlYW4gQ29mZmVlIEhvdXNlIOKYlSc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZXMuaWQgPSAncGFnZXMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZXMpO1xuXG4gICAgY29uc3QgcGFnZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHBhZ2VSZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwYWdlQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgcGFnZU1lbnUuaWQgPSAnYnV0dG9uTWVudSc7XG4gICAgcGFnZVJldmlld3MuaWQgPSAnYnV0dG9uUmV2aWV3cyc7XG4gICAgcGFnZUFib3V0LmlkID0gJ2J1dHRvbkFib3V0JztcblxuICAgIHBhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBwYWdlUmV2aWV3cy5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gICAgcGFnZUFib3V0LmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcblxuICAgIHBhZ2VNZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIHBhZ2VSZXZpZXdzLnRleHRDb250ZW50ID0gJ091ciBDdXN0b21lcnMnO1xuICAgIHBhZ2VBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCB1cyc7XG5cbiAgICBwYWdlcy5hcHBlbmRDaGlsZChwYWdlTWVudSlcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChwYWdlUmV2aWV3cylcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChwYWdlQWJvdXQpXG5cbiAgICBjb25zdCBoZWFkZXJSZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXJSZXZpZXdzLmlkID0gJ2hlYWRlclJldmlld3MnO1xuICAgIGhlYWRlclJldmlld3MudGV4dENvbnRlbnQgPSAnSGVhciBmcm9tIG91ciByZWd1bGFyIGNvZmZlZSBlbmpveWVycyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJSZXZpZXdzKTtcblxuICAgIGNvbnN0IHJldmlld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdzLmlkID0gJ3Jldmlld3MnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3cyk7XG5cbiAgICBjb25zdCByZXZpZXdKZW5ueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXZpZXdKZW5ueS5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXdKZW5ueS50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBjb2ZmZWUgaW4gdGhlIGNvc2llc3QgY29mZmVlIGhvdXNlISBJIGFsd2F5cyBjb21lIGhlcmUgdG8gZG8gbXkgd29yayEgLSBKZW5ueSdcblxuICAgIGNvbnN0IHJldmlld1RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByZXZpZXdUb20uY2xhc3NMaXN0LmFkZCgncmV2aWV3Jyk7XG4gICAgcmV2aWV3VG9tLnRleHRDb250ZW50ID0gJ0kgbGlrZSBjb2ZmZWUsIGRpcyBjb2ZmZWUgZ3VkIC0gVG9tJ1xuXG4gICAgY29uc3QgcmV2aWV3TWVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJldmlld01lbC5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXdNZWwudGV4dENvbnRlbnQgPSAnTXkga2lkcyBhYnNvbHV0ZWx5IGxvdmUgdGhlIGNhcnJvdCBjYWtlLCBidXQgSSBqdXN0IGNvbWUgZm9yIHRoZSBoYW5kc29tZSBiYXJpc3Rhcy4uLiAtIE1lbCdcblxuICAgIGNvbnN0IHJldmlld0hhbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3SGFuay5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXdIYW5rLnRleHRDb250ZW50ID0gYFRoZSBiZXN0IG1vdGl2YXRlZCBob3QgY2hvY29sYXRlIEkndmUgZXZlciB0YXN0ZWQgLSBIYW5rYFxuXG4gICAgcmV2aWV3cy5hcHBlbmRDaGlsZChyZXZpZXdKZW5ueSk7XG4gICAgcmV2aWV3cy5hcHBlbmRDaGlsZChyZXZpZXdUb20pO1xuICAgIHJldmlld3MuYXBwZW5kQ2hpbGQocmV2aWV3TWVsKTtcbiAgICByZXZpZXdzLmFwcGVuZENoaWxkKHJldmlld0hhbmspO1xuXG4gICAgcGFnZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgcGFnZVJldmlld3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZClcbiAgICAgICAgfTtcbiAgICAgICAgcGFnZUN1c3RvbWVyKClcbiAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaGVkIHRvIHBhZ2VDdXN0b21lcicpXG4gICAgfSk7XG5cbiAgICBwYWdlQWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZClcbiAgICAgICAgfTtcbiAgICAgICAgcGFnZUFib3V0VXMoKVxuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoZWQgdG8gcGFnZUFib3V0VXMnKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IHBhZ2VBYm91dFVzID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdTdGlua3kgQmVhbiBDb2ZmZWUgSG91c2Ug4piVJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlcy5pZCA9ICdwYWdlcyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlcyk7XG5cbiAgICBjb25zdCBwYWdlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFnZVJldmlld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHBhZ2VBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBwYWdlTWVudS5pZCA9ICdidXR0b25NZW51JztcbiAgICBwYWdlUmV2aWV3cy5pZCA9ICdidXR0b25SZXZpZXdzJztcbiAgICBwYWdlQWJvdXQuaWQgPSAnYnV0dG9uQWJvdXQnO1xuXG4gICAgcGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgIHBhZ2VSZXZpZXdzLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBwYWdlQWJvdXQuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuXG4gICAgcGFnZU1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgcGFnZVJldmlld3MudGV4dENvbnRlbnQgPSAnT3VyIEN1c3RvbWVycyc7XG4gICAgcGFnZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJztcblxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VNZW51KVxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VSZXZpZXdzKVxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VBYm91dClcblxuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzLmlkID0gJ2Fib3V0VXMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XG5cbiAgICBjb25zdCB0ZWxlcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBvd25lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgdGVsZXBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ1RlbGVwaG9uZTogMDEyMzQgNTY3ODkwJztcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IFVuaXQgNUEsIEphdmEgUm9hZCwgSm9lIFRvd24nO1xuICAgIG93bmVyTmFtZS50ZXh0Q29udGVudCA9ICdPd25lcjogTXIgSm9lIEphdmFzb24nO1xuICAgIGVtYWlsQWRkcmVzcy50ZXh0Q29udGVudCA9ICdFbWFpbDogdGhldGVhbUBzdGlua3liZWFuY29mZmVlLmNvbSc7XG5cbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKHRlbGVwaG9uZU51bWJlcilcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGFkZHJlc3MpXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChvd25lck5hbWUpXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpXG5cbiAgICBwYWdlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBwYWdlUmV2aWV3cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKVxuICAgICAgICB9O1xuICAgICAgICBwYWdlQ3VzdG9tZXIoKVxuICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoZWQgdG8gcGFnZUN1c3RvbWVyJylcbiAgICB9KTtcblxuICAgIHBhZ2VBYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKVxuICAgICAgICB9O1xuICAgICAgICBwYWdlQWJvdXRVcygpXG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2hlZCB0byBwYWdlQWJvdXRVcycpXG4gICAgfSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlSG9tZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
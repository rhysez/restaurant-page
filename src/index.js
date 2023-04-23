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

    gridOne.appendChild(document.createElement('img')).src = './images/coffeecup.jpg';
    gridThree.appendChild(document.createElement('img')).src = './images/coffeebeans.jpg';
    gridFive.appendChild(document.createElement('img')).src = './images/coffeecake.jpg';

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
export const pageCustomer = (() => {
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

export const pageAboutUs = (() => {
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

export default pageHome
import { loadNavbar } from './load-navbar';

function loadMainPage() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('main-info-container');
    const headline = document.createElement('h1');
    headline.innerHTML = "Goga's";
    const info = document.createElement('p');
    info.innerHTML = "Best affordable food in Ufa";
    headerContainer.appendChild(headline);
    headerContainer.appendChild(info);

    content.appendChild(headerContainer);
    loadNavbar();
};

export {
    loadMainPage
}


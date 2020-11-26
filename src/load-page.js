(function loadMainPage() {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('main-info-container');
    const headline = document.createElement('h1');
    headline.innerHTML = "Goga's";
    const info = document.createElement('p');
    info.innerHTML = "Best affordable food in Ufa";
    headerContainer.appendChild(headline);
    headerContainer.appendChild(info);
    content.appendChild(headerContainer);
})();

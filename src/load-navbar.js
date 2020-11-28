import { loadMainPage } from "./load-page";
import { loadMenu } from "./menu";
import { loadContacts } from "./contacts"

function loadNavbar() {
    const content = document.querySelector('#content');

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    const navbar_nav = document.createElement('ul');
    navbar_nav.classList.add('navbar-nav');
    const nav_item1 = document.createElement('li');
    nav_item1.classList.add('nav-item');
    const nav_link1 = document.createElement('a');
    nav_link1.classList.add('nav-link');
    nav_link1.setAttribute("href", "#");
    nav_link1.onclick = loadMainPage;
    const icon1 = document.createElement('i');
    icon1.classList.add('fas');
    icon1.classList.add('fa-home');
    const span1 = document.createElement('span');
    span1.innerText = "Home";
    span1.classList.add("link-text");
    nav_link1.appendChild(icon1);
    nav_link1.appendChild(span1);
    nav_item1.appendChild(nav_link1);
    navbar_nav.appendChild(nav_item1);
    const nav_item2 = document.createElement('li');
    nav_item2.classList.add('nav-item');
    const nav_link2 = document.createElement('a');
    nav_link2.classList.add('nav-link');
    nav_link2.setAttribute("href", "#");
    nav_link2.onclick = loadMenu;
    const icon2 = document.createElement('i');
    icon2.classList.add('fas');
    icon2.classList.add('fa-utensils');
    const span2 = document.createElement('span');
    span2.innerText = "Menu";
    span2.classList.add("link-text");
    nav_link2.appendChild(icon2);
    nav_link2.appendChild(span2);
    nav_item2.appendChild(nav_link2);
    navbar_nav.appendChild(nav_item2);
    const nav_item3 = document.createElement('li');
    nav_item3.classList.add('nav-item');
    const nav_link3 = document.createElement('a');
    nav_link3.classList.add('nav-link');
    nav_link3.setAttribute("href", "#");
    nav_link3.onclick = loadContacts;
    const icon3 = document.createElement('i');
    icon3.classList.add('fas');
    icon3.classList.add('fa-address-book');
    const span3 = document.createElement('span');
    span3.innerText = "Contacts";
    span3.classList.add("link-text");
    nav_link3.appendChild(icon3);
    nav_link3.appendChild(span3);
    nav_item3.appendChild(nav_link3);
    navbar_nav.appendChild(nav_item3);

    nav_link1.id = "home-link";
    nav_link2.id = "menu-link";
    nav_link3.id = "contacts-link";

    navbar.appendChild(navbar_nav);
    content.appendChild(navbar);

    
}

export {
    loadNavbar
}
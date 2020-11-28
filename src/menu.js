import { loadNavbar } from "./load-navbar";

function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    loadNavbar();
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menu_header = document.createElement('h1');
    menu_header.innerText = "Menu";
    menu_header.classList.add('menu-header');
    menu.appendChild(menu_header);
    const menu_content = document.createElement('div');
    menu_content.classList.add('menu-content');
    menu.appendChild(menu_content);

    const menu_card1 = document.createElement('div');
    menu_card1.classList.add('menu-card');
    const menu_card1_content = document.createElement('div');
    menu_card1_content.classList.add('menu-card-content');
    const menu_card1_header = document.createElement('h3');
    menu_card1_header.innerText = "Cool Cheeseburger";
    const menu_card1_description = document.createElement('p');
    menu_card1_description.innerText = "Regular Bun, 100% Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions";
    const menu_card1_price = document.createElement('p');
    menu_card1_price.innerText = "Price: 2.99$";
    menu_card1_price.classList.add('price');
    menu_card1_content.appendChild(menu_card1_header);
    menu_card1_content.appendChild(menu_card1_description);
    menu_card1_content.appendChild(menu_card1_price);
    menu_card1.appendChild(menu_card1_content);
    menu_content.appendChild(menu_card1);

    const menu_card2 = document.createElement('div');
    menu_card2.classList.add('menu-card');
    const menu_card2_content = document.createElement('div');
    menu_card2_content.classList.add('menu-card-content');
    const menu_card2_header = document.createElement('h3');
    menu_card2_header.innerText = "Epic Pasta";
    const menu_card2_description = document.createElement('p');
    menu_card2_description.innerText = "Flour, Eggs, Olive oil, Sea salt, Pesto Sauce";
    const menu_card2_price = document.createElement('p');
    menu_card2_price.innerText = "Price: 5.99$";
    menu_card2_price.classList.add('price');
    menu_card2_content.appendChild(menu_card2_header);
    menu_card2_content.appendChild(menu_card2_description);
    menu_card2_content.appendChild(menu_card2_price);
    menu_card2.appendChild(menu_card2_content);
    menu_content.appendChild(menu_card2);

    const menu_card3 = document.createElement('div');
    menu_card3.classList.add('menu-card');
    const menu_card3_content = document.createElement('div');
    menu_card3_content.classList.add('menu-card-content');
    const menu_card3_header = document.createElement('h3');
    menu_card3_header.innerText = "Incredible Pizza";
    const menu_card3_description = document.createElement('p');
    menu_card3_description.innerText = "Pepperoni, Mozarella Cheese, Tomato Sauce";
    const menu_card3_price = document.createElement('p');
    menu_card3_price.innerText = "Price: 7.99$";
    menu_card3_price.classList.add('price');
    menu_card3_content.appendChild(menu_card3_header);
    menu_card3_content.appendChild(menu_card3_description);
    menu_card3_content.appendChild(menu_card3_price);
    menu_card3.appendChild(menu_card3_content);
    menu_content.appendChild(menu_card3);

    const menu_card4 = document.createElement('div');
    menu_card4.classList.add('menu-card');
    const menu_card4_content = document.createElement('div');
    menu_card4_content.classList.add('menu-card-content');
    const menu_card4_header = document.createElement('h3');
    menu_card4_header.innerText = "Big French Fries";
    const menu_card4_description = document.createElement('p');
    menu_card4_description.innerText = "Olive Oil, Potatoes, Tomato Sauce, More Potatoes";
    const menu_card4_price = document.createElement('p');
    menu_card4_price.innerText = "Price: 1.49$";
    menu_card4_price.classList.add('price');
    menu_card4_content.appendChild(menu_card4_header);
    menu_card4_content.appendChild(menu_card4_description);
    menu_card4_content.appendChild(menu_card4_price);
    menu_card4.appendChild(menu_card4_content);
    menu_content.appendChild(menu_card4);

    const menu_card5 = document.createElement('div');
    menu_card5.classList.add('menu-card');
    const menu_card5_content = document.createElement('div');
    menu_card5_content.classList.add('menu-card-content');
    const menu_card5_header = document.createElement('h3');
    menu_card5_header.innerText = "Crazy Hamburger";
    const menu_card5_description = document.createElement('p');
    menu_card5_description.innerText = "Regular Bun, 100% Beef Patty, Big Ham, Ketchup, Pickle Slices, Onions";
    const menu_card5_price = document.createElement('p');
    menu_card5_price.innerText = "Price: 2.99$";
    menu_card5_price.classList.add('price');
    menu_card5_content.appendChild(menu_card5_header);
    menu_card5_content.appendChild(menu_card5_description);
    menu_card5_content.appendChild(menu_card5_price);
    menu_card5.appendChild(menu_card5_content);
    menu_content.appendChild(menu_card5);

    const menu_card6 = document.createElement('div');
    menu_card6.classList.add('menu-card');
    const menu_card6_content = document.createElement('div');
    menu_card6_content.classList.add('menu-card-content');
    const menu_card6_header = document.createElement('h3');
    menu_card6_header.innerText = "Fascinating Refreshments";
    const menu_card6_description = document.createElement('p');
    menu_card6_description.innerText = "Coke / Fanta / Sprite / Mountain Dew / Dr. Pepper";
    const menu_card6_price = document.createElement('p');
    menu_card6_price.innerText = "Price: 0.99$";
    menu_card6_price.classList.add('price');
    menu_card6_content.appendChild(menu_card6_header);
    menu_card6_content.appendChild(menu_card6_description);
    menu_card6_content.appendChild(menu_card6_price);
    menu_card6.appendChild(menu_card6_content);
    menu_content.appendChild(menu_card6);

    menu.appendChild(menu_content);
    content.appendChild(menu);
}

export {
    loadMenu
}
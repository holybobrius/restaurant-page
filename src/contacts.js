import { loadNavbar } from "./load-navbar";

function loadContacts() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    loadNavbar();
    const contacts_container = document.createElement('div');
    contacts_container.classList.add('contacts-container');
    const contacts_header = document.createElement('h1');
    contacts_header.innerText = "Contact Us:"
    contacts_header.classList.add('menu-header');
    contacts_container.appendChild(contacts_header);

    const contacts_info_container1 = document.createElement('div');
    const icon1 = document.createElement('i');
    icon1.classList.add('fas');
    icon1.classList.add('fa-phone');
    const span1 = document.createElement('span');
    span1.innerText = "+7 (918) 459-59-43";
    span1.setAttribute("style", "padding-left: 5px;");
    contacts_info_container1.appendChild(icon1);
    contacts_info_container1.appendChild(span1);

    const contacts_info_container2 = document.createElement('div');
    const icon2 = document.createElement('i');
    icon2.classList.add('fas');
    icon2.classList.add('fa-at');
    icon2.setAttribute("style", "padding-top: 10px");
    const span2 = document.createElement('span');
    span2.innerText = "gogi4@gmail.com";
    span2.setAttribute("style", "padding-left: 5px;");
    contacts_info_container2.appendChild(icon2);
    contacts_info_container2.appendChild(span2);

    const contacts_info_container3 = document.createElement('div');
    const icon3 = document.createElement('i');
    icon3.classList.add('fab');
    icon3.classList.add('fa-github');
    icon3.setAttribute("style", "padding-top: 10px");
    const github_link = document.createElement('a');
    github_link.innerText = "holybobrius";
    github_link.classList.add("github-link");
    github_link.setAttribute("style", "padding-left: 5px;");
    github_link.setAttribute("href", "https://github.com/holybobrius");
    github_link.setAttribute("target", "_blank");
    contacts_info_container3.appendChild(icon3);
    contacts_info_container3.appendChild(github_link);

    contacts_container.appendChild(contacts_info_container1);
    contacts_container.appendChild(contacts_info_container2);
    contacts_container.appendChild(contacts_info_container3);
    content.appendChild(contacts_container);
}

export {
    loadContacts
}
(()=>{"use strict";function e(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.classList.add("main-info-container");const d=document.createElement("h1");d.innerHTML="Goga's";const c=document.createElement("p");c.innerHTML="Best affordable food in Ufa",n.appendChild(d),n.appendChild(c),e.appendChild(n),t()}function n(){const e=document.querySelector("#content");e.innerHTML="",t();const n=document.createElement("div");n.classList.add("menu");const d=document.createElement("h1");d.innerText="Menu",d.classList.add("menu-header"),n.appendChild(d);const c=document.createElement("div");c.classList.add("menu-content"),n.appendChild(c);const a=document.createElement("div");a.classList.add("menu-card");const s=document.createElement("div");s.classList.add("menu-card-content");const i=document.createElement("h3");i.innerText="Cool Cheeseburger";const l=document.createElement("p");l.innerText="Regular Bun, 100% Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions";const o=document.createElement("p");o.innerText="Price: 2.99$",o.classList.add("price"),s.appendChild(i),s.appendChild(l),s.appendChild(o),a.appendChild(s),c.appendChild(a);const r=document.createElement("div");r.classList.add("menu-card");const m=document.createElement("div");m.classList.add("menu-card-content");const p=document.createElement("h3");p.innerText="Epic Pasta";const u=document.createElement("p");u.innerText="Flour, Eggs, Olive oil, Sea salt, Pesto Sauce";const h=document.createElement("p");h.innerText="Price: 5.99$",h.classList.add("price"),m.appendChild(p),m.appendChild(u),m.appendChild(h),r.appendChild(m),c.appendChild(r);const C=document.createElement("div");C.classList.add("menu-card");const E=document.createElement("div");E.classList.add("menu-card-content");const L=document.createElement("h3");L.innerText="Incredible Pizza";const T=document.createElement("p");T.innerText="Pepperoni, Mozarella Cheese, Tomato Sauce";const v=document.createElement("p");v.innerText="Price: 7.99$",v.classList.add("price"),E.appendChild(L),E.appendChild(T),E.appendChild(v),C.appendChild(E),c.appendChild(C);const x=document.createElement("div");x.classList.add("menu-card");const f=document.createElement("div");f.classList.add("menu-card-content");const P=document.createElement("h3");P.innerText="Big French Fries";const k=document.createElement("p");k.innerText="Olive Oil, Potatoes, Tomato Sauce, More Potatoes";const b=document.createElement("p");b.innerText="Price: 1.49$",b.classList.add("price"),f.appendChild(P),f.appendChild(k),f.appendChild(b),x.appendChild(f),c.appendChild(x);const g=document.createElement("div");g.classList.add("menu-card");const S=document.createElement("div");S.classList.add("menu-card-content");const M=document.createElement("h3");M.innerText="Crazy Hamburger";const B=document.createElement("p");B.innerText="Regular Bun, 100% Beef Patty, Big Ham, Ketchup, Pickle Slices, Onions";const H=document.createElement("p");H.innerText="Price: 2.99$",H.classList.add("price"),S.appendChild(M),S.appendChild(B),S.appendChild(H),g.appendChild(S),c.appendChild(g);const y=document.createElement("div");y.classList.add("menu-card");const $=document.createElement("div");$.classList.add("menu-card-content");const F=document.createElement("h3");F.innerText="Fascinating Refreshments";const O=document.createElement("p");O.innerText="Coke / Fanta / Sprite / Mountain Dew / Dr. Pepper";const z=document.createElement("p");z.innerText="Price: 0.99$",z.classList.add("price"),$.appendChild(F),$.appendChild(O),$.appendChild(z),y.appendChild($),c.appendChild(y),n.appendChild(c),e.appendChild(n)}function t(){const t=document.querySelector("#content"),d=document.createElement("nav");d.classList.add("navbar");const c=document.createElement("ul");c.classList.add("navbar-nav");const a=document.createElement("li");a.classList.add("nav-item");const s=document.createElement("a");s.classList.add("nav-link"),s.setAttribute("href","#"),s.onclick=e;const i=document.createElement("i");i.classList.add("fas"),i.classList.add("fa-home");const l=document.createElement("span");l.innerText="Home",l.classList.add("link-text"),s.appendChild(i),s.appendChild(l),a.appendChild(s),c.appendChild(a);const o=document.createElement("li");o.classList.add("nav-item");const r=document.createElement("a");r.classList.add("nav-link"),r.setAttribute("href","#"),r.onclick=n;const m=document.createElement("i");m.classList.add("fas"),m.classList.add("fa-utensils");const p=document.createElement("span");p.innerText="Menu",p.classList.add("link-text"),r.appendChild(m),r.appendChild(p),o.appendChild(r),c.appendChild(o);const u=document.createElement("li");u.classList.add("nav-item");const h=document.createElement("a");h.classList.add("nav-link"),h.setAttribute("href","#");const C=document.createElement("i");C.classList.add("fas"),C.classList.add("fa-address-book");const E=document.createElement("span");E.innerText="Contacts",E.classList.add("link-text"),h.appendChild(C),h.appendChild(E),u.appendChild(h),c.appendChild(u),s.id="home-link",r.id="menu-link",h.id="contacts-link",d.appendChild(c),t.appendChild(d)}e()})();
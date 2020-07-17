let callButtonMenu = document.querySelector(".header__menu-icon");
let menu = document.querySelector(".header__menu");

let menuItems = document.querySelectorAll(".menu-item");

let mapContainer = document.querySelector(".map-container");
let inDeveloping = document.querySelector(".in-developing");

window.addEventListener("click", function(e) {
  if (callButtonMenu.contains(e.target)) {
    if (!callButtonMenu.classList.contains("active")) {
      changeVisibility(menu, 'visible');
      callButtonMenu.classList.add("active");
    } else {
      closeMobileMenu();
    }
  } else if (!callButtonMenu.contains(e.target) && !menu.contains(e.target)) {
    closeMobileMenu();
  }
});

for (let element of menuItems) {
  element.addEventListener("click", function() {
    if (!element.classList.contains("active")) {
      for (let elem of menuItems) {
        elem.classList.contains("active") && elem.classList.remove("active");
      }
      element.classList.add("active");
      if (element.classList.contains("menu-item_home")) {
        changeVisibility(inDeveloping, 'hidden');
        changeVisibility(mapContainer, 'visible');
        closeMobileMenu();
      } else if (!element.classList.contains("menu-item_login")) {
        changeVisibility(mapContainer, 'hidden');
        changeVisibility(inDeveloping, 'visible');
        closeMobileMenu();
      }
    } else closeMobileMenu();
  });
}

function closeMobileMenu() {
  changeVisibility(menu, 'hidden');
  callButtonMenu.classList.remove("active");
}
let callButtonMenu = document.querySelector(".header__menu-icon");
let menu = document.querySelector(".header__menu");

window.addEventListener("click", function(e) {
  if (callButtonMenu.contains(e.target)) {
    if (!callButtonMenu.classList.contains("active")) {
      changeVisibility(menu, 'visible');
      callButtonMenu.classList.add("active");
    } else {
      changeVisibility(menu, 'hidden');
      callButtonMenu.classList.remove("active");
    }
  } else if (!callButtonMenu.contains(e.target) && !menu.contains(e.target)) {
    changeVisibility(menu, 'hidden');
    callButtonMenu.classList.remove("active");
  }
});
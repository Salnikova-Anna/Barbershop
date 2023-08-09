const bgMenuOpenBtn = document.querySelector(".burger-menu-open-button");
const bgMenuCloseBtn = document.querySelector(".burger-menu-close-btn");
const burgerMenu = document.querySelector(".burger-menu");

bgMenuOpenBtn.addEventListener("click", handleOpenMenuClick);
bgMenuCloseBtn.addEventListener("click", handleCloseMenuClick);

function handleOpenMenuClick() {
  burgerMenu.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
}

function handleCloseMenuClick() {
  burgerMenu.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
}

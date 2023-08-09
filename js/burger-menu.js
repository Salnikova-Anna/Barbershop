const refs = {
  bgMenuOpenBtn: document.querySelector(".burger-menu-open-button"),
  bgMenuCloseBtn: document.querySelector(".burger-menu-close-btn"),
  burgerMenu: document.querySelector(".burger-menu"),
  navLinks: document.querySelectorAll(".burger-menu-soc-nav-link"),
};

[...refs.navLinks].map((link) =>
  link.addEventListener("click", handleCloseMenuClick)
);

refs.bgMenuOpenBtn.addEventListener("click", handleOpenMenuClick);
refs.bgMenuCloseBtn.addEventListener("click", handleCloseMenuClick);

function handleOpenMenuClick() {
  refs.burgerMenu.classList.add("is-shown");
  document.body.classList.add("no-scroll");
  // document.body.addEventListener("click", handleCloseMenuClick);
}

function handleCloseMenuClick() {
  refs.burgerMenu.classList.remove("is-shown");
  document.body.classList.remove("no-scroll");
}

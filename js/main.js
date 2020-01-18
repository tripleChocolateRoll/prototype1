const navScroll = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    navScroll.classList.add("scrolled");
  } else {
    navScroll.classList.remove("scrolled");
  }
});
///navbtn
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");
let navClick = false;

navBtn.addEventListener("click", () => {
  if (!navClick) {
    navBtn.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach(item => {
      item.classList.add("open");
    });
    navClick = true;
  } else {
    navBtn.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach(item => {
      item.classList.remove("open");
    });
    navClick = false;
  }
});

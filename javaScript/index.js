const header = document.querySelector(".header");
const mobileHeader = document.querySelector(".mobile-header");
const profile = document.getElementsByClassName("profile")[0];
const navItems = document.getElementsByClassName("nav-item");
const sections = document.getElementsByTagName("section");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".nav-item");


// Responsive header
(function () {
  const TAB_SIZE = 768;
  const WINDOW_WIDTH = window.innerWidth;

  if (WINDOW_WIDTH > TAB_SIZE) {
    header.classList.add("header--visible");
    mobileHeader.classList.remove("mobile-header--visible");
  } else {
    mobileHeader.classList.add("mobile-header--visible");
    header.classList.remove("header--visible");
  }
})();

(function () {
  burger.addEventListener("click", () => {
    if (menu.classList.contains("menu--collapse")) {
      menu.classList.remove("menu--collapse");
    } else {
      menu.classList.add("menu--collapse");
    }
  });
})();

// collapse menu on click menu item
(function () {
  menuItems.forEach((item) =>
    item.addEventListener("click", () => {
      if (menu.classList.contains("menu--collapse")) {
        menu.classList.remove("menu--collapse");
      }
    })
  );
})();
window.onscroll = function () {
  "use strict";

  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    header.classList.add("header-border");
    header.classList.remove("header-plain");
    mobileHeader.classList.add("mobile-header-border");
    mobileHeader.classList.remove("mobile-header-plain");
  } else {
    header.classList.add("header-plain");
    header.classList.remove("header-border");
    mobileHeader.classList.add("mobile-header-plain");
    mobileHeader.classList.remove("mobile-header-border");
  }
  if (
    document.body.scrollTop >= getOffset(profile) ||
    document.documentElement.scrollTop >= getOffset(profile)
  ) {
    navItems[0].classList.add("active");
  }
  //setActiveNav();
};
function setActiveNav() {
  for (let i = 0; i < sections.length - 1; i += 1) {
    let section = sections[i];
    let nextSection = sections[i + 1];
    if (
      document.body.scrollTop == getOffset(section) ||
      document.documentElement.scrollTop == getOffset(section)
    ) {
      console.log(
        getOffset(section),
        "Nxt =>",
        getOffset(nextSection),
        document.documentElement.scrollTop
      );
      if (navItems[i]) navItems[i].classList.add("active");
    } else {
      console.log(
        getOffset(section),
        "false =>",
        getOffset(nextSection),
        document.documentElement.scrollTop
      );
      if (navItems[i]) navItems[i].classList.remove("active");
    }
  }
}
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}
/*function renderHeader() {
  const TAB_SIZE = 768;
  const WINDOW_WIDTH = window.innerWidth;

  if (WINDOW_WIDTH > TAB_SIZE) {
    header.classList.add("header--visible");
    mobileHeader.classList.remove("mobile-header--visible");
  } else {
    header.classList.add("mobile-header--visible");
    mobileHeader.classList.remove("header--visible");
  }
}*/

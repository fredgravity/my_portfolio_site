const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//overlay initial state
let showMenu = true;
// alert(showMenu);

toggleMenu = () => {
  //   alert("hi");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));
    // reset menu state
    showMenu = true;
    // alert(showMenu);
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));
    // reset menu state
    showMenu = false;
    // alert("showMenu");
  }
};

menuBtn.addEventListener("click", toggleMenu);

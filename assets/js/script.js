(function() {
  const navHome = document.querySelector('#navHome')
  if (window.location.pathname == '/') navHome.classList.add('active')

})();

const activePage = window.location.pathname
const navLinks = document.querySelectorAll('.navLink').forEach(link => {
  if(link.href.endsWith(`${activePage}`)) {
    link.classList.add('active')
  }
})

// Responsive navbar
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElt = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log('hamburger')
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-in");
      elt.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-out");
      elt.classList.add("fade-in");
    });
  }
});



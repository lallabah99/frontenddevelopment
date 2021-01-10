// JavaScript Document



// Hamburger menu

var navbar = document.querySelector(".navbar")
var hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    navbar.classList.toggle("zieNav")
    hamburger.classList.toggle("openDicht")
  }

  hamburger.addEventListener("click", toggleHamburger)





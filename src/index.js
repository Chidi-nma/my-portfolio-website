// Get references to elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.querySelectorAll("#mobile-menu a"); // Select all menu links

// Toggle mobile menu when hamburger icon is clicked
hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close the menu when a menu item is clicked
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active"); // Remove 'active' class to hide menu
  });
});

// typewriter effect

window.addEventListener("DOMContentLoaded", () => {
  // If prefers-reduced-motion, just write a static title:
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const target = document.getElementById("role-typewriter");

  if (prefersReduced) {
    target.textContent = "Product Management";
    return;
  }

  const typewriter = new Typewriter(target, {
    loop: true,
    delay: 80, // faster typing per char
    deleteSpeed: 50, // faster deletion per char
    cursor: "", // hide blinking cursor
    autoStart: true,
  });

  typewriter
    .typeString("Product Mgt & Development")
    .pauseFor(1500)
    .deleteAll()
    .typeString("AI/ML & Data Science")
    .pauseFor(1500)
    .deleteAll()
    .start();
});

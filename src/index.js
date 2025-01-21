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

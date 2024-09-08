// Function to add the product to the cart
function addToCart() {
  alert("Product added to cart!");
}

// Function to handle clicking on "Shop now" button
document.querySelector(".shop-now").addEventListener("click", function () {
  alert("Redirecting to the product page");
});

// Function to handle clicking on "View Cart" button
document.querySelector(".Cart").addEventListener("click", function () {
  alert("Redirecting to the cart page");
});

// Function to handle social media links
const socialLinks = document.querySelectorAll(".social");
socialLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const socialMedia = e.currentTarget.getAttribute("href");
      alert("Do you want to navigate to other website " + socialMedia);
  });
});


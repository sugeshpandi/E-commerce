// Dummy product data (you can replace this with actual product data from a server or database)
const productData = [
  { id: 1, name: "Pizza", price: 8.99, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Burger", price: 5.99, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Pasta", price: 7.99, img: "https://via.placeholder.com/150" }
];

// Cart array to hold the products added to cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = productData.find(item => item.id === productId);
  const cartProduct = cart.find(item => item.id === productId);

  if (!cartProduct) {
    // Add product to the cart with complete details
    cart.push({ ...product, quantity: 1 });
  } else {
    // If the product is already in the cart, increase the quantity
    cartProduct.quantity += 1;
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count
  updateCartCount();
}

// Function to update the cart count displayed in the header
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
    cartCountElement.textContent = totalItems;
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const cartProduct = cart.find(item => item.id === productId);
  if (cartProduct) {
    if (cartProduct.quantity > 1) {
      cartProduct.quantity -= 1;
    } else {
      cart = cart.filter(item => item.id !== productId);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
}

// Function to clear the cart
function clearCart() {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      if (productCard) {
        const productId = parseInt(productCard.getAttribute('data-product-id'));
        addToCart(productId);
      }
    });
  });

  // Add event listeners to "Remove from Cart" buttons
  document.querySelectorAll('.remove-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      if (productCard) {
        const productId = parseInt(productCard.getAttribute('data-product-id'));
        removeFromCart(productId);
      }
    });
  });

  // Add event listener to "Clear Cart" button
  document.getElementById('clear-cart').addEventListener('click', () => {
    clearCart();
  });
});

// Initial cart count update
document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();
});
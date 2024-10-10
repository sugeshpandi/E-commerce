// Dummy Product Data for the Specific Product Page
const product = {
    id: 1,
    name: "Pizza",
    price: 8.99,
    description: "A delicious cheese pizza with fresh ingredients.",
    img: "https://via.placeholder.com/300"
  };
  
  // Load Product Details on Page Load
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.img;
  
    // Load cart count from localStorage
    updateCartCount();
  });
  
  // Add to Cart Functionality
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(item => item.id === product.id);
  
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
  });
  
  // Function to Update Cart Count in Header
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
  }
  
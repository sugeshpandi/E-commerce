// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to load cart items dynamically
function loadCart() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = ''; // Clear any existing cart items
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Loop through cart and create HTML for each product
        cart.forEach(item => {
            // Dummy data for products (replace with actual product details)
            const productDetails = getProductDetailsById(item.id);

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${productDetails.image}" alt="${productDetails.name}">
                <div class="cart-item-info">
                    <h4>${productDetails.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ₹${productDetails.price * item.quantity}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartItemsElement.appendChild(cartItem);
            totalPrice += productDetails.price * item.quantity;
        });
    }

    // Update total price
    document.getElementById('total-price').textContent = totalPrice;
    updateCartCount(); // Update cart count in header
}

// Function to get product details by ID (replace with real product data)
function getProductDetailsById(id) {
    const products = [
        { id: 1, name: 'Pizza', price: 500, image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Burger', price: 300, image: 'https://via.placeholder.com/80' },
        { id: 3, name: 'Pasta', price: 400, image: 'https://via.placeholder.com/80' }
    ];
    return products.find(product => product.id === id);
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload cart after removing an item
}

// Function to update the cart count displayed in the header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((total, product) => total + product.quantity, 0);
    }
}

// Load cart items when the page loads
document.addEventListener('DOMContentLoaded', loadCart);

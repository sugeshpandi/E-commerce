// Dummy Product Data
const products = [
          {
              id: 1,
              name: "Pizza",
              price: 8.99,
              description: "A delicious cheese pizza with fresh ingredients.",
              img: "https://via.placeholder.com/300"
          },
          {
              id: 2,
              name: "Burger",
              price: 9.00,
              description: "A delicious chicken burger with fresh ingredients.",
              img: "https://via.placeholder.com/150"
          }
      ];
      
      // Load Product Details on Checkout Page Load
      document.addEventListener("DOMContentLoaded", () => {
          const productId = getProductId();
          const product = products.find(p => p.id === productId);
          
          if (product) {
              // Display product details in checkout
              document.getElementById("checkout-product-name").textContent = product.name;
              document.getElementById("checkout-product-price").textContent = `$${product.price.toFixed(2)}`;
              document.getElementById("checkout-product-description").textContent = product.description;
              document.getElementById("checkout-product-image").src = product.img;
          } else {
              alert('Product not found!');
          }
      });
      
      // Function to get product ID from URL
      function getProductId() {
          const urlParams = new URLSearchParams(window.location.search);
          return parseInt(urlParams.get('id'), 10);
      }
      
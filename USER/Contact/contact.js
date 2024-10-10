// Submit Contact Form
document.getElementById("contact-form").addEventListener("submit", function(event) {
          event.preventDefault();
      
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;
      
          // Validate and handle form submission here (e.g., send data to server)
          console.log("Contact Form Submitted", { name, email, phone, message });
      
          alert("Thank you, " + name + "! Your message has been sent.");
          document.getElementById("contact-form").reset();  // Reset the form
      });
      
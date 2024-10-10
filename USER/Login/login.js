const captions = [
          "Satisfy Your Cravings, Delivered Fresh to Your Door!",
          "Good Food, Great Mood—Order Now!",
          "Taste the Best, Skip the Rest—Shop Fresh Food Online!",
          "From Farm to Fork, Delivered with Love!",
          "Your Favorite Meals, Just a Click Away!"
        ];
        
        let index = 0;
        
        function changeCaption() {
          const captionElement = document.getElementById("caption");
          captionElement.textContent = captions[index];
          index = (index + 1) % captions.length;
        }
        
        setInterval(changeCaption, 5000); // Change caption every 5 seconds
        
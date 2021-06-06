var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };

  
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  var myButton = document.getElementById('btnshort');
        myButton.addEventListener('click', ButtonTes);
        
        function ButtonTes(){
        fetch('https://api.shrtco.de/v2/shorten?url='+ 
        document.getElementById('textinput').value)
        .then(Response => Response.json()).then(
              data => {
                 console.log(data)
              }
          )
      }

      var closePopup = document.getElementById("popupclose");
      var overlay = document.getElementById("overlay");
      var popup = document.getElementById("popup");
      var button = document.getElementById("btnshort");
      // Close Popup Event
      overlay.onclick = function() {
          overlay.className = '';
          popup.className = '';
      };
      // Close Popup Event
      closePopup.onclick = function() {
          overlay.className = '';
          popup.className = '';
      };
      // Show Overlay and Popup
      button.onclick = function() {
          overlay.className = 'show';
          popup.className = 'show';
      }
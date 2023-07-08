toggle = document.querySelector(".toggler");
toggle.onclick = function() { 
    navBar= document.querySelector (".nav");
    navBar.classList.toggle("active")
}


// typing 

var typed = new Typed ("#typing ", {
  strings:[" 'web developer ' ", "web designer 💻 ", " 'programmer ' "],
  typeSpeed : 100,
  backSpeed : 70,
  loop :true

})



// pop up 

function openPopup(contentId) {
  var popupContent = document.getElementById(contentId);
  popupContent.style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  var popupContents = document.getElementsByClassName("popup-content");
  for (var i = 0; i < popupContents.length; i++) {
      popupContents[i].style.display = "none";
  }
  document.getElementById("popup").style.display = "none";
}
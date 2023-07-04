toggle = document.querySelector(".toggler");
toggle.onclick = function() { 
    navBar= document.querySelector (".nav");
    navBar.classList.toggle("active")
}

// pop up 

const popup = document.getElementById("popup");
const readMoreBtn = document.getElementById("read-more-btn");

readMoreBtn.addEventListener("click", function() {
  popup.style.display = "block";
});

function closePopup() {
  popup.style.display = "none";
}

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });



//  scroll up button 

var scrollTop = document.getElementById("scrollTop");

window.onscroll = function(){
    scrollfunction()
};
function scrollfunction(){

    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
}

scrollTop.addEventListener("click", function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})
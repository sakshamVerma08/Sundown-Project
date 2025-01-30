const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

elemContainer.addEventListener("mouseenter", () => {
  fixedImage.style.display = "block";
});
elemContainer.addEventListener("mouseleave", () => {
  fixedImage = document.querySelector("#fixed-image");
  fixedImage.style.display = "none";
});

let elements = Array.from(document.querySelectorAll(".elem"));

elements.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let src = e.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${src})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ******************  DIFFERENT JAVASCRIPT *************/

const menuButton = document.querySelector("#sidebarTrigger");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("onclick", () => {
  
});

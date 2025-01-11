const slider = document.querySelector(".carousel");
const slides = document.querySelectorAll(".single-work-container");
const prev = document.querySelector("#edu-prev");
const next = document.getElementById("edu-next");

const aside = document.getElementById("aside");
const toggler = document.getElementById("nav-control");
function toggleNavbar() {
  aside.classList.toggle("show-nav");
}

var edu_slider = 0;

prev.addEventListener("click", () => {
  edu_slider = (edu_slider - 1) % slides.length;

  slider.style.transform = `translateX(${edu_slider * 100}%)`;
});

next.addEventListener("click", () => {
  edu_slider = (edu_slider + 1) % slides.length;

  slider.style.transform = `translateX(-${edu_slider * 100}%)`;
});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});

const slides = document.querySelectorAll(".slide")
for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses()


        slide.classList.add("active")
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}
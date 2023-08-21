const burgerMenu = document.querySelector(".hamburger");

const Menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    Menu.classList.toggle("active");
});

document.querySelectorAll("link").forEach(n => n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    Menu.classList.remove("active");
}));

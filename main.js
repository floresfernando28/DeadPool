// Le añadimos el efecto del scrool al header cuando bajamos se
// añadiran nuevos diseños

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY>0);
});

// Codigo de javascript para que funcione el menu

const menu = document.querySelector(".ul-menu");
const openMenuBtn = document.querySelector(".menuP");
// const closeMenuBtn = document.querySelector(".menu i");

function toggleMenu(){
    menu.classList.toggle("active");

}

openMenuBtn.addEventListener("click",toggleMenu);
// closeMenuBtn.addEventListener("click",toggleMenu);
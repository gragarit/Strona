const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () =>
{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () =>
{
  menuBtnChange();
});

window.addEventListener('scroll',  ( ) => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        })

        big_title.style.opacity = - scroll / (header_height / 2) + 1;
        shadow.style.height = `${scroll * 0.5 + 300}px`;
        
        content.style.transform = `translateY(${scroll  (section_height + sectionY.top) * 50 - 50}px)`;
})
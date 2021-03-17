const menu = document.getElementById("menu");
const burger = document.getElementById("burger");

burger.addEventListener("click", (e) => {
    const close = document.getElementById("close");
    menu.classList.remove("not-active");
    close.addEventListener("click", (event) => {
        menu.classList.add("not-active");
    })
})

window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width >= 1100){
        menu.classList.remove("not-active");
        menu.querySelector("div").classList.add("not-active");
    }
    else {
        menu.classList.add("not-active");
        menu.querySelector("div").classList.remove("not-active");
    }
})
window.addEventListener("load", () => {
    let width = window.innerWidth;
    if (width >= 1100){
        menu.classList.remove("not-active");
        menu.querySelector("div").classList.add("not-active");
    }
})
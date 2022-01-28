const MenuBtn = document.querySelector(".menuWrapper");
const Menu = document.querySelector(".Header__Menu");
const HeaderList = document.querySelectorAll(".Header__List");

MenuBtn.addEventListener("touchend",() => {
    Menu.classList.toggle("JS_Menu");
    document.querySelector(".menuButton").classList.toggle("active");
});

HeaderList[0].addEventListener("touchend", () => {
    Menu.classList.toggle("JS_Menu");
    document.querySelector(".menuButton").classList.toggle("active");
});
HeaderList[1].addEventListener("touchend", () => {
    Menu.classList.toggle("JS_Menu");
    document.querySelector(".menuButton").classList.toggle("active");
});
HeaderList[2].addEventListener("touchend", () => {
    Menu.classList.toggle("JS_Menu");
    document.querySelector(".menuButton").classList.toggle("active");
});
HeaderList[3].addEventListener("touchend", () => {
    Menu.classList.toggle("JS_Menu");
    document.querySelector(".menuButton").classList.toggle("active");
});
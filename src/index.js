import "./styles.css";
import clear from "./clear-content.js";
import loadHome from "./create-home.js";
import loadMenu from "./create-menu.js";
import loadAbout from "./create-about.js";

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
    clear();
    loadHome();
});
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    clear();
    loadMenu();
});
const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
    clear();
    loadAbout();
});

loadHome();
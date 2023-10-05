import createDinosaureCard from "./dinosaureCard.js";
import dragging from "./slide.js";
import menuBurger from "./menuBurger.js";

const loader = document.querySelector(".loader");

// let criSong = document.getElementById("volume").volume;

createDinosaureCard();
dragging();

 loading;
 window.addEventListener("load", () => {
   loader.classList.add("fondu-out");
   setTimeout(() => {
     loader.classList.add("end-animation");
   }, 2000);
 });

menuBurger();
// criSong.volume = 0.1;

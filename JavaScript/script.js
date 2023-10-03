import dinoCards from "./dinosaureCard.js";
import dragging from "./slide.js";

const criVolume = document.getElementById("audio");
const loader = document.querySelector(".loader");

dinoCards();

// loading
window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => {
    loader.classList.add("end-animation");
  }, 2000);
});

criVolume.volume = 0.1;
dragging();

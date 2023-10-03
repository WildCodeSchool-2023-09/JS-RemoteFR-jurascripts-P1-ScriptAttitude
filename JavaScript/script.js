import createDinosaureCard from "./dinosaureCard.js";
import dragging from "./slide.js";

const loader = document.querySelector(".loader");

createDinosaureCard();
dragging();

// loading
window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => {
    loader.classList.add("end-animation");
  }, 2000);
});

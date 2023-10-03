const carousel = document.querySelector(".container_card");
// const boutonRight = document.getElementById("btnRightC");
// const firstCardWidth = carousel.querySelector(".c_card").offsetWidth;

let isDraging = false,
  startX,
  startScrollLeft;

// boutonRight.addEventListener("click", () => {
//   carousel.scrollLeft += -firstCardWidth;
// });

const dragStart = (e) => {
  isDraging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDraging = false;
  carousel.classList.remove("dragging");
};

const dragging = (e) => {
  if (!isDraging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

export default dragging;

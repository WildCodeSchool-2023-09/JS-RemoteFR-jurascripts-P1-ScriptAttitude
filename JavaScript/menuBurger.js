const btnBurgerImg = document.getElementById("btnBurger");
const navBar = document.querySelector("nav");

btnBurgerImg.addEventLister("click", () => {
  navBar.className = "active";
});

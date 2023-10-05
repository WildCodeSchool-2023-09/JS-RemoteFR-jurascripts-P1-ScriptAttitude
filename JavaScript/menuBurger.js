const btnBurgerImg = document.getElementById("btnBurger");
const navBar = document.querySelector(".container_menu");
const links = document.querySelectorAll("nav li");
const btnCroixImg = document.getElementById("btnCroix");

btnBurgerImg.addEventListener("click", () => {
  navBar.classList.add("activeB");
  if (navBar.classList !== "activeB") {
    btnBurgerImg.classList.add("btnActive");
    btnCroixImg.classList.remove("btnActive");
  }
});
btnCroixImg.addEventListener("click", () => {
  navBar.classList.remove("activeB");
  btnCroixImg.classList.add("btnActive");
  btnBurgerImg.classList.remove("btnActive");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("activeB");
    btnCroixImg.classList.add("btnActive");
    btnBurgerImg.classList.remove("btnActive");
  });
});

export default menuBurger;

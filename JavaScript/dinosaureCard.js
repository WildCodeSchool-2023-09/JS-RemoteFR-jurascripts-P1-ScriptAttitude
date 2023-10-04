import dinosauresList from "./dinosauresList.js";

const dinoCards = document.getElementById("container_card");
let search = "";
let diet = "";
let attribut = "";

document.getElementById("search-list").addEventListener("input", (e) => {
  search = e.target.value.toLowerCase();
  createDinosaureCard();
});

/*document.getElementById("terrestre").addEventListener("change", (e) => {
  attribut = e.target.checked;
  createDinosaureCard();
});
document.getElementById("aquatique").addEventListener("change", (e) => {
  attribut = e.target.checked;
  createDinosaureCard();
});
document.getElementById("volant").addEventListener("change", (e) => {
  attribut = e.target.checked;
  createDinosaureCard();
});
document.getElementById("carnivore").addEventListener("click", (e) => {
  diet = e.target.click;
  createDinosaureCard();
});
document.getElementById("herbivore").addEventListener("click", (e) => {
  diet = e.target.click;
  createDinosaureCard();
});*/

const createDinosaureCard = () => {
  const dinoArray = [];
  for (let i = 0; i < dinosauresList.length; i++) {
    if (
      dinosauresList[i].diet === "carnivore" ||
      dinosauresList[i].diet === "herbivore"
    ) {
      if (
        dinosauresList[i].name.toLowerCase().includes(search) ||
        dinosauresList[i].surname.toLowerCase().includes(search) ||
        dinosauresList[i].attribut.toLowerCase().includes(search) ||
        dinosauresList[i].diet.toLowerCase().includes(search)
      ) {
        dinoArray.push(`<div class="c_card" draggable="false">
          <img class="imgAllosaurus" src="${dinosauresList[i].image}" alt="un dinosaure" />
          <p>Nom: ${dinosauresList[i].name} </p>
          <p>Type: ${dinosauresList[i].attribut}</p>
          <p>Régime: ${dinosauresList[i].diet}</p>
          <p>Description: <i>${dinosauresList[i].description}</i></p> 
           <audio id="volume" controls><source  src="${dinosauresList[i].cri}" type="audio/mp3"> </audio>
          
          </div>`);
      }
    }
  }
  dinoCards.innerHTML = dinoArray.join("");
};
export default createDinosaureCard;

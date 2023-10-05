import dinosauresList from "./dinosauresList.js";

const dinoCards = document.getElementById("container_card");
let search = "";
let diet = "all";
let attribut = "all";

document.getElementById("search-list").addEventListener("input", (e) => {
  search = e.target.value.toLowerCase();
  createDinosaureCard();
});


document.getElementById("selectP").addEventListener("change",(e)=>{
  diet = e.target.value;
  createDinosaureCard();
  
});

document.getElementById("selectS").addEventListener("change",(e)=>{
  attribut = e.target.value;
  createDinosaureCard();
  
});



const createDinosaureCard = () => {
  const dinoArray = [];
  for (let i = 0; i < dinosauresList.length; i++) {
      if(diet === "all" || dinosauresList[i].diet === diet){

    
      if(attribut === "all" || dinosauresList[i].attribut === attribut){
      
        if (
          dinosauresList[i].name.toLowerCase().includes(search) ||
          dinosauresList[i].surname.toLowerCase().includes(search) ||
          dinosauresList[i].attribut.toLowerCase().includes(search) ||
          dinosauresList[i].diet.toLowerCase().includes(search)
          ) {
            dinoArray.push(`<div class="c_card"  draggable="false">
            <div>  
            <img class="imgAllosaurus" src="${dinosauresList[i].image}" alt="un dinosaure" />
            <p>Nom: ${dinosauresList[i].name} </p>
            <p>Type: ${dinosauresList[i].attribut}</p>
            <p>Régime: ${dinosauresList[i].diet}</p>
            <p>Description: <i>${dinosauresList[i].description}</i></p> 
            </div>
            <div>
            <audio id="volume" controls><source  src="${dinosauresList[i].cri}" type="audio/mp3"> </audio>
            </div>
          </div>`);
        }
      }
    }  
    }
    dinoCards.innerHTML = dinoArray.join("");
  };
  export default createDinosaureCard;
  
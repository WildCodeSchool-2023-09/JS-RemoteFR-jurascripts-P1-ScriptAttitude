const selectButton = document.querySelectorAll(
  ".container_primary_selection button"
);
const selectCheckbox = document.querySelectorAll(".Categorie_checkbox button");
const filtrableCardsCarnivore = document.querySelectorAll(
  ".container_card_carnivore"
);
const filtrableCardsHerbivore = document.querySelectorAll(
  ".container_card_herbivore"
);
const filtrableCardsTerrestre = document.querySelectorAll(
  ".container_card_terrestre"
);
const filtrableCardsAquatique = document.querySelectorAll(
  ".container_card_aquatique"
);
const filtrableCardsVolant = document.querySelectorAll(
  ".container_card_volant"
);

// definir un fitre card en funtion
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  console.log(e.target);

  // pour les non active
  filtrableCardsCarnivore.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.diet === e.target.dataset.diet) {
      card.classList.remove("hide");
    }
  });

  filtrableCardsHerbivore.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.diet === e.target.dataset.diet) {
      card.classList.remove("hide");
    }
  });
};

const filterCardsS = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  console.log(e.target);

  filtrableCardsTerrestre.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name) {
      card.classList.remove("hide");
    }
  });
  filtrableCardsAquatique.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name) {
      card.classList.remove("hide");
    }
  });
  filtrableCardsVolant.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name) {
      card.classList.remove("hide");
    }
  });
};

selectButton.forEach((button) => button.addEventListener("click", filterCards));
selectCheckbox.forEach((Checkbox) =>
  Checkbox.addEventListener("click", filterCardsS)
);

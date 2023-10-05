const anecdoteDino = [
    {
      titre: "Le premier Dinosaure trouvé :",
      image:"https://i.goopics.net/ixk4d8.png",
      anecdote:`Le tout premier Dinosaure découvert est attribué l'Anglais
      William Buckland qui a surpris tout le monde en 1815 en disant qu'il
      avait trouvé, en Angleterre près d'Oxford, le fossile d'un reptile
      géant. Il lui donna le nom scientifique de Megalosaurus en 1824.`
    },
    {
    titre: "L’astéroïde responsable de l’extinction des Dinosaures a provoqué un énorme tsunami !",
      image:"https://i.goopics.net/tc7kce.png",
      anecdote:`Au regard des informations que l’équipe de chercheurs avait, une simulation de l’astéroïde a d’abord été effectuée sur la base d’un diamètre de 14 km et à une projection équivalente à 453 500 km/h. Selon la simulation, le cratère était de 100 km de large, et dix minutes après l’impact,
      ce gigantesque tsunami de 4 km de large et 1,5 km de haut s’est formé. Il a ravagé sur son passage
      tout le golfe du Mexique puis s’est dirigé vers l’Atlantique Nord en quelques heures.
      Peu de temps après, une vague a transpercé le golfe en allant droit vers le Pacifique sud.`
    },
    {
      titre: "Et niveau sexe ça donnait quoi ?",
      image: "https://huffpost-focus.sirius.press/2022/07/24/0/0/0/0/1024/682/60/0/359ffa5_1658670525385-5c934c9c2300003300ae6eb4.jpeg",
      anecdote:`Il faut d'abord bien comprendre que les Dinosaures avaient une "ouverture unique"
      appelée cloaque pour uriner, déféquer et se reproduire. Le même orifice unique
      qu'ont aujourd'hui les oiseaux, les reptiles, les marsupiaux, les amphibiens et
      certains poissons. Ainsi, pour s'accoupler, les dinosaures devaient appuyer
      sur leur cloaque ensemble. Pour ce "baiser cloacal", un pénis n'était pas nécessaire
      mais certains en avaient pouvant même mesurerjusqu'à 3 mètres et demi.`
    },
    {
      titre: "Le Maiasaura",
      image: "https://i.goopics.net/q2tdmf.jpg",
      anecdote:`Le Maiasaura était un dinosaure dit « bec de canard ». Il était herbivore et vivait en troupeaux qui
      pouvaient compter jusqu'à 10 000 individus. Le mot Maia fait référence à la déesse gracque Maïa, qui
      signifie « petite mère » et le mot « saura » est le féminin du mot « saurus » que l'on peut retrouver dans
      les noms de plusieurs espéces de Dinosaures comme par exemple l' « Allosaurus ». Le mot « saura » signifie
      quand à lui : lézard femelle. Son nom lui vient du fait que le Maiasaura était très proche de ses petits. Il
      est la seule espèce qui nourrissait ces petits alors qu'ils se trouvaient encore dans leurs nids, une
      première chez les dinosaures. Les recherches ont montrés que les petits du Maiasaura n'avaient pas les
      ligaments et les os des pattes totalement formés après leurs naissance, ce qu'ils les rendaient
      incapable de se déplacer pendant plusieurs mois et les rendaient aussi totalement dépendant de leurs
      parents.`

    },
    {
      titre: "21 paléontologues",
      image: "https://i.goopics.net/f8egne.png",
      anecdote:`Il était une fois, vingt et un paléontologues qui était à la recherches de squelettes de dinosaures. Le
      nom de cette équipe de choc était Jurascript. Après de longues fouilles sur plusieurs mois et trouvant
      plusieurs squelettes de plusieurs espéces différentes. Il était l'heure de rentrer sur le campus de la
      wild où des scientifique alias « les blouses blanches » pourront examiner ces squelettes dans l'espoir,
      de peut-être un jour, ramener cette espèce éteinte depuis plusieurs millions d'années, à la vie. Mais
      l'avion du retour étant dans trois semaines, il fallait qu'ils trouvent une occupation pour faire
      passer le temps. Et là ! Une idée de génie vint illuminer le professeur Benoît, « Il faut leur
      trouver des noms, avant que ce ne soit les blouses blanches qui ne le font ! Et on le sait, leurs
      intelligences n'est pas plus supérieurs que celui d'un Compsognathus. ». Voici-ci la nouvelle mission de
      nos jeunes paléontologues donné par leur professeur Benoît. Un débat débute alors pendant plusieurs
      jours. Ce débat fait rage au sein du groupe ! Il ne peut se passer une nuit sans que deux personnes
      ne se prennent la tête sous leurs tentes. Une nouvelle fois, une deuxième idée de génie vint au
      professeur Benoît « Puisque personne n'arrive à se mettre d'accord sur les noms. Je vous propose ceci,
      vous nommerez chacun une espèce et pour vous aider, vous prendrez la première lettre de votre prénom. Pour
      les espèces qui resteront, c'est moi qui les nommerai voyons, hehehehe... *s'étouffe dans son délire*. Le premier nom que
      j'ai choisi d'attribuer à celui qui est si terrifiant est le "Tyrannosaurus-rex dit T-rex".»`
    },
  ];
  


const slide = document.querySelector("#slide-anecdote");
let numero = 0;

function ChangeSlide(is0) {
    
    if (is0 && numero > 0){
    numero -= 1; 
    }
    if (!is0 && numero < anecdoteDino.length - 1){
        numero += 1;
    }
    slide.innerHTML = `<img src="${anecdoteDino[numero].image}" alt="un Megalosaurus">
    <h3>${anecdoteDino[numero].titre}</h3>
    <p>${anecdoteDino[numero].anecdote}</p>`
}

console.log(slide)
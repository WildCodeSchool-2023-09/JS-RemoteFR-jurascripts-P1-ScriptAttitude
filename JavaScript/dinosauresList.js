const dinosauresList = [
  {
    name: "Allosaurus",
    surname: "Alexendre",
    description:
      "Le dinosaure Allosaurus (Allosaure) est un énorme Carnosaure, l un des plus grands de la famille des Allosauridés, il était probablement le plus féroce prédateur du Jurassique.",
    image: "src/Dinosaures/allosaurus.jpeg",
    diet: "carnivore",
    attribut: "terrestre",
    cri: "src/asset/sound_Allosaurus.mp3",
  },
  {
    name: "Ankylosaurus",
    surname: "Alexis",
    description:
      "Un Ankylosaurus adulte mesurait environ 10 mètres de long, 1,7 mètre de haut et pesait 4 tonnes. Il était quadrupède et herbivore, muni de peu de dents ce qui indique une faible mastication. Les os du crâne et d'autres parties du corps ont fusionné afin d'augmenter leur résistance.",
    image: "src/Dinosaures/ankylosaurus.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Ankylosaurus-sounds.mp3",
  },
  {
    name: "Anhanguera",
    surname: "Alhassane",
    description:
      "Anhanguera était un animal piscivore avec une envergure d'environ 4,60 mètres. À l'instar de nombreux autres ornithochiridés, Anhanguera avait des crêtes arrondies à l'avant de ses mâchoires supérieure et inférieure, qui étaient remplies de dents coudées, coniques mais incurvées, de tailles et d'orientations variables.",
    image: "src/Dinosaures/anhanguera.jpg",
    diet: "carnivore",
    attribut: "volant",
    cri: "src/asset/anhanguera_sounds.mp3",
  },
  {
    name: "Cératosaurus",
    surname: "Calypso",
    description:
      "Ceratosaurus mesurait six mètres de long pour trois de haut et pesait environ 800 kg ; pour l'époque, c'était un prédateur de taille moyenne. L'espèce africaine C. ingens comportait peut-être des individus plus imposants, atteignant cinq tonnes, ce qui en ferait l'un des plus gros théropodes.",
    image: "src/Dinosaures/Ceratosaurus.jpeg",
    diet: "carnivore",
    attribut: "terrestre)",
    cri: "src/asset/Ceratosaurus_sounds.mp3",
  },
  {
    name: "",
    surname: "Christopher",
    description: "",
    image: "",
    diet: "",
    attribut: "",
    cri: "",
  },
  {
    name: "Cryptoclidus",
    surname: "Cedric",
    description:
      "Cryptoclidus était un plésiosaure de taille moyenne (environ 5,5 m pour 1 tonne).La conformation fragile de la tête et des dents interdit une morsure puissante et suggère un régime alimentaire à base de petits poissons ou d'animaux à corps mou tels que les calmars. Cryptoclidus a peut-être utilisé ses longues dents entremêlées pour capturer de petites proies par filtration de l'eau ou tamisage de sédiments.",
    image: "src/Dinosaures/cryptoclidus.png",
    diet: "herbivore",
    attribut: "aquatique",
    cri: "src/asset/Cryptocleidus-sound.mp3",
  },
  {
    name: "Centrosaure",
    surname: "Charles",
    description:
      "Centrosaurus mesurait 6 mètres de long, 2 mètres de haut et pesait 1,5 tonne. Il ne possédait qu'une seule corne, sur le museau, corne qui pouvait pointer autant vers l'avant que l'arrière ; la courbure de la corne est une caractéristique propre à chaque individu, tout comme le motif de rayures chez le zèbre. ",
    image: "src/Dinosaures/Centrosaurus.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/centrosaurus-sound.mp3",
  },
  {
    name: "Dimorphodon",
    surname: "Didier",
    description:
      "Dimorphodon est un genre éteint de ptérosaures, appartenant à la famille des Dimorphodontidae et vivant au Jurassique inférieur. Il avait un bec inhabituel rappelant celui d'un macareux.",
    image: "src/Dinosaures/dimorphodon.png",
    diet: "carnivore",
    attribut: "volant",
    cri: "src/asset/Dimorphodon_sounds.mp3",
  },
  {
    name: "Fabrosaurus",
    surname: "Frédéric",
    description:
      "Fabrosaurus était un genre de dinosaure herbivore qui a vécu au Jurassique inférieur (Hettangien à Sinémurien il y a entre 199 à 189 millions d'années. Le seul reste fossile connu de celui-ci est un morceau de mandibule avec trois dents, Fabrosaurus est un nomen dubium et serait peut-être synonyme de Lesothosaurus.",
    image: "src/Dinosaures/fabrosaurus.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Fabrosaurus_sounds.mp3",
  },
  {
    name: "Jainosaurus",
    surname: "Jean-Louis",
    description:
      "Jainosaurus est un genre éteint de dinosaures sauropodes, un de titanosaure du Crétacé inférieur découvert en Inde et ailleurs en Asie. Il aurait atteint une longueur de 18 mètres et une hauteur de six mètres à l'âge adulte.",
    image: "src/Dinosaures/Jainosaurus.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Jainosaurus_sounds.mp3",
  },
  {
    name: "Jobaria",
    surname: "Jordan",
    description:
      "Jobaria est un genre éteint de grands dinosaures sauropodes eusauropodes.Quadrupède, il pouvait aussi se tenir debout sur ses pattes postérieures. Il possédait 12 vertèbres cervicales, un cou assez court pour un sauropode et des dents larges en forme de ciseaux. C'est l'un des sauropodes les mieux connus car on a retrouvé plusieurs squelettes d'animaux adultes et juvéniles (on a rassemblé en tout 95 % d'un squelette complet).",
    image: "src/Dinosaures/jobaria.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Jobaria_sound.mp3",
  },
  {
    name: "Kronosaurus",
    surname: "Kevin",
    description:
      "Comme les autres pliosaures, Kronosaurus était un reptile marin. Il a une tête allongée, un cou court, un corps rigide propulsé par quatre nageoires et une queue relativement courte. Les nageoires postérieures auraient été plus grandes que les antérieures. Kronosaurus était carnivore et possède de nombreuses dents longues, pointues et coniques.",
    image: "src/Dinosaures/Kronosaurus.png",
    diet: "carnivore",
    attribut: "aquatique",
    cri: "src/asset/Kronosaurus-sounds.mp3",
  },
  {
    name: "Mosasaurus",
    surname: "Maxence",
    description:
      "Mosasaurus est un type de mosasaure dérivé ou tardif ayant des traits évolutifs avancés tels qu'un mode de vie entièrement aquatique. En tant que tel, il a un corps profilé, une queue allongée se terminant par un repli supportant une nageoire à deux lobes et deux paires de palettes natatoires. Dans les premières descriptions scientifiques les concernant, les mosasaures dérivés étaient décrits comme des serpents marins géants à nageoires.",
    image: "src/Dinosaures/mosasaurus.png",
    diet: "carnivore",
    attribut: "aquatique",
    cri: "src/asset/Mosasaurus-sound.mp3",
  },
  {
    name: "Espèce éteinte",
    surname: "Nicolas",
    description: "",
    image: "src/Dinosaures/squelette_de_dinosaure.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/.mp3",
  },
  {
    name: "Protocératops",
    surname: "Paul",
    description:
      "Le Protoceratops mesurait 2 mètres de long et pesait 150 kilos. Contrairement aux espèces qui lui succédèrent, ou du moins qui lui sont relatives, il ne présente aucune corne bien développée sur sa tête ; il a tout juste une excroissance osseuse sur le museau, excroissance qui se développera en corne chez ses successeurs. ",
    image: "src/Dinosaures/Protoceratops.jpg",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Protoceratops-sounds.mp3",
  },
  {
    name: "Ptéranodon",
    surname: "Prasanna",
    description:
      "Pteranodon mesurait 7 mètres d'envergure et pesait 25 kilos. À la différence de plus anciens ptérosaures, comme Rhamphorhynchus ou Pterodactylus, le ptéranodon était dépourvu de dents, avait la queue atrophiée et des os creux, très légers et souples, mais renforcés par un réseau interne de longerons.",
    image: "src/Dinosaures/Pteranodon.jpg",
    diet: "carnivore",
    attribut: "volant",
    cri: "src/asset/Pteranodon_sound.mp3",
  },
  {
    name: "Spinosaure",
    surname: "Nelson",
    description:
      "Spinosaurus est un animal au museau long et étroit portant une rangée sigmoïde de dents coniques. Les scientifiques s'accordent à dire que les Spinosauridae comme Spinosaurus, qui possèdent un crâne crocodiliforme, furent des animaux au moins partiellement piscivores, capable de se nourrir également d'autres proies comme de jeunes dinosaures et des ptérosaures.",
    image: "src/Dinosaures/Spinosaurus.png",
    diet: "carnivore",
    attribut: "terrestre",
    cri: "src/asset/Spinosaurus-sounds.mp3",
  },
  {
    name: "Stegosaurus",
    surname: "Sandrine",
    description:
      "Le stégosaure pouvait mesurer jusqu'à 9 mètres de long, 4 mètres de haut et peser jusqu'à 3 tonnes. Bien que le stégosaure soit un gros animal, par rapport à la taille moyenne actuelle des espèces terrestres, il est plutôt petit par rapport à ses contemporains les sauropodes géants.",
    image: "src/Dinosaures/stegosaure.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Stegosaurus_sounds.mp3",
  },
  {
    name: "Stenopterygius",
    surname: "Suzy",
    description:
      "Le mode de vie de Stenopterygius était similaire à celui de nos dauphins actuels. Il devait passer la plus grande partie de sa vie au milieu de l'océan dans les eaux profondes où il chassait des poissons, des céphalopodes et d'autres animaux du milieu aquatique.",
    image: "src/Dinosaures/Stenopterygius.png",
    diet: "carnivore",
    attribut: "aquatique",
    cri: "src/asset/Stenopterygius _sounds.mp3",
  },
  {
    name: "Tyrannosaurus",
    surname: "Benoît",
    description:
      "Tyrannosaurus rex est l'un des plus grands carnivores ayant vécu sur Terre. Le plus grand spécimen complet (mais pas le plus grand spécimen) découvert à ce jour,Comme chez les autres théropodes, le cou du T. rex forme une courbe en forme de « S » afin de maintenir la tête au-dessus du corps, mais il est particulièrement court et musculeux afin de supporter la tête massive. Les bras sont courts et se terminent par deux doigts",
    image: "src/Dinosaures/t-rex.jpeg",
    diet: "carnivore",
    attribut: "terrestre",
    cri: "src/asset/T-rex_sound.mp3",
  },
  {
    name: "Vélociraptor",
    surname: "Valentin",
    description:
      "Velociraptor est un droméosauridé de taille petite, les adultes mesurant entre 1,5 et 2,07 m de long pour environ 50 cm de haut au niveau des hanches.Des boutons de piquant proéminents, servant de fixation des plumes « d'aile » et indicateur direct d'un revêtement de plumes, ont été signalés sur l'ulna d'un seul spécimen de Velociraptor , qui représente un animal d'environ 1,5 m de long et de 15 kg en poids. ",
    image: "src/Dinosaures/Velociraptor.png",
    diet: "carnivore",
    attribut: "terrestre",
    cri: "src/asset/Velociraptor_sounds.mp3",
  },
  {
    name: "Xiaosaurus",
    surname: "Xavier",
    description:
      "Xiaosaurus est un genre éteint de petit dinosaure ornithischien bipède et herbivore du clade des Genasauria.A partir d'un fémur de 11 centimètres de long, la taille de l'animal a été estimée à environ 1 mètre.",
    image: "src/Dinosaures/Xiaosaurus.png",
    diet: "herbivore",
    attribut: "terrestre",
    cri: "src/asset/Xiaosaurus_sounds.mp3",
  },
];
export default dinosauresList;

const commonWords = [
  "a",
  "afin",
  "ah",
  "ai",
  "aie",
  "aient",
  "aies",

  "ainsi",
  "ait",

  "allo",
  "allons",
  "allô",
  "alors",
  "apres",
  "après",
  "as",
  "assez",

  "au",
  "aucun",
  "aucune",
  "aucuns",

  "aupres",
  "auquel",
  "aura",
  "aurai",

  "aurais",
  "aurait",
  "auras",
  "aurez",
  "auriez",

  "aurons",
  "auront",
  "aussi",
  "autant",
  "autre",

  "autres",
  "autrui",
  "aux",

  "avais",
  "avait",
  "avant",
  "avec",
  "avez",
  "aviez",
  "avions",
  "avoir",
  "avons",
  "ayant",
  "ayez",
  "ayons",
  "b",
  "bah",
  "bas",
  "bien",
  "bon",
  "c",
  "car",
  "ce",
  "ceci",
  "cela",
  "celle",
  "celles",
  "celui",
  "celà",
  "cent",
  "ces",
  "cet",
  "cette",
  "ceux",
  "chacun",

  "chaque",
  "cher",
  "chers",
  "chez",
  "ci",
  "comme",

  "d",
  "da",
  "dans",
  "de",
  "deja",
  "depuis",
  "des",

  "dessus",

  "devant",
  "devers",
  "devra",

  "dire",
  "dit",
  "dite",
  "dits",
  "divers",

  "doit",

  "donc",
  "dont",
  "du",
  "duquel",
  "durant",
  "dès",
  "début",
  "e",
  "eh",
  "elle",
  "elles",
  "en",
  "encore",
  "enfin",
  "entre",
  "envers",

  "es",
  "essai",
  "est",
  "et",
  "etant",
  "etc",
  "etre",
  "eu",
  "eue",
  "eues",
  "euh",
  "eurent",
  "eus",
  "eusse",

  "eusses",

  "eut",
  "eux",

  "eûmes",
  "eût",
  "eûtes",
  "f",
  "fais",

  "fait",
  "faites",
  "façon",
  "feront",
  "fi",
  "flac",
  "floc",
  "fois",
  "font",
  "force",
  "furent",
  "fus",
  "fusse",

  "fusses",

  "fut",
  "fûmes",
  "fût",
  "fûtes",
  "g",
  "gens",
  "h",
  "ha",
  "haut",
  "hein",
  "hem",
  "hep",
  "hi",
  "ho",
  "holà",
  "hop",
  "hormis",
  "hors",
  "hou",
  "houp",
  "hue",
  "hui",
  "huit",

  "hum",
  "hurrah",
  "hé",
  "hélas",
  "i",
  "ici",
  "il",
  "ils",

  "j",
  "je",
  "jusqu",
  "jusque",
  "juste",
  "k",
  "l",
  "la",

  "las",
  "le",
  "lequel",
  "les",

  "leur",
  "leurs",

  "lors",

  "lui",

  "là",
  "lès",
  "m",
  "ma",
  "maint",

  "mais",
  "malgre",
  "malgré",

  "me",
  "meme",
  "memes",
  "merci",
  "mes",
  "mien",
  "mienne",

  "miens",
  "mille",
  "mince",
  "mine",

  "moi",

  "moins",
  "mon",
  "mot",

  "même",
  "mêmes",
  "n",
  "na",

  "ne",

  "neuf",

  "ni",

  "nommés",
  "non",
  "nos",

  "notre",
  "nous",

  "nul",

  "nôtre",
  "nôtres",
  "o",
  "oh",
  "ohé",
  "ollé",
  "olé",
  "on",
  "ont",

  "ore",
  "ou",
  "ouf",
  "ouias",
  "oust",
  "ouste",
  "outre",
  "ouvert",

  "où",
  "p",
  "par",
  "parce",

  "parle",

  "parler",
  "parmi",
  "parole",

  "pas",
  "passé",

  "pense",
  "permet",

  "peu",
  "peut",

  "peux",
  "pff",
  "pfft",
  "pfut",
  "pif",
  "pire",
  "pièce",
  "plein",

  "plus",

  "plutôt",

  "pouah",
  "pour",

  "pres",

  "proche",
  "près",
  "psitt",
  "pu",
  "puis",

  "pur",
  "pure",
  "q",
  "qu",
  "quand",
  "quant",

  "quanta",

  "quatre",

  "que",
  "quel",

  "quelle",

  "quels",
  "qui",

  "quinze",
  "quoi",

  "r",
  "rare",

  "rares",

  "rend",
  "rendre",

  "reste",

  "retour",

  "rien",
  "s",
  "sa",

  "sait",
  "sans",

  "sauf",
  "se",
  "sein",
  "seize",
  "selon",

  "semble",

  "sent",
  "sept",

  "sera",
  "serai",

  "serais",
  "serait",
  "seras",
  "serez",
  "seriez",

  "serons",
  "seront",
  "ses",
  "seul",
  "seule",

  "si",
  "sien",
  "sienne",

  "siens",
  "sinon",
  "six",

  "soi",

  "soient",
  "sois",
  "soit",

  "sommes",
  "son",
  "sont",
  "sous",

  "soyez",
  "soyons",

  "stop",

  "suffit",
  "suis",
  "suit",
  "sur",

  "t",
  "ta",
  "tac",
  "tandis",
  "tant",

  "te",
  "tel",
  "telle",

  "telles",
  "tels",
  "tenant",
  "tend",
  "tenir",
  "tente",
  "tes",
  "tic",
  "tien",
  "tienne",

  "tiens",
  "toc",
  "toi",

  "ton",

  "tous",
  "tout",
  "toute",

  "toutes",
  "tres",

  "trop",
  "très",
  "tu",
  "té",
  "u",
  "un",
  "une",
  "unes",

  "unique",

  "uns",
  "v",
  "va",
  "vais",
  "valeur",
  "vas",
  "vers",
  "via",
  "vif",
  "vifs",
  "vivat",
  "vive",
  "vives",
  "vlan",
  "voici",
  "voie",
  "voient",
  "voilà",
  "voire",
  "vont",
  "vos",
  "votre",
  "vous",

  "vu",
  "vé",
  "vôtre",
  "vôtres",
  "w",
  "x",
  "y",
  "z",
  "zut",
  "à",
  "â",
  "ça",
  "ès",

  "étais",
  "était",
  "étant",
  "état",
  "étiez",
  "étions",
  "été",
  "étée",
  "étées",
  "étés",
  "êtes",
  "être",
  "ô",
];
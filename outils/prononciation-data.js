// ============================================================
// EXERCICES DE PRONONCIATION — d'après le Reference Booklet (CPGE B/L)
// ============================================================
// Chaque exercice propose une liste de mots/phrases à écouter
// (synthèse vocale du navigateur) puis à répéter (reconnaissance
// vocale du navigateur, si disponible). "lang" force l'accent
// utilisé pour la synthèse vocale (en-GB par défaut).
// ============================================================

const PRONUNCIATION_SECTIONS = [
  { id: "intonation", title: "1. L'intonation", exercises: [
    { code: "1A", title: "Rythme accentuel", instructions: "Le rythme de l'anglais est accentuel : la succession de syllabes accentuées donne son rythme à la phrase. Écoutez et répétez en sentant ce rythme.",
      items: ["Most children would have cried.", "It was a long, hot day.", "Jill will wait for twenty minutes."] },
    { code: "1B", title: "Forme réduite des mots grammaticaux", instructions: "Les mots grammaticaux (articles, auxiliaires, prépositions) sont souvent peu prononcés dans la phrase. Écoutez à quel point ils sont réduits.",
      items: ["Could your father lend us his camera?", "They were punished for cheating in the exam.", "The children have finished with their drawings.", "I was waiting for him at my office."] },
    { code: "1C", title: "Intonation descendante", instructions: "À la fin d'une affirmation, l'intonation doit descendre pour exprimer l'achèvement (ne pas monter systématiquement, ce qui donne une impression de manque de confiance).",
      items: ["Chicago will be the perfect place for you.", "Missouri is less exciting than Oregon.", "Seattle has quite a large pedestrian zone.", "Vermont is less conservative than New Hampshire."] }
  ]},

  { id: "consonnes", title: "2. Les sons consonnes", exercises: [
    { code: "2A", title: "Le son de /TH/", instructions: "Placez le bout de la langue sur les incisives du haut. [θ] sans faire vibrer les cordes vocales, [ð] en les faisant vibrer.",
      items: ["thief", "thread", "three", "mouth", "bath", "lethal", "panther", "the", "this", "that", "these", "those", "there", "thus", "although", "whether"] },
    { code: "2B", title: "Paires minimales /TH/", instructions: "Travaillez la différence entre /TH/ et les sons proches [f], [s], [d], [t].",
      items: ["fin", "thin", "first", "thirst", "for", "thaw", "face", "faith", "force", "fourth", "sick", "thick", "day", "they", "dan", "than", "kit", "kith", "till", "thrill", "torn", "thorn"] },
    { code: "2C", title: "Terminaison -ED : [id]", instructions: "Si le verbe se termine par T ou D, -ED se prononce [id].",
      items: ["started", "ended", "hated", "guarded", "attempted", "exploded", "acted", "provided"] },
    { code: "2C2", title: "Terminaison -ED : [t] ou [d]", instructions: "Dans les autres cas, -ED se prononce [t] ou [d] (le plus facile à enchaîner).",
      items: ["worked", "missed", "fixed", "liked", "stopped", "noticed", "cleaned", "played", "used", "allowed", "pulled", "argued"] },
    { code: "2D", title: "K et P muets en début de mot", instructions: "Dans /KN/, le [k] ne se prononce pas. Dans /PN/ et /PS/, le [p] ne se prononce pas.",
      items: ["knee", "knight", "knife", "knock", "know", "pneumatic", "pneumonia", "psychology", "psychiatrist"] },
    { code: "2E", title: "L muet dans -OULD", instructions: "Dans ces trois mots, le L ne se prononce pas.",
      items: ["should", "would", "could"] },
    { code: "2F", title: "CH prononcé [k]", instructions: "Certains mots d'origine grecque ont un CH qui se prononce [k].",
      items: ["anarchy", "hierarchy", "monarchy", "architect", "archive", "chemist", "ache", "chaos", "choir"] },
    { code: "2G", title: "Différence entre CH et SH", instructions: "CH se prononce généralement [tʃ], SH se prononce [ʃ].",
      items: ["cheers", "shears", "chin", "shin", "chock", "shock", "chore", "shore", "which", "wish"] },
    { code: "2H", title: "Le son [h]", instructions: "Ce son (expulsion d'air) n'existe pas en français. Attention aux exceptions muettes : heir, honour, hour, honest.",
      items: ["high", "eye", "hit", "it", "hive", "I've", "hold", "old", "hate", "eight", "hear", "ear", "Happy bees harvest honey.", "The hero helps the homeless.", "Human behaviour is incomprehensible.", "The hungry man ate the whole hamburger."] },
    { code: "2I", title: "Le son [r]", instructions: "Le [r] anglais s'approche des dents du haut de la lèvre du bas ; attention à ne pas faire un [w].",
      items: ["collect", "correct", "glamour", "grammar", "glass", "grass", "lace", "race", "lane", "rain", "rage", "wage", "raid", "weighed", "rail", "whale", "rate", "weight", "red", "wed"] }
  ]},

  { id: "voyelles", title: "3. Les sons voyelles", exercises: [
    { code: "3A", title: "Règle du E muet", instructions: "Voyelle-Consonne-E muet : la voyelle se prononce souvent comme la lettre de l'alphabet correspondante.",
      items: ["take", "date", "debate", "these", "scene", "trapeze", "life", "mine", "unite", "advise", "home", "hope", "note", "tune", "cute", "amuse"] },
    { code: "3B", title: "Voyelle courte vs voyelle longue", instructions: "Il faut bien marquer la différence entre un son voyelle court et un son long.",
      items: ["ship", "sheep", "bit", "beat", "itch", "each", "hid", "heed", "ill", "eel", "bold", "balled", "cod", "cord", "not", "nought", "badge", "barge", "hack", "hark", "lad", "lard"] },
    { code: "3C", title: "/AW/ et /AU/", instructions: "Ces graphies se prononcent avec la voyelle longue [ɔː], comme dans port.",
      items: ["draw", "saw", "jaw", "fraud", "cause", "launch", "author", "law"] },
    { code: "3D", title: "/-OUGH/", instructions: "Pas de règle fixe : à apprendre par cœur, avec des similitudes grammaticales.",
      items: ["bought", "brought", "fought", "thought", "although", "though", "enough", "rough", "tough", "through", "borough", "thorough"] },
    { code: "3E", title: "Diphtongue [oʊ]", instructions: "Travaillez la différence entre [oʊ] et les sons proches [ɒ] et [ɔː].",
      items: ["cost", "coast", "non", "known", "odd", "owed", "rot", "wrote", "chose", "chores", "close", "claws", "go", "gore", "know", "nor", "low", "law"] },
    { code: "3F", title: "Diphtongue [aʊ]", instructions: "Différenciez [oʊ] et [aʊ].",
      items: ["hoe", "how", "known", "noun", "load", "loud", "phoned", "found", "road", "rowed"] },
    { code: "3G", title: "Terminaison -URE", instructions: "-URE n'est pas accentué : ne pas prononcer le [u] français.",
      items: ["nature", "picture", "lecture", "structure", "scripture", "adventure", "caricature"] },
    { code: "3H", title: "Terminaisons -AGE et -ACE", instructions: "Souvent non accentuées, elles ne se prononcent pas avec une diphtongue.",
      items: ["image", "passage", "village", "courage", "average", "message", "encourage", "menace", "surface"] },
    { code: "3I", title: "Terminaison -ATE", instructions: "Verbe : souvent [eɪ]. Nom/adjectif : souvent [ə] ou court (sauf debate).",
      items: ["separate", "accelerate", "participate", "chocolate", "climate", "senate", "debate"] },
    { code: "3J", title: "Terminaison -INE", instructions: "Trois prononciations possibles, pas de règle fixe.",
      items: ["mine", "undermine", "divine", "discipline", "doctrine", "engine", "feminine", "machine", "routine", "magazine", "vaccine", "submarine"] },
    { code: "3K", title: "-E final prononcé [i]", instructions: "Mots empruntés à d'autres langues, avec un E final prononcé [i].",
      items: ["Chile", "recipe", "catastrophe", "epitome", "hyperbole", "karaoke"] },
    { code: "3L", title: "Deux voyelles à la suite", instructions: "Avec l'accent sur la première voyelle, elle se prononce souvent comme la lettre de l'alphabet.",
      items: ["chaos", "bias", "lion", "client", "poem", "duo"] },
    { code: "3M", title: "Lettre Y en fin de mot", instructions: "1 syllabe : souvent /aɪ/. Plusieurs syllabes : souvent /iː/.",
      items: ["my", "try", "sky", "why", "dry", "buy", "city", "family", "easy", "company"] }
  ]},

  { id: "accent-mot", title: "4. L'accent de mot", exercises: [
    { code: "4A", title: "Syllabes non accentuées", instructions: "Sur les mots longs accentués sur la 1ère syllabe, les autres syllabes sont peu prononcées.",
      items: ["Wednesday", "comfortable", "vegetable", "chocolate", "desperate", "separate", "dictionary", "secretary", "temperature", "literature", "interesting", "restaurant", "average", "different", "business"] },
    { code: "4B", title: "Accent sur les mots de 2 syllabes", instructions: "Tendance à l'accent sur la 1ère syllabe, sauf si elle est à l'origine un préfixe.",
      items: ["window", "garden", "marry", "borrow", "arrest", "disgrace", "reform", "belong", "oppose"] },
    { code: "4C", title: "Paires Nom/Verbe de 2 syllabes", instructions: "Le verbe est accentué sur la 2e syllabe, le nom sur la 1ère.",
      items: ["conflict", "contrast", "insult", "permit", "progress", "rebel", "suspect"] },
    { code: "4D", title: "Effet des suffixes sur l'accent", instructions: "Certains suffixes déplacent l'accent de mot.",
      items: ["policy", "political", "politician", "democrat", "democracy", "democratic"] },
    { code: "4E", title: "Suffixes qui portent l'accent", instructions: "Ces suffixes prennent automatiquement l'accent de mot.",
      items: ["affair", "millionaire", "employee", "referee", "engineer", "volunteer", "Japanese", "Chinese", "grotesque", "picturesque", "unique", "technique", "taboo", "tattoo", "balloon", "cartoon", "thirteen", "fourteen"] },
    { code: "4F", title: "Suffixes : accent sur la syllabe précédente", instructions: "Ces terminaisons placent l'accent juste avant elles.",
      items: ["classic", "republic", "political", "critical", "acquisition", "activity", "anxiety", "personify", "politician", "librarian", "industrial", "usual", "courageous", "mysterious", "comprehensible", "exclusive", "positive", "democracy", "analogy"] },
    { code: "4G", title: "Suffixes sans effet sur l'accent", instructions: "Les suffixes grammaticaux et certains suffixes nominaux ne déplacent pas l'accent.",
      items: ["actual", "actually", "happy", "happiness", "hope", "hopeful"] }
  ]},

  { id: "liaisons", title: "5. Les liaisons", exercises: [
    { code: "5A", title: "Liaison consonne-voyelle", instructions: "Un mot finissant par une consonne se lie au mot suivant s'il commence par une voyelle.",
      items: ["like it", "watch out", "some of", "pass over", "men ate", "move on", "bag of"] },
    { code: "5B", title: "R-linking", instructions: "Le R final, même muet isolément, se prononce et se lie si le mot suivant commence par une voyelle.",
      items: ["Never again.", "You know I really like my mother in law.", "Have you been to the Tower of London?", "You've got something in your eye."] },
    { code: "5C", title: "Intrusion d'un son consonne", instructions: "On ajoute parfois un son (/j/, /w/, /r/) entre deux sons voyelle pour faciliter la liaison.",
      items: ["The idea of yours.", "The other.", "Two eggs."] },
    { code: "5D", title: "Élision d'un son consonne", instructions: "On supprime parfois un son consonne final (souvent /t/ ou /d/) devant un son consonne peu compatible.",
      items: ["Don't worry about it.", "I'm just kidding.", "We've been best friends forever.", "You must be joking."] }
  ]}
];

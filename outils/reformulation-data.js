// ============================================================
// REFORMULATION DE PROBLEMATIQUES — Méthode de l'essai
// ============================================================
// Banque de questions type épreuve d'expression écrite (SciencesPo / BCE),
// portant sur des sujets de société et d'actualité. Pour chaque question,
// l'élève doit choisir la reformulation qui garde exactement le même sens
// tout en changeant le vocabulaire et la structure — les autres choix sont
// soit trop proches de la formulation d'origine, soit changent le sens,
// soit ne sont pas formulés comme une question. "correct" est l'indice
// (à partir de 0) du bon choix.
// ============================================================

const REFORMULATION_BANK = [
  {
    question: "Should social media platforms be held responsible for the content they host?",
    choices: [
      "To what extent ought social media companies to answer for what is published on their platforms?",
      "Should social media platforms be held accountable for what they host?",
      "Should social media platforms be banned from hosting controversial content?",
      "Social media platforms should be held responsible for the content they host."
    ],
    correct: 0,
    explanation: "Le choix 1 garde exactement le sens mais change le vocabulaire et la structure (« to what extent... answer for »). Le choix 2 reformule à peine la phrase d'origine. Le choix 3 déplace la question vers l'interdiction de contenus. Le choix 4 est une affirmation, pas une question."
  },
  {
    question: "Is economic growth still a valid measure of a country's success?",
    choices: [
      "Is economic growth still a good measure of a country's success?",
      "Can GDP still be considered a reliable indicator of a nation's progress?",
      "Should countries pursue economic growth at any cost?",
      "Economic growth is no longer a valid measure of a country's success."
    ],
    correct: 1,
    explanation: "Le choix 2 reformule entièrement : « GDP » pour « economic growth », « reliable indicator » pour « valid measure », « nation's progress » pour « country's success ». Le choix 1 est trop proche de l'original. Le choix 3 change la question. Le choix 4 est une affirmation."
  },
  {
    question: "Does immigration threaten national identity?",
    choices: [
      "Immigration threatens national identity.",
      "Does immigration pose a threat to national identity?",
      "Should immigration be restricted to protect national culture?",
      "Is it accurate to see immigration as a danger to a country's sense of identity?"
    ],
    correct: 3,
    explanation: "Le choix 4 garde le même sens avec un nouveau vocabulaire (« a danger to a country's sense of identity »). Le choix 2 change à peine l'original. Le choix 3 pose la question de la restriction de l'immigration, ce qui est différent. Le choix 1 est une affirmation."
  },
  {
    question: "Can democracy survive the rise of populism?",
    choices: [
      "Is democratic government under real threat from populist movements?",
      "Can democracy withstand the rise of populism?",
      "Is populism a legitimate response to the failures of democracy?",
      "Democracy cannot survive the rise of populism."
    ],
    correct: 0,
    explanation: "Le choix 1 reformule entièrement (« democratic government », « under real threat from populist movements »). Le choix 2 ne change qu'un verbe. Le choix 3 change complètement le sens. Le choix 4 est une affirmation, qui de plus présuppose la réponse."
  },
  {
    question: "Should university education be free for everyone?",
    choices: [
      "Should university education be free for all?",
      "University education should be free for everyone.",
      "Should university admissions be based purely on merit?",
      "Ought higher education to be made accessible to all at no cost?"
    ],
    correct: 3,
    explanation: "Le choix 4 utilise un vocabulaire entièrement différent (« higher education », « accessible to all at no cost »). Le choix 1 est presque identique à l'original. Le choix 3 porte sur l'admission, pas sur le coût. Le choix 2 est une affirmation."
  },
  {
    question: "Is technology making us more isolated?",
    choices: [
      "Technology is making us more isolated.",
      "Should we limit children's access to technology?",
      "Is technology making people more isolated?",
      "Does the growing use of digital technology weaken our real-life social ties?"
    ],
    correct: 3,
    explanation: "Le choix 4 reconstruit entièrement la phrase en gardant la même idée. Le choix 3 ne change que « us » en « people ». Le choix 2 déplace la question vers une politique concernant les enfants. Le choix 1 est une affirmation."
  },
  {
    question: "Should the death penalty be abolished worldwide?",
    choices: [
      "Does the death penalty effectively deter crime?",
      "Should the death penalty be abolished across the world?",
      "Is capital punishment a practice that should be ended everywhere?",
      "The death penalty should be abolished worldwide."
    ],
    correct: 2,
    explanation: "Le choix 3 reformule entièrement (« capital punishment », « a practice that should be ended everywhere »). Le choix 2 est presque la même phrase. Le choix 1 porte sur l'effet dissuasif, ce qui est différent. Le choix 4 est une affirmation."
  },
  {
    question: "Is the gap between rich and poor a threat to social stability?",
    choices: [
      "Is the gap between the rich and the poor a threat to social stability?",
      "Does rising inequality endanger the cohesion of society?",
      "Should governments redistribute wealth more aggressively?",
      "The gap between rich and poor is a threat to social stability."
    ],
    correct: 1,
    explanation: "Le choix 2 remplace tous les termes clés (« rising inequality », « endanger the cohesion of society »). Le choix 1 ne fait qu'ajouter des articles. Le choix 3 porte sur la redistribution, une question différente. Le choix 4 est une affirmation."
  },
  {
    question: "Should governments regulate artificial intelligence more strictly?",
    choices: [
      "Is tighter regulation of AI necessary to prevent its potential harms?",
      "Should governments regulate AI more strictly?",
      "Will artificial intelligence eventually replace human workers?",
      "Governments should regulate artificial intelligence more strictly."
    ],
    correct: 0,
    explanation: "Le choix 1 utilise une nouvelle structure et un nouveau vocabulaire (« tighter regulation », « necessary to prevent its potential harms »). Le choix 2 ne fait qu'abréger l'original. Le choix 3 est une question sans rapport, sur l'emploi. Le choix 4 est une affirmation."
  },
  {
    question: "Is freedom of speech being threatened by political correctness?",
    choices: [
      "Freedom of speech is being threatened by political correctness.",
      "Is free speech being threatened by political correctness?",
      "Should offensive language be banned in public life?",
      "Does the growing sensitivity around language limit our ability to speak freely?"
    ],
    correct: 3,
    explanation: "Le choix 4 garde le sens en changeant tous les termes (« growing sensitivity around language », « limit our ability to speak freely »). Le choix 2 change à peine la formulation. Le choix 3 change de sujet vers l'interdiction du langage. Le choix 1 est une affirmation."
  },
  {
    question: "Can climate change be tackled without limiting economic growth?",
    choices: [
      "Climate change can be tackled without limiting economic growth.",
      "Can climate change be addressed without limiting economic growth?",
      "Should economic growth be abandoned altogether to save the planet?",
      "Is it possible to address the climate crisis while still pursuing economic expansion?"
    ],
    correct: 3,
    explanation: "Le choix 4 reconstruit toute la phrase (« the climate crisis », « pursuing economic expansion »). Le choix 2 ne fait que remplacer « tackled » par « addressed ». Le choix 3 suppose qu'il faudrait abandonner la croissance, ce qui est une affirmation différente. Le choix 1 est une affirmation."
  },
  {
    question: "Should voting be made compulsory?",
    choices: [
      "Voting should be made compulsory.",
      "Does voter turnout affect the legitimacy of elections?",
      "Should voting be compulsory?",
      "Ought citizens to be legally required to vote?"
    ],
    correct: 3,
    explanation: "Le choix 4 utilise une formulation entièrement nouvelle (« ought citizens », « legally required to vote »). Le choix 3 ne fait que supprimer un mot. Le choix 2 porte sur la participation et la légitimité, une question différente. Le choix 1 est une affirmation."
  },
  {
    question: "Is the nuclear family model becoming obsolete?",
    choices: [
      "Is the nuclear family becoming obsolete?",
      "Should governments support single-parent families more?",
      "The nuclear family model is becoming obsolete.",
      "Is the traditional nuclear family losing its relevance in today's society?"
    ],
    correct: 3,
    explanation: "Le choix 4 reformule entièrement (« traditional », « losing its relevance », « in today's society »). Le choix 1 ne fait que supprimer « model ». Le choix 2 change vers une question de politique publique. Le choix 3 est une affirmation."
  },
  {
    question: "Does globalization benefit developing countries?",
    choices: [
      "Globalization benefits developing countries.",
      "Have developing nations genuinely gained from globalization?",
      "Does globalization benefit poorer countries?",
      "Should developing countries close their markets to foreign trade?"
    ],
    correct: 1,
    explanation: "Le choix 2 reformule entièrement (« developing nations », « genuinely gained from »). Le choix 3 ne change qu'un adjectif. Le choix 4 porte sur la fermeture des marchés, une question différente. Le choix 1 est une affirmation."
  },
  {
    question: "Should the media be more heavily regulated to fight fake news?",
    choices: [
      "The media should be more heavily regulated to fight fake news.",
      "Should the media be more strictly regulated to combat fake news?",
      "Are social media platforms responsible for the spread of fake news?",
      "Is stricter regulation of the press necessary to curb the spread of misinformation?"
    ],
    correct: 3,
    explanation: "Le choix 4 remplace tous les termes clés (« the press », « curb the spread of misinformation »). Le choix 2 ne fait que remplacer des synonymes. Le choix 3 porte sur la responsabilité, un angle différent. Le choix 1 est une affirmation."
  },
  {
    question: "Is meritocracy a myth?",
    choices: [
      "Meritocracy is a myth.",
      "Is meritocracy just a myth?",
      "Should success be measured by wealth rather than effort?",
      "Does the idea that success depends purely on merit still hold true?"
    ],
    correct: 3,
    explanation: "Le choix 4 développe le concept avec de nouveaux mots (« the idea that success depends purely on merit »). Le choix 2 ne fait qu'ajouter « just ». Le choix 3 change complètement la question. Le choix 1 est une affirmation."
  },
  {
    question: "Should prisons focus on punishment or rehabilitation?",
    choices: [
      "Prisons should focus on rehabilitation rather than punishment.",
      "Should prisons focus on punishing or rehabilitating offenders?",
      "Does imprisonment reduce reoffending rates?",
      "Ought the justice system to prioritize rehabilitating offenders over punishing them?"
    ],
    correct: 3,
    explanation: "Le choix 4 reformule entièrement (« the justice system », « prioritize... over ») tout en gardant l'alternative ouverte du sens original. Le choix 2 change à peine la formulation. Le choix 3 porte sur la récidive, une question différente. Le choix 1 est une affirmation qui, de plus, tranche déjà en faveur d'un camp, contrairement à l'original."
  },
  {
    question: "Is the gig economy good for workers?",
    choices: [
      "The gig economy is good for workers.",
      "Is the gig economy beneficial for workers?",
      "Should gig-economy companies be forced to offer permanent contracts?",
      "Does the rise of the gig economy actually benefit those who work in it?"
    ],
    correct: 3,
    explanation: "Le choix 4 reformule entièrement (« the rise of », « those who work in it »). Le choix 2 ne fait que remplacer « good » par « beneficial ». Le choix 3 porte sur les contrats, une question de politique différente. Le choix 1 est une affirmation."
  },
  {
    question: "Should there be limits on free trade to protect local industries?",
    choices: [
      "There should be limits on free trade to protect local industries.",
      "Should limits be placed on free trade to protect local industries?",
      "Does free trade increase overall prosperity worldwide?",
      "Ought governments to restrict free trade in order to shield domestic industries?"
    ],
    correct: 3,
    explanation: "Le choix 4 utilise un nouveau vocabulaire (« restrict », « shield domestic industries »). Le choix 2 change à peine l'original. Le choix 3 porte sur la prospérité, une question différente. Le choix 1 est une affirmation."
  },
  {
    question: "Is public trust in institutions declining, and does it matter?",
    choices: [
      "Public trust in institutions is declining, and it matters.",
      "Is trust in public institutions declining, and is that significant?",
      "Should institutions be reformed to increase transparency?",
      "Are citizens losing faith in their institutions, and what would be the consequences?"
    ],
    correct: 3,
    explanation: "Le choix 4 reconstruit les deux parties de la question avec un nouveau vocabulaire (« losing faith », « what would be the consequences »). Le choix 2 reformule à peine l'original. Le choix 3 change vers une proposition de réforme. Le choix 1 est une affirmation qui, de plus, présuppose la réponse."
  },
  {
    question: "Should social media companies be broken up to prevent monopolies?",
    choices: [
      "Social media companies should be broken up to prevent monopolies.",
      "Should social media companies be split up to prevent monopolies?",
      "Do social media companies harm users' mental health?",
      "Ought major tech companies to be dismantled to curb their market dominance?"
    ],
    correct: 3,
    explanation: "Le choix 4 reformule entièrement (« major tech companies », « dismantled », « curb their market dominance »). Le choix 2 ne change qu'un verbe. Le choix 3 porte sur la santé mentale, un sujet différent. Le choix 1 est une affirmation."
  },
  {
    question: "Is patriotism compatible with a globalized world?",
    choices: [
      "Patriotism is compatible with a globalized world.",
      "Is patriotism compatible with an increasingly globalized world?",
      "Does nationalism lead to conflict between countries?",
      "Can a strong sense of national pride coexist with an increasingly interconnected world?"
    ],
    correct: 3,
    explanation: "Le choix 4 remplace tous les termes clés (« national pride », « coexist », « interconnected world »). Le choix 2 n'ajoute qu'un mot. Le choix 3 dévie vers le nationalisme et les conflits, une question différente. Le choix 1 est une affirmation."
  },
  {
    question: "Should schools teach students how to think critically about the news?",
    choices: [
      "Schools should teach students how to think critically about the news.",
      "Should schools teach students to think critically about the news?",
      "Do young people trust traditional news sources less than before?",
      "Ought media literacy to become a core part of the school curriculum?"
    ],
    correct: 3,
    explanation: "Le choix 4 reformule entièrement (« media literacy », « a core part of the school curriculum »). Le choix 2 ne fait que supprimer « how to ». Le choix 3 porte sur la confiance envers les médias, une question différente. Le choix 1 est une affirmation."
  }
];

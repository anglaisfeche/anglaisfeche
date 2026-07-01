// ============================================================
// REFORMULATION DE PROBLEMATIQUES — Méthode de l'essai
// ============================================================
// Banque de questions type épreuve d'expression écrite (SciencesPo / BCE),
// portant sur des sujets de société et d'actualité. L'élève reformule la
// question en gardant le sens, puis compare avec des propositions modèles.
// Il n'y a pas de correction automatique : l'exercice fonctionne en
// auto-évaluation, conformément aux conseils du Reference Booklet
// (l'intro doit reformuler l'enjeu sans répéter la question à l'identique).
// ============================================================

const REFORMULATION_BANK = [
  { question: "Should social media platforms be held responsible for the content they host?",
    reformulations: [
      "To what extent ought social media companies to answer for what is published on their platforms?",
      "Is it fair to make social media platforms accountable for user-generated content?"
    ] },
  { question: "Is economic growth still a valid measure of a country's success?",
    reformulations: [
      "Can GDP still be considered a reliable indicator of a nation's progress?",
      "Should other criteria than economic growth be used to assess how well a country is doing?"
    ] },
  { question: "Does immigration threaten national identity?",
    reformulations: [
      "Is it accurate to see immigration as a danger to a country's sense of identity?",
      "To what extent does the arrival of immigrants challenge a nation's cultural cohesion?"
    ] },
  { question: "Can democracy survive the rise of populism?",
    reformulations: [
      "Is democratic government under real threat from populist movements?",
      "How resilient are democratic institutions in the face of growing populism?"
    ] },
  { question: "Should university education be free for everyone?",
    reformulations: [
      "Ought higher education to be made accessible to all at no cost?",
      "Is it desirable for governments to abolish tuition fees altogether?"
    ] },
  { question: "Is technology making us more isolated?",
    reformulations: [
      "Does the growing use of digital technology weaken our real-life social ties?",
      "Are we becoming lonelier as a result of relying more on technology?"
    ] },
  { question: "Should the death penalty be abolished worldwide?",
    reformulations: [
      "Is capital punishment a practice that should be ended everywhere?",
      "Can the abolition of the death penalty be justified in every country?"
    ] },
  { question: "Is the gap between rich and poor a threat to social stability?",
    reformulations: [
      "Does rising inequality endanger the cohesion of society?",
      "To what extent can a widening wealth gap destabilize a society?"
    ] },
  { question: "Should governments regulate artificial intelligence more strictly?",
    reformulations: [
      "Is tighter regulation of AI necessary to prevent its potential harms?",
      "Ought the state to intervene more firmly in the development of artificial intelligence?"
    ] },
  { question: "Is freedom of speech being threatened by political correctness?",
    reformulations: [
      "Does the growing sensitivity around language limit our ability to speak freely?",
      "Has concern for political correctness gone so far as to curb free expression?"
    ] },
  { question: "Can climate change be tackled without limiting economic growth?",
    reformulations: [
      "Is it possible to address the climate crisis while still pursuing economic expansion?",
      "Must economic growth be sacrificed in order to fight climate change effectively?"
    ] },
  { question: "Should voting be made compulsory?",
    reformulations: [
      "Ought citizens to be legally required to vote?",
      "Would mandatory voting strengthen or weaken democratic legitimacy?"
    ] },
  { question: "Is the nuclear family model becoming obsolete?",
    reformulations: [
      "Is the traditional nuclear family losing its relevance in today's society?",
      "Are alternative family structures replacing the conventional nuclear family?"
    ] },
  { question: "Does globalization benefit developing countries?",
    reformulations: [
      "Have developing nations genuinely gained from globalization?",
      "Is globalization more of an opportunity or a threat for developing economies?"
    ] },
  { question: "Should the media be more heavily regulated to fight fake news?",
    reformulations: [
      "Is stricter regulation of the press necessary to curb the spread of misinformation?",
      "Ought governments to intervene more directly to combat fake news in the media?"
    ] },
  { question: "Is meritocracy a myth?",
    reformulations: [
      "Does the idea that success depends purely on merit still hold true?",
      "Is the belief in a fair, merit-based society an illusion?"
    ] },
  { question: "Should prisons focus on punishment or rehabilitation?",
    reformulations: [
      "Ought the justice system to prioritize rehabilitating offenders over punishing them?",
      "Is rehabilitation a more effective goal for prisons than punishment?"
    ] },
  { question: "Is the gig economy good for workers?",
    reformulations: [
      "Does the rise of the gig economy actually benefit those who work in it?",
      "Are gig workers better or worse off than traditional employees?"
    ] },
  { question: "Should there be limits on free trade to protect local industries?",
    reformulations: [
      "Ought governments to restrict free trade in order to shield domestic industries?",
      "Is protectionism justified as a way of preserving local jobs and industries?"
    ] },
  { question: "Is public trust in institutions declining, and does it matter?",
    reformulations: [
      "Are citizens losing faith in their institutions, and what would be the consequences?",
      "Does the erosion of trust in institutions pose a real threat to society?"
    ] },
  { question: "Should social media companies be broken up to prevent monopolies?",
    reformulations: [
      "Ought major tech companies to be dismantled to curb their market dominance?",
      "Is breaking up big tech firms necessary to preserve fair competition?"
    ] },
  { question: "Is patriotism compatible with a globalized world?",
    reformulations: [
      "Can a strong sense of national pride coexist with an increasingly interconnected world?",
      "Does globalization make patriotism outdated?"
    ] },
  { question: "Should schools teach students how to think critically about the news?",
    reformulations: [
      "Ought media literacy to become a core part of the school curriculum?",
      "Is it the responsibility of schools to teach pupils to critically assess the news?"
    ] },
];

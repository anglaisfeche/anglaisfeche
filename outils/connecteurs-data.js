// ============================================================
// MOTS DE LIAISON — exercice de réécriture
// ============================================================
// Chaque item propose 1 ou 2 phrases simples à combiner/réécrire en
// utilisant le connecteur indiqué. "model" est une réécriture possible,
// affichée après la tentative de l'élève pour auto-évaluation
// (il n'y a pas de correction automatique : la reformulation est libre).
// Pour ajouter un connecteur, copiez un bloc.
// ============================================================

const CONNECTORS = [
  // ---------- Pour commencer / développer ----------
  { connector: "First of all", translation: "tout d'abord", category: "Pour commencer / développer", usage: "en tête de phrase, suivi d'une virgule", base: ["The government must address housing costs.", "It must tackle unemployment."], model: "First of all, the government must address housing costs, and it must also tackle unemployment." },
  { connector: "As a matter of fact", translation: "en fait", category: "Pour commencer / développer", usage: "en tête de phrase, pour nuancer ou préciser", base: ["Many believe the reform will fail.", "Early results are encouraging."], model: "Many believe the reform will fail; as a matter of fact, early results are encouraging." },
  { connector: "To some extent", translation: "dans une certaine mesure", category: "Pour commencer / développer", usage: "modifie un verbe ou une proposition entière", base: ["The policy reduced poverty.", "It failed to address inequality."], model: "The policy reduced poverty to some extent, but it failed to address inequality." },
  { connector: "Insofar as", translation: "dans la mesure où", category: "Pour commencer / développer", usage: "+ proposition (S+V)", base: ["The reform is useful.", "It gives more power to local authorities."], model: "The reform is useful insofar as it gives more power to local authorities." },
  { connector: "As regards", translation: "en ce qui concerne", category: "Pour commencer / développer", usage: "+ nom", base: ["The candidates disagree on tax policy.", "Immigration is another point of disagreement."], model: "The candidates disagree on tax policy; as regards immigration, they are equally divided." },

  // ---------- Pour rajouter un élément ----------
  { connector: "Furthermore", translation: "de plus", category: "Pour rajouter un élément", usage: "en tête de phrase, suivi d'une virgule", base: ["The policy failed to reduce unemployment.", "It increased inflation."], model: "The policy failed to reduce unemployment; furthermore, it increased inflation." },
  { connector: "Moreover", translation: "de plus", category: "Pour rajouter un élément", usage: "en tête de phrase, suivi d'une virgule", base: ["Social media spreads misinformation quickly.", "It undermines trust in traditional journalism."], model: "Social media spreads misinformation quickly; moreover, it undermines trust in traditional journalism." },
  { connector: "In addition to", translation: "en plus de, outre", category: "Pour rajouter un élément", usage: "+ nom ou V-ing", base: ["Rising prices hurt low-income households.", "Rising interest rates hurt them too."], model: "In addition to rising prices, rising interest rates are hurting low-income households." },
  { connector: "Similarly", translation: "de même", category: "Pour rajouter un élément", usage: "en tête de phrase, suivi d'une virgule", base: ["The UK faces an ageing population.", "France faces the same demographic challenge."], model: "The UK faces an ageing population; similarly, France faces the same demographic challenge." },
  { connector: "Besides", translation: "d'ailleurs", category: "Pour rajouter un élément", usage: "en tête de phrase", base: ["The plan is too expensive.", "It has not been approved by parliament."], model: "The plan is too expensive; besides, it has not been approved by parliament." },

  // ---------- Pour donner des exemples ----------
  { connector: "For instance", translation: "par exemple", category: "Pour donner des exemples", usage: "en tête de phrase ou en incise", base: ["Several countries have adopted a universal basic income.", "Finland ran a large-scale trial."], model: "Several countries have experimented with a universal basic income; Finland, for instance, ran a large-scale trial." },
  { connector: "Such as", translation: "tel que", category: "Pour donner des exemples", usage: "+ nom, sans virgule avant", base: ["Some countries rely heavily on renewable energy.", "Denmark generates most of its electricity from wind."], model: "Some countries such as Denmark rely heavily on renewable energy." },
  { connector: "Namely", translation: "à savoir", category: "Pour donner des exemples", usage: "pour nommer précisément ce qu'on vient d'évoquer", base: ["Only one candidate opposed the reform.", "The candidate was the leader of the opposition."], model: "Only one candidate opposed the reform, namely the leader of the opposition." },
  { connector: "Above all", translation: "surtout", category: "Pour donner des exemples", usage: "pour mettre en avant l'exemple le plus important", base: ["The crisis affected several sectors.", "Tourism was hit hardest."], model: "The crisis affected several sectors, above all tourism." },

  // ---------- Pour exprimer le but ----------
  { connector: "In order to", translation: "afin de", category: "Pour exprimer le but", usage: "+ base verbale (BV)", base: ["The government raised interest rates.", "It wanted to curb inflation."], model: "The government raised interest rates in order to curb inflation." },
  { connector: "So as to", translation: "de façon à", category: "Pour exprimer le but", usage: "+ base verbale (BV)", base: ["The company cut jobs.", "It wanted to reduce costs."], model: "The company cut jobs so as to reduce costs." },
  { connector: "So that", translation: "de telle sorte que", category: "Pour exprimer le but / la conséquence", usage: "+ proposition (S+V)", base: ["The teacher explained the rule again.", "Everyone could understand it."], model: "The teacher explained the rule again so that everyone could understand it." },

  // ---------- Pour exprimer la condition ----------
  { connector: "Provided that", translation: "à condition que", category: "Pour exprimer la condition", usage: "+ proposition (S+V)", base: ["The bill will pass.", "The opposition does not block it."], model: "The bill will pass, provided that the opposition does not block it." },
  { connector: "Unless", translation: "à moins que", category: "Pour exprimer la condition", usage: "+ proposition (S+V), sans négation supplémentaire", base: ["The company will go bankrupt.", "It receives new funding."], model: "The company will go bankrupt unless it receives new funding." },
  { connector: "In case", translation: "au cas où", category: "Pour exprimer la condition", usage: "+ proposition (S+V)", base: ["Bring a copy of the document.", "The office asks for it."], model: "Bring a copy of the document in case the office asks for it." },

  // ---------- Pour contraster ----------
  { connector: "However", translation: "cependant", category: "Pour contraster", usage: "en tête de phrase ou en incise, entre virgules", base: ["The reform was popular at first.", "Support has since declined sharply."], model: "The reform was popular at first; however, support has since declined sharply." },
  { connector: "On the contrary", translation: "au contraire", category: "Pour contraster", usage: "en tête de phrase, pour opposer fortement deux idées", base: ["Critics claimed the policy would raise unemployment.", "Unemployment actually fell."], model: "Critics claimed the policy would raise unemployment; on the contrary, unemployment actually fell." },
  { connector: "Conversely", translation: "inversement", category: "Pour contraster", usage: "en tête de phrase, pour présenter le point de vue opposé", base: ["Rural areas suffer from a lack of services.", "Urban areas struggle with overcrowding."], model: "Rural areas suffer from a lack of services; conversely, urban areas struggle with overcrowding." },
  { connector: "Unlike", translation: "à la différence de", category: "Pour contraster", usage: "+ nom, en tête de phrase", base: ["The French system relies on centralized funding.", "The American system relies on local taxes."], model: "Unlike the French system, the American system relies on local taxes." },
  { connector: "Whereas", translation: "tandis que, alors que", category: "Pour contraster", usage: "+ proposition (S+V), relie deux propositions", base: ["Older voters tend to favour stability.", "Younger voters tend to favour change."], model: "Older voters tend to favour stability, whereas younger voters tend to favour change." },
  { connector: "In (sharp) contrast to", translation: "contrairement à", category: "Pour contraster", usage: "+ nom, en tête de phrase", base: ["Previous governments avoided the issue.", "This government has made it a priority."], model: "In sharp contrast to previous governments, this one has made the issue a priority." },

  // ---------- Pour exprimer la concession ----------
  { connector: "Although", translation: "bien que", category: "Pour exprimer la concession", usage: "+ proposition (S+V)", base: ["The policy is unpopular.", "The government refuses to abandon it."], model: "Although the policy is unpopular, the government refuses to abandon it." },
  { connector: "Even though", translation: "même si", category: "Pour exprimer la concession", usage: "+ proposition (S+V), insiste sur l'opposition", base: ["The evidence was clear.", "Some officials still denied the problem."], model: "Even though the evidence was clear, some officials still denied the problem." },
  { connector: "Despite", translation: "malgré", category: "Pour exprimer la concession", usage: "+ nom ou V-ing", base: ["Turnout was low.", "The election result was seen as legitimate."], model: "Despite the low turnout, the election result was seen as legitimate." },
  { connector: "Albeit", translation: "quoique", category: "Pour exprimer la concession", usage: "en incise, souvent + adjectif", base: ["The reform passed.", "It was a narrow victory."], model: "The reform passed, albeit narrowly." },

  // ---------- Pour exprimer la cause ----------
  { connector: "Since", translation: "puisque", category: "Pour exprimer la cause", usage: "+ proposition (S+V), en tête de phrase", base: ["Fewer students choose science degrees.", "Universities are cutting science courses."], model: "Since fewer students choose science degrees, universities are cutting science courses." },
  { connector: "Owing to", translation: "en raison de", category: "Pour exprimer la cause", usage: "+ nom", base: ["Flights were cancelled.", "There was a strike."], model: "Flights were cancelled owing to a strike." },
  { connector: "Due to", translation: "du fait de", category: "Pour exprimer la cause", usage: "+ nom", base: ["The harvest failed.", "There was a severe drought."], model: "The harvest failed due to a severe drought." },
  { connector: "Thanks to", translation: "grâce à", category: "Pour exprimer la cause", usage: "+ nom (cause positive)", base: ["Infant mortality has fallen sharply.", "Vaccination programmes made this possible."], model: "Infant mortality has fallen sharply thanks to vaccination programmes." },

  // ---------- Pour exprimer la conséquence ----------
  { connector: "Therefore", translation: "c'est pourquoi", category: "Pour exprimer la conséquence", usage: "en tête de phrase ou après un point-virgule", base: ["Wages have not kept up with inflation.", "Many households are struggling."], model: "Wages have not kept up with inflation; therefore, many households are struggling." },
  { connector: "Consequently", translation: "par conséquent", category: "Pour exprimer la conséquence", usage: "en tête de phrase ou après un point-virgule", base: ["The bank raised interest rates.", "Borrowing became more expensive."], model: "The bank raised interest rates; consequently, borrowing became more expensive." },
  { connector: "As a result of", translation: "en conséquence de", category: "Pour exprimer la conséquence", usage: "+ nom", base: ["Thousands lost their jobs.", "There was a wave of factory closures."], model: "Thousands lost their jobs as a result of a wave of factory closures." },
  { connector: "Thus", translation: "ainsi", category: "Pour exprimer la conséquence", usage: "en tête de phrase, registre soutenu", base: ["The court struck down the law.", "The ban could no longer be enforced."], model: "The court struck down the law; thus, the ban could no longer be enforced." },
  { connector: "So much so that", translation: "à tel point que", category: "Pour exprimer la conséquence", usage: "après un adjectif ou une proposition, + S+V", base: ["Prices rose very quickly.", "Many families could no longer afford rent."], model: "Prices rose so quickly, so much so that many families could no longer afford rent." },

  // ---------- Pour conclure ----------
  { connector: "To conclude", translation: "pour conclure", category: "Pour conclure", usage: "en tête de phrase, en fin de raisonnement", base: ["The reform had mixed results.", "It reduced poverty but increased inequality."], model: "To conclude, the reform had mixed results: it reduced poverty but increased inequality." },
  { connector: "Overall", translation: "dans l'ensemble", category: "Pour conclure", usage: "en tête ou fin de phrase, pour synthétiser", base: ["Some regions gained from the policy.", "Others lost out."], model: "Overall, some regions gained from the policy while others lost out." },
];

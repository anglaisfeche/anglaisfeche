// ============================================================
// COLLOCATIONS — d'après le Reference Booklet (CPGE B/L, T.Fêche)
// ============================================================
// Chaque catégorie contient une liste de noms, et pour chaque nom,
// un ou plusieurs verbes fréquemment associés avec une phrase d'exemple.
// L'exercice masque automatiquement le verbe conjugué dans la phrase
// (voir moteur de correspondance dans collocations.html) et propose
// un choix multiple parmi plusieurs verbes de la même catégorie.
// ============================================================

const COLLOCATION_CATEGORIES = [
  { id: "structure-essai", title: "1. La structure d'un essai", nouns: [
    { noun: "Argument", entries: [
      { verb: "Put forward", example: "The author puts forward some very convincing arguments." },
      { verb: "Refute", example: "It's unfortunately easier to discredit the person rather than refute their arguments." }
    ]},
    { noun: "Approach", entries: [{ verb: "Adopt", example: "We need to adopt a more pragmatic approach." }]},
    { noun: "Contribution", entries: [{ verb: "Make", example: "This author made a contribution in the development of the theory of free trade." }]},
    { noun: "Theory", entries: [
      { verb: "Advance", example: "Galileo advanced the theory that the sun is the center of our planetary system." },
      { verb: "Refute", example: "Pasteur refuted the theory of spontaneous generation." },
      { verb: "Challenge", example: "This new study challenged the well-established theory that oxides cause ageing." }
    ]},
    { noun: "Connection", entries: [{ verb: "Establish", example: "He has tried to establish a connection between media violence and aggression." }]},
    { noun: "Reference", entries: [{ verb: "Make", example: "The article makes no reference to his first marriage." }]},
    { noun: "Parallel", entries: [{ verb: "Draw", example: "She drew a parallel between running the economy and a housewife's weekly budget." }]},
    { noun: "Conclusion", entries: [
      { verb: "Draw", example: "In the absence of objective data, we were not able to draw a conclusion." },
      { verb: "Come to", example: "After deliberating, the jury came to the conclusion that the defendant is guilty." },
      { verb: "Jump to", example: "Don't jump to conclusions before you know the facts." }
    ]},
    { noun: "Detail", entries: [{ verb: "Go into", example: "I don't want to go into any more detail than absolutely necessary." }]},
    { noun: "Criticism", entries: [{ verb: "Come under", example: "The government came under fierce criticism for its policies." }]},
    { noun: "Difference", entries: [{ verb: "Make", example: "What difference does it make if he doesn't have a car?" }]},
    { noun: "Importance", entries: [
      { verb: "Attach", example: "To what objectives do you attach most importance?" },
      { verb: "Stress", example: "The manual stresses the importance of regular maintenance." }
    ]},
    { noun: "Issue", entries: [
      { verb: "Discuss", example: "This evening we're discussing the issue of the legalization of soft drugs." },
      { verb: "Address", example: "We need to address the issue of child labour." },
      { verb: "Tackle", example: "Several recent studies have tackled the issue of the legalization of soft drugs." }
    ]},
    { noun: "Perspective", entries: [{ verb: "Adopt", example: "The book adopts a historical perspective." }]},
    { noun: "Light", entries: [{ verb: "Shed", example: "We study history because history sheds light on the present." }]},
    { noun: "Emphasis", entries: [{ verb: "Lay", example: "In his presentation, the speaker laid emphasis on four distinct aspects." }]},
    { noun: "Comparison", entries: [{ verb: "Draw", example: "The historian drew a comparison between the Roosevelt and Kennedy administrations." }]}
  ]},

  { id: "stats-etudes", title: "2. Les statistiques et études", nouns: [
    { noun: "Data", entries: [{ verb: "Collect", example: "We need to collect more data before we can do any more work." }]},
    { noun: "Survey", entries: [{ verb: "Carry out", example: "The charity carried out a survey of people's attitudes to the disabled." }]},
    { noun: "Report", entries: [{ verb: "Submit", example: "The committee submitted a report establishing the facts." }]},
    { noun: "Study", entries: [{ verb: "Undertake", example: "He has undertaken a special study of the way that birds communicate." }]},
    { noun: "Analysis", entries: [{ verb: "Carry out", example: "They carried out an in-depth analysis of the results." }]}
  ]},

  { id: "transmission-info", title: "3. La transmission de l'information", nouns: [
    { noun: "Attention", entries: [
      { verb: "Pay", example: "Please pay attention, this is important." },
      { verb: "Draw", example: "Through our actions, we try to draw attention to the causes of climate change." }
    ]},
    { noun: "Lecture", entries: [
      { verb: "Deliver", example: "He delivered a lecture on extremist political violence." },
      { verb: "Attend", example: "I have received an invitation to attend a lecture on modern art." }
    ]},
    { noun: "Point", entries: [
      { verb: "Prove", example: "He spent hours arguing to prove his point, but he convinced no one." },
      { verb: "Miss", example: "I'm afraid you missed the point. Let me explain it again." }
    ]},
    { noun: "News", entries: [{ verb: "Break", example: "The police had to break the news of his death to the boy's parents." }]},
    { noun: "Rumour", entries: [
      { verb: "Fuel", example: "His lengthy absence from work fuelled rumours that he might have been sacked." },
      { verb: "Spread", example: "He was arrested after the villagers spread the rumour that he was an informer." }
    ]},
    { noun: "Headlines", entries: [{ verb: "Hit", example: "The hospital hit the headlines when a number of suspicious deaths occurred." }]},
    { noun: "Statement", entries: [{ verb: "Issue", example: "The President issued a statement announcing significant changes." }]},
    { noun: "Explanation", entries: [
      { verb: "Deserve", example: "I suppose you deserve an explanation." },
      { verb: "Offer", example: "He only offered a partial explanation for his lateness." }
    ]},
    { noun: "Speech", entries: [{ verb: "Deliver", example: "He delivered a very convincing speech." }]},
    { noun: "Apology", entries: [
      { verb: "Owe", example: "She certainly owes you an apology." },
      { verb: "Issue", example: "The newspaper has issued an apology to the minister." }
    ]},
    { noun: "Message", entries: [{ verb: "Convey", example: "Sometimes photos can convey a message with more impact than words." }]},
    { noun: "Suggestion", entries: [
      { verb: "Make", example: "May I make a suggestion?" },
      { verb: "Dismiss", example: "They dismissed the suggestion that they hadn't worked hard." }
    ]},
    { noun: "Advice", entries: [
      { verb: "Pass on", example: "This was such good advice and now I want to pass it on to all of you." },
      { verb: "Seek", example: "Don't hesitate to seek advice from qualified professionals who can help." }
    ]},
    { noun: "Warning", entries: [
      { verb: "Issue", example: "The police have issued a warning about pickpockets." },
      { verb: "Heed", example: "Failure to heed this warning could lead to serious injury." }
    ]},
    { noun: "Voice", entries: [{ verb: "Raise", example: "Prison did not silence him: he continued to raise his voice to denounce oppression." }]},
    { noun: "Truth", entries: [
      { verb: "Tell", example: "I'm sure she's telling the truth." },
      { verb: "Acknowledge", example: "It is hard to acknowledge the truth, but it's necessary." }
    ]},
    { noun: "Phrase", entries: [{ verb: "Coin", example: "The phrase survival of the fittest was coined by Herbert Spencer." }]}
  ]},

  { id: "engagement", title: "4. L'engagement", nouns: [
    { noun: "Responsibility", entries: [
      { verb: "Bear", example: "Banks bear high responsibility for the financial crisis." },
      { verb: "Claim", example: "No organization has yet claimed responsibility for the bomb attack." },
      { verb: "Shirk", example: "He has a tendency to procrastinate, shirk responsibility and blame others." }
    ]},
    { noun: "Promise", entries: [
      { verb: "Keep", example: "Keeping your promises is the backbone of any healthy relationship." },
      { verb: "Go back on", example: "The PM went back on his promise to reduce taxes; the population felt betrayed." }
    ]},
    { noun: "Blame", entries: [
      { verb: "Shoulder", example: "It is unjust that he had to shoulder the blame for an accident he didn't cause." },
      { verb: "Place", example: "They placed the blame for the data breach on the company's lack of security measures." }
    ]},
    { noun: "Commitment", entries: [
      { verb: "Make", example: "The prime minister made a firm commitment to increasing spending on health." },
      { verb: "Affirm", example: "The president affirmed his commitment to continue his efforts to end corruption." }
    ]},
    { noun: "Tribute", entries: [{ verb: "Pay", example: "We gather here today to pay tribute to a great woman." }]},
    { noun: "Trust", entries: [
      { verb: "Place", example: "We're all placing our trust in you to solve this problem." },
      { verb: "Build", example: "Efforts were made to build trust between the community and police." },
      { verb: "Betray", example: "Your party has betrayed the trust that the population places in its government." }
    ]},
    { noun: "Confidence", entries: [
      { verb: "Express", example: "He expressed confidence in the new plans." },
      { verb: "Shake", example: "Only one bank scandal is needed to shake the confidence in the financial markets." }
    ]},
    { noun: "Awareness", entries: [{ verb: "Raise", example: "The group is trying to raise public awareness about homelessness." }]},
    { noun: "Credit", entries: [{ verb: "Take", example: "He did all the work, but in the end his boss took all the credit." }]}
  ]},

  { id: "opinions-croyances", title: "5. Les opinions et croyances", nouns: [
    { noun: "Opinion", entries: [
      { verb: "State", example: "The Governor stated his opinion that the Government should assume all the costs." },
      { verb: "Shape", example: "Radio broadcasters can help shape public opinion about the need for reform." }
    ]},
    { noun: "Mind", entries: [
      { verb: "Speak", example: "If you don't agree with me, don't be afraid to speak your mind." },
      { verb: "Change", example: "Please let me know if you change your mind." }
    ]},
    { noun: "Claim", entries: [
      { verb: "Make", example: "The company made false claims about its products." },
      { verb: "Back up", example: "They were able to produce witnesses to back up their claim." }
    ]},
    { noun: "Belief", entries: [
      { verb: "Hold", example: "Some hold the belief that violent criminals should be sentenced to the death penalty." },
      { verb: "Shake", example: "The child's death shook his belief in God." }
    ]},
    { noun: "Myth", entries: [
      { verb: "Perpetuate", example: "He has contributed to perpetuate the myth of the speech that creates life." },
      { verb: "Debunk", example: "She tried to debunk the myth that you have to be perfect at everything." }
    ]},
    { noun: "View", entries: [
      { verb: "Hold", example: "We all hold the view that competition is vital to the economy." },
      { verb: "Endorse", example: "I fully endorse the view expressed by Mr Howitt about the necessity to take action." }
    ]},
    { noun: "Doubt", entries: [
      { verb: "Cast", example: "Her record of dismissals casts doubt on her ability to hold down a job." },
      { verb: "Dispel", example: "The announcement dispelled any doubts as to the prince's intentions." }
    ]},
    { noun: "Judgment", entries: [
      { verb: "Form", example: "It's difficult to form a judgment when you don't have all the facts." },
      { verb: "Pass", example: "Please, don't pass judgment on him before you hear what really happened." }
    ]},
    { noun: "Principle", entries: [
      { verb: "Stick to", example: "She sticks to the principle that everyone should be treated equally." },
      { verb: "Betray", example: "I refuse to betray my principles by eating meat." }
    ]}
  ]},

  { id: "emotions", title: "6. Les émotions", nouns: [
    { noun: "Fear", entries: [
      { verb: "Fuel", example: "This incident has fuelled fears of a full-scale war." },
      { verb: "Allay", example: "The government is trying to allay the public's fears." }
    ]},
    { noun: "Resentment", entries: [{ verb: "Breed", example: "Inequality breeds resentment." }]},
    { noun: "Depression", entries: [
      { verb: "Fall into", example: "He fell into a black depression and refused to leave his room." },
      { verb: "Get over", example: "Fortunately, she was gradually getting over her depression." }
    ]},
    { noun: "Stress", entries: [
      { verb: "Be under", example: "He's been under a lot of stress lately." },
      { verb: "Handle", example: "He had to give up his job, he just couldn't handle the stress." }
    ]},
    { noun: "Hope", entries: [
      { verb: "Entertain", example: "Political leaders now entertain the hope that a settlement can be found." },
      { verb: "Dash", example: "Her hopes of going to university have now been dashed." }
    ]}
  ]},

  { id: "conditions-vie", title: "7. Les conditions de vie", nouns: [
    { noun: "Family", entries: [
      { verb: "Start", example: "They got married last year and plan to start a family soon." },
      { verb: "Support", example: "It is difficult for them to earn enough to support their families." }
    ]},
    { noun: "Child", entries: [
      { verb: "Expect", example: "They are expecting a child in June." },
      { verb: "Raise", example: "It takes patience to raise children." }
    ]},
    { noun: "Living", entries: [{ verb: "Earn", example: "Her dream was to earn her living as a singer." }]},
    { noun: "Poverty", entries: [
      { verb: "Alleviate", example: "The government has put forth bold reform proposals to alleviate poverty." },
      { verb: "Combat", example: "We want to combat poverty, wherever it happens to be in the world." },
      { verb: "Live in", example: "Some 952,000 children and adolescents live in poverty." }
    ]},
    { noun: "Standards", entries: [
      { verb: "Raise", example: "Globalisation is fostering prosperity and raising living standards in many countries." },
      { verb: "Lower", example: "We must be vigilant against attempts to lower the standards of education." }
    ]},
    { noun: "Income", entries: [
      { verb: "Receive", example: "Individuals usually receive income through earning wages by working." },
      { verb: "Generate", example: "You can generate income by renting out a room in your house to tourists." },
      { verb: "Supplement", example: "She supplements her income by doing an evening job." }
    ]},
    { noun: "Debt", entries: [
      { verb: "Get into", example: "If you spend more than you have, you'll get into debt before you know it." },
      { verb: "Pay off", example: "It'll take months to pay off all your debts." }
    ]},
    { noun: "Abortion", entries: [{ verb: "Have", example: "When she got pregnant at 16 she decided to have an abortion." }]}
  ]},

  { id: "lien-social", title: "8. Le lien social", nouns: [
    { noun: "Leave", entries: [{ verb: "Take", example: "She took a six-month leave of absence from her job to go travelling." }]},
    { noun: "Service", entries: [{ verb: "Provide", example: "Buses provide the same service as the trains, but at a fraction of the cost." }]},
    { noun: "Relief", entries: [{ verb: "Provide", example: "The organization provides emergency famine relief." }]},
    { noun: "Benefit", entries: [
      { verb: "Be entitled to", example: "Over a certain age, you may be entitled to benefits or services to help you." },
      { verb: "Claim", example: "In your situation you may be able to claim housing benefit." }
    ]},
    { noun: "Assistance", entries: [
      { verb: "Require", example: "The victim, a man, did not require medical assistance." },
      { verb: "Provide", example: "We provide assistance if your car breaks down." }
    ]},
    { noun: "Relationship", entries: [
      { verb: "Foster", example: "Sports unite and foster relationships between students." },
      { verb: "Cement", example: "The PM travelled to France to help cement relationships between the two countries." }
    ]},
    { noun: "Link", entries: [
      { verb: "Forge", example: "The development of biofuel has forged a link between agricultural prices and oil prices." },
      { verb: "Strengthen", example: "We need to strengthen the links between the public and private sectors." },
      { verb: "Sever", example: "After a violent dispute, he severed all her links with his family." }
    ]},
    { noun: "Asylum", entries: [
      { verb: "Seek", example: "She fled the country, and is now seeking asylum in Sweden." },
      { verb: "Grant", example: "The decision to grant asylum or not rests with the Ministry of Domestic Affairs." },
      { verb: "Deny", example: "Over 400 people have been denied asylum." }
    ]}
  ]},

  { id: "conflit-social", title: "9. Le conflit social et les revendications", nouns: [
    { noun: "Street", entries: [
      { verb: "Take to", example: "Thousands of people took to the streets to denounce election fraud." },
      { verb: "Clear", example: "Police were told to clear the streets of drug dealers." }
    ]},
    { noun: "Uproar", entries: [{ verb: "Cause", example: "The release of this controversial movie caused an uproar." }]},
    { noun: "Riot", entries: [
      { verb: "Spark off", example: "The city's housing and unemployment problems sparked off serious riots." },
      { verb: "Quell", example: "Russian troops were sent to quell riots in Kazakhstan." }
    ]},
    { noun: "Protest", entries: [
      { verb: "Stage", example: "Students staged a protest against the rise of tuition fees." },
      { verb: "Trigger", example: "Rising food prices have triggered angry protests in some cities." }
    ]},
    { noun: "Conflict", entries: [
      { verb: "Lead to", example: "The decision led to a bitter conflict between the management and unions." },
      { verb: "Resolve", example: "The United Nations are hoping to resolve the conflict quickly." }
    ]},
    { noun: "Strike", entries: [
      { verb: "Go on", example: "The workers went on strike over unsafe working conditions and inadequate pay." },
      { verb: "Call off", example: "The union called off the strike after they accepted a pay rise." }
    ]},
    { noun: "Demand", entries: [
      { verb: "Make", example: "Demands have been made for the immediate distribution of food to the refugees." },
      { verb: "Yield to", example: "After weeks of protest, the government yielded to the demand of the unions." }
    ]},
    { noun: "Tension", entries: [
      { verb: "Generate", example: "Perceptions of profound injustice always generate tension or confusion." },
      { verb: "Defuse", example: "She often used humour to defuse tension in meetings." }
    ]},
    { noun: "Pressure", entries: [
      { verb: "Exert", example: "The international community exerted pressure on the leader to convince him to stop." },
      { verb: "Give in to", example: "The editor gave in to pressure from his staff, and the article was suppressed." }
    ]}
  ]},

  { id: "education", title: "10. L'éducation", nouns: [
    { noun: "Education", entries: [
      { verb: "Receive", example: "He was at a disadvantage because of the poor education he had received." },
      { verb: "Provide", example: "The school provides an excellent all-round education." }
    ]},
    { noun: "Exam", entries: [
      { verb: "Take", example: "When do you take your final exams?" },
      { verb: "Pass", example: "In spite of her worries, she passed the exam with flying colours." }
    ]},
    { noun: "Course", entries: [{ verb: "Enrol on", example: "She enrolled on a course to learn about wildlife preservation." }]},
    { noun: "Degree", entries: [{ verb: "Obtain", example: "He obtained a degree in political science from the University of Ottawa." }]},
    { noun: "University", entries: [
      { verb: "Apply to", example: "An unprecedented 661,000 candidates applied to university this year." },
      { verb: "Graduate from", example: "I graduated from a technical university with a major in chemical engineering." }
    ]},
    { noun: "Scholarship", entries: [{ verb: "Win", example: "She won a scholarship that enabled her to continue her studies." }]}
  ]},

  { id: "difficultes", title: "11. Les difficultés", nouns: [
    { noun: "Pain", entries: [
      { verb: "Experience", example: "If you still experience pain, consult your health care professional." },
      { verb: "Ease", example: "A sedative is administered to ease pain to ensure the physical comfort of the patient." }
    ]},
    { noun: "Harm", entries: [{ verb: "Cause", example: "The huge fall in exports has caused a great deal of harm to the economy." }]},
    { noun: "Damage", entries: [{ verb: "Cause", example: "The earthquake caused widespread damage to property." }]},
    { noun: "Injury", entries: [
      { verb: "Sustain", example: "He was punched in the face and sustained injuries that needed hospital treatment." },
      { verb: "Recover from", example: "He was in the hospital for months to recover from his injury." }
    ]},
    { noun: "Ordeal", entries: [{ verb: "Go through", example: "Migrants choose to go through an ordeal in the hope of a better life." }]},
    { noun: "Challenge", entries: [{ verb: "Pose", example: "Remote learning poses an additional challenge to disabled children." }]},
    { noun: "Requirement", entries: [
      { verb: "Impose", example: "The government has imposed strict safety requirements on fairground rides." },
      { verb: "Meet", example: "Unfortunately you did not meet the requirements, so your application was rejected." }
    ]},
    { noun: "Risk", entries: [
      { verb: "Run", example: "If you don't revise, you run the risk of failing." },
      { verb: "Assess", example: "The bank will have to assess our credit risk before granting us a loan." }
    ]},
    { noun: "Burden", entries: [
      { verb: "Bear", example: "The younger generations do not want to bear the burden of their fathers' mistakes." },
      { verb: "Place", example: "His illness placed an intolerable burden on the family." }
    ]},
    { noun: "Problem", entries: [
      { verb: "Encounter", example: "Should you encounter a problem anywhere in the world, you can count on us." },
      { verb: "Solve", example: "The best way to solve a problem is to eliminate the source of the problem." }
    ]},
    { noun: "Threat", entries: [{ verb: "Pose", example: "The criminal will be released if parole experts are sure he no longer poses a threat." }]},
    { noun: "Difficulty", entries: [
      { verb: "Encounter", example: "Among the difficulties encountered was a lack of cooperation from the authorities." },
      { verb: "Overcome", example: "We need to work as a team to overcome difficulties." }
    ]}
  ]},

  { id: "recherche-solutions", title: "12. La recherche de solutions", nouns: [
    { noun: "Solution", entries: [
      { verb: "Come up with", example: "We should work together to come up with a solution and not accuse each other." },
      { verb: "Work out", example: "Your notary can help you work out solutions for any legal concerns you may have." }
    ]},
    { noun: "Possibility", entries: [
      { verb: "Consider", example: "They built defences on the coast but didn't consider the possibility of a land attack." },
      { verb: "Entertain", example: "As time passed I began to entertain the possibility that they were telling the truth." }
    ]},
    { noun: "Measure", entries: [{ verb: "Implement", example: "Special measures are being implemented to protect the local water supplies." }]},
    { noun: "Option", entries: [{ verb: "Weigh up", example: "We need to weigh up the options before we make a decision." }]},
    { noun: "Chance", entries: [{ verb: "Stand", example: "He doesn't stand a chance of winning against such an experienced player." }]},
    { noun: "Opportunity", entries: [
      { verb: "Seize", example: "The need is there, the manpower is there - we must seize the opportunity!" },
      { verb: "Miss", example: "If we don't act now, we will miss the opportunity to become the best company." }
    ]},
    { noun: "Question", entries: [
      { verb: "Raise", example: "Her book raises the question of what future generations will do if we run out of water." },
      { verb: "Call into", example: "A new study calls into question the primacy of meat eating in early human evolution." }
    ]},
    { noun: "Ability", entries: [{ verb: "Demonstrate", example: "Both players demonstrated their ability to hit the ball hard." }]},
    { noun: "Task", entries: [
      { verb: "Perform", example: "He has performed the Herculean task of sifting through the police reports." },
      { verb: "Complete", example: "She failed to complete the task that she had been set." }
    ]},
    { noun: "Effort", entries: [
      { verb: "Make", example: "I'll make an effort but I can't guarantee I'll be on time." },
      { verb: "Focus", example: "Defining strategic objectives allows us to focus our efforts." }
    ]},
    { noun: "Idea", entries: [
      { verb: "Come up with", example: "Students came up with the idea of making a club to help save the environment." },
      { verb: "Toy with", example: "I'm toying with the idea of quitting my job." }
    ]},
    { noun: "Plan", entries: [{ verb: "Devise", example: "We have devised a plan to increase sales by 15% in the next three months." }]}
  ]},

  { id: "negociation-decision", title: "13. La négociation et la prise de décision", nouns: [
    { noun: "Decision", entries: [
      { verb: "Reach", example: "The Court is legally obliged to reach a decision within 48 hours." },
      { verb: "Overturn", example: "The defendant appealed, hoping that another judge would overturn the decision." }
    ]},
    { noun: "Offer", entries: [
      { verb: "Make", example: "He made me an offer I simply couldn't refuse." },
      { verb: "Turn down", example: "I had to turn down a job offer because the pay was too low." }
    ]},
    { noun: "Deal", entries: [{ verb: "Strike", example: "The two sides finally struck a deal after weeks of negotiations." }]},
    { noun: "Compromise", entries: [
      { verb: "Seek", example: "It is best to try to seek a compromise rather than a perfect solution." },
      { verb: "Come to", example: "After weeks of negotiations they finally came to a compromise." }
    ]},
    { noun: "Agreement", entries: [
      { verb: "Enter into", example: "Our country has entered into the Paris agreement to try and reduce global warming." },
      { verb: "Withdraw from", example: "You have the right to withdraw from the agreement within 14 days." }
    ]},
    { noun: "Meeting", entries: [
      { verb: "Hold", example: "The minister held a meeting with all the ambassadors to give instructions." },
      { verb: "Chair", example: "I've got to chair a meeting tomorrow." }
    ]},
    { noun: "Talks", entries: [
      { verb: "Hold", example: "The two governments held secret talks on the nuclear threat." },
      { verb: "Break off", example: "The union has abruptly broken off talks with the management." }
    ]},
    { noun: "Debate", entries: [
      { verb: "Spark off", example: "This accident has sparked off an intense debate on road safety." },
      { verb: "Contribute to", example: "Many leading charities have contributed to the debate on world poverty." }
    ]}
  ]},

  { id: "entreprise", title: "14. Le monde de l'entreprise", nouns: [
    { noun: "Business", entries: [
      { verb: "Conduct", example: "It's essential for our company to conduct business with a high level of integrity." },
      { verb: "Go out of", example: "If they do not make a profit, they will go out of business in a few months." }
    ]},
    { noun: "Wage", entries: [
      { verb: "Earn", example: "She earns a good wage at the factory." },
      { verb: "Cut", example: "The labor surplus in urban areas has cut wages by roughly 30 percent." }
    ]},
    { noun: "Profit", entries: [
      { verb: "Make", example: "Did you make a profit on your house when you sold it?" },
      { verb: "Maximize", example: "The objective of a private sector entity is to maximize profits." }
    ]},
    { noun: "Product", entries: [
      { verb: "Launch", example: "Small businesses often offer discounts when they launch a new product." },
      { verb: "Promote", example: "Promoting a product through social media platforms can boost sales." }
    ]},
    { noun: "Price", entries: [
      { verb: "Fix", example: "The management team met to fix the price for their newest product." },
      { verb: "Slash", example: "Whole Foods will slash prices on hundreds of items starting Wednesday." }
    ]},
    { noun: "Contract", entries: [
      { verb: "Enter into", example: "He entered into a contract with his former employer." },
      { verb: "Terminate", example: "Either party can terminate the contract at any time." }
    ]}
  ]},

  { id: "economie", title: "15. L'économie", nouns: [
    { noun: "Economy", entries: [
      { verb: "Regulate", example: "The market can and should regulate the economy, but not society." },
      { verb: "Boost", example: "Any policy aiming to boost the economy must promote investment." }
    ]},
    { noun: "Budget", entries: [
      { verb: "Balance", example: "Taxes have been increased to try and balance the budget." },
      { verb: "Allocate", example: "The management team needs to allocate the budget to the various services." }
    ]},
    { noun: "Growth", entries: [
      { verb: "Sustain", example: "To sustain growth, the tourism sector must take action against climate change." },
      { verb: "Stimulate", example: "Investment and structural reforms can stimulate growth and create jobs." }
    ]},
    { noun: "Inflation", entries: [
      { verb: "Cause", example: "A sudden increase in demand for products and services can cause inflation." },
      { verb: "Curb", example: "To curb inflation, the Federal Reserve can raise interest rates." }
    ]},
    { noun: "Interest", entries: [
      { verb: "Safeguard", example: "The government needs to rethink its policies to safeguard the interests of farmers." },
      { verb: "Jeopardize", example: "Banning Chinese 5G suppliers will jeopardize the interests of consumers." }
    ]},
    { noun: "Tax", entries: [
      { verb: "Levy", example: "Direct taxes could only be levied with the consent of Parliament." },
      { verb: "Evade", example: "She was charged with conspiracy to evade taxes." }
    ]},
    { noun: "Resource", entries: [
      { verb: "Allocate", example: "The problem is that inadequate resources are allocated to enforcing this law." },
      { verb: "Deplete", example: "We cannot continue to deplete resources indefinitely in a finite world." }
    ]},
    { noun: "Waste", entries: [
      { verb: "Dispose of", example: "Until 1993, some countries used ocean dumping to dispose of nuclear waste." },
      { verb: "Recycle", example: "It often costs less to recycle waste than it does to dispose of it." }
    ]}
  ]},

  { id: "pouvoir", title: "16. Le pouvoir", nouns: [
    { noun: "Power", entries: [
      { verb: "Seize", example: "The army organized a coup: they seized power and deposed the president." },
      { verb: "Exercise", example: "Local communities should be given the right to exercise power at their own level." }
    ]},
    { noun: "Control", entries: [
      { verb: "Take", example: "A military junta took control of the country." },
      { verb: "Exert", example: "Repressive nation states have tried to exert control over the internet." }
    ]},
    { noun: "Access", entries: [
      { verb: "Grant", example: "He was finally granted access to the medical records." },
      { verb: "Restrict", example: "Access to this information is severely restricted." }
    ]},
    { noun: "Respect", entries: [
      { verb: "Command", example: "Do we still live in a society in which age commands respect?" },
      { verb: "Show", example: "Being polite is one of the most elementary ways to show respect." }
    ]},
    { noun: "Policy", entries: [
      { verb: "Pursue", example: "The government pursued a policy of non-interference." },
      { verb: "Implement", example: "The employer implemented a policy banning firearms in the workplace." }
    ]},
    { noun: "Politics", entries: [{ verb: "Go into", example: "They went into politics in the hope of changing society." }]}
  ]},

  { id: "ambition-succes-echec", title: "17. L'ambition, le succès et l'échec", nouns: [
    { noun: "Reputation", entries: [
      { verb: "Build", example: "Her international reputation is built on an impressive list of publications." },
      { verb: "Ruin", example: "This compromising photo could ruin his reputation." }
    ]},
    { noun: "Recognition", entries: [
      { verb: "Achieve", example: "In just a few years she has achieved international recognition as a writer." },
      { verb: "Deserve", example: "Both of these theories are valid and deserve recognition." }
    ]},
    { noun: "Experience", entries: [
      { verb: "Gain", example: "To gain experience in an unusual field, some students take unpaid work terms." },
      { verb: "Lack", example: "Public administrations often lack experience in dealing with private-sector partnerships." }
    ]},
    { noun: "Mistake", entries: [
      { verb: "Make", example: "Don't make the same mistakes as I did." },
      { verb: "Acknowledge", example: "The company acknowledged its mistake and reimbursed the customers." }
    ]},
    { noun: "Success", entries: [{ verb: "Achieve", example: "This book identifies 5 habits that you need to follow to achieve success." }]},
    { noun: "Goal", entries: [
      { verb: "Set", example: "If you want to succeed, don't be over-ambitious: set feasible goals." },
      { verb: "Reach", example: "Good news: we've managed to reach our goals on schedule." }
    ]},
    { noun: "Dream", entries: [
      { verb: "Cherish", example: "Americans usually cherish the dream that hard work can change income inequality." },
      { verb: "Shatter", example: "The injury shattered her dream of running in the Olympics." }
    ]},
    { noun: "Record", entries: [
      { verb: "Set", example: "She has just set a new world record." },
      { verb: "Beat", example: "If she continues like this she could beat the record." }
    ]},
    { noun: "Expectation", entries: [
      { verb: "Exceed", example: "Our business units must strive to continually exceed expectations." },
      { verb: "Confound", example: "The rise in share price confounded expectations." }
    ]},
    { noun: "Career", entries: [
      { verb: "Pursue", example: "She pursued a successful career in medicine." },
      { verb: "Ruin", example: "This scandal ruined his career." }
    ]}
  ]},

  { id: "progres", title: "18. Le progrès", nouns: [
    { noun: "Progress", entries: [
      { verb: "Facilitate", example: "The right conditions must be put in place to facilitate progress in employment." },
      { verb: "Hinder", example: "Deep social inequalities still hinder progress towards quality education for all." }
    ]},
    { noun: "Change", entries: [
      { verb: "Bring about", example: "If you want to bring about change, start at the level of the individual." },
      { verb: "Resist", example: "Individuals usually resist change when they don't understand the purpose of it." }
    ]},
    { noun: "Breakthrough", entries: [{ verb: "Make", example: "In 1888, K.Bayer made a breakthrough when he discovered how to extract alumina." }]},
    { noun: "Impact", entries: [
      { verb: "Have", example: "Variations in the interest rate will have an impact on the whole housing market." },
      { verb: "Minimize", example: "We are trying to minimize the impact of price rises on our customers." }
    ]},
    { noun: "Tradition", entries: [
      { verb: "Maintain", example: "Maoris find it difficult to maintain tradition in a modern society." },
      { verb: "Break with", example: "He broke with the family tradition and did not go down the mines." }
    ]},
    { noun: "Trend", entries: [
      { verb: "Set", example: "In the 1960s, Britain set the fashion trends." },
      { verb: "Follow", example: "We are following the American trend towards more flexible working conditions." }
    ]},
    { noun: "Consequence", entries: [
      { verb: "Face", example: "One day, you will have to face the consequences of your reckless behaviour." },
      { verb: "Suffer", example: "He broke the law, so he has to suffer the consequences." }
    ]},
    { noun: "Border", entries: [{ verb: "Cross", example: "Trump has built a wall to prevent migrants from crossing the border." }]},
    { noun: "Limit", entries: [
      { verb: "Set", example: "Central government has set a limit on spending by local councils." },
      { verb: "Exceed", example: "Sorry, your storage quota has exceeded the limit." }
    ]},
    { noun: "Precedent", entries: [{ verb: "Set", example: "This lowering of standards sets a dangerous precedent for future developments." }]}
  ]},

  { id: "justice", title: "19. La justice", nouns: [
    { noun: "Evidence", entries: [{ verb: "Provide", example: "When you apply, you'll need to provide evidence to confirm your identity." }]},
    { noun: "Sentence", entries: [
      { verb: "Hand down", example: "The judge will hand down a sentence based on the evidence presented." },
      { verb: "Serve", example: "He was found guilty of murder: he will have to serve a life sentence." }
    ]},
    { noun: "Trial", entries: [
      { verb: "Go on", example: "A man has gone on trial accused of murdering his girlfriend." },
      { verb: "Bring to", example: "Four people had been arrested and brought to trial." }
    ]},
    { noun: "Verdict", entries: [
      { verb: "Reach", example: "They finally reached a verdict after hours of deliberation." },
      { verb: "Deliver", example: "The verdict was delivered in front of a packed courtroom." }
    ]},
    { noun: "Fine", entries: [
      { verb: "Face", example: "Drivers face heavy fines for driving without a licence." },
      { verb: "Levy", example: "Heavy fines were levied on motoring offenders." }
    ]},
    { noun: "Guilt", entries: [
      { verb: "Prove", example: "It might be difficult to prove his guilt." },
      { verb: "Assuage", example: "Talking to her helped to assuage my guilt." }
    ]},
    { noun: "Court", entries: [
      { verb: "Go to", example: "We are prepared to go to court to get our compensation." },
      { verb: "Appear in", example: "I have to appear in court tomorrow for my traffic violation." }
    ]},
    { noun: "Balance", entries: [
      { verb: "Strike", example: "We need to strike a balance between these conflicting interests." },
      { verb: "Upset", example: "Tourists often upset the delicate balance of nature on the island." }
    ]}
  ]},

  { id: "loi", title: "20. La loi", nouns: [
    { noun: "Bill", entries: [
      { verb: "Introduce", example: "Any member in the House of Representatives may introduce a bill." },
      { verb: "Veto", example: "The President vetoed the bill." }
    ]},
    { noun: "Veto", entries: [
      { verb: "Cast", example: "The board can cast its veto to prevent the decision." },
      { verb: "Override", example: "The Senate voted to override the president's veto." }
    ]},
    { noun: "Order", entries: [
      { verb: "Preserve", example: "The primary function of police is to preserve order." },
      { verb: "Restore", example: "Soldiers have been sent in to try to restore order in that area." }
    ]},
    { noun: "Law", entries: [
      { verb: "Enforce", example: "It's the job of the police to enforce the law." },
      { verb: "Break", example: "If you break the law, you will be punished for that." }
    ]},
    { noun: "Rule", entries: [
      { verb: "Abide by", example: "If you don't abide by the rules at school, you'll get punished." },
      { verb: "Tighten up", example: "The rules on claiming sickness benefit have been tightened up." }
    ]},
    { noun: "Investigation", entries: [{ verb: "Carry out", example: "The FBI carried out an investigation into the allegations but found no evidence." }]},
    { noun: "Charge", entries: [
      { verb: "Bring", example: "Police have brought a charge of dangerous driving against the man." },
      { verb: "Drop", example: "The Court dropped the charges against Pinochet because of his ill health and old age." }
    ]},
    { noun: "Complaint", entries: [{ verb: "File", example: "They filed a complaint with the European Commission." }]},
    { noun: "Permission", entries: [
      { verb: "Request", example: "Planes must request permission before landing at the airport." },
      { verb: "Grant", example: "The government granted permission to use water cannons on rioters." }
    ]},
    { noun: "Right", entries: [
      { verb: "Stand up for", example: "You should stand up for your rights and insist that he pay you." },
      { verb: "Deny", example: "The 15th Amendment makes it illegal to deny the right to vote on account of race." }
    ]},
    { noun: "Duty", entries: [
      { verb: "Assume", example: "The Vice-President shall assume the duties of the President if the latter dies." },
      { verb: "Fulfil", example: "Just fulfil your duties as a citizen of this country: obey the law, pay your taxes and vote." }
    ]}
  ]},

  { id: "violence-paix", title: "21. La violence et la paix", nouns: [
    { noun: "Violence", entries: [
      { verb: "Resort to", example: "The peasants believed their only choice was to resort to violence." },
      { verb: "Incite", example: "Donald Trump was impeached for inciting violence." }
    ]},
    { noun: "War", entries: [
      { verb: "Wage", example: "The new president promised to wage war on corruption in Washington." },
      { verb: "Avert", example: "We must avert war because we know that war does not solve problems, it creates them." }
    ]},
    { noun: "Army", entries: [
      { verb: "Join", example: "After leaving school Mike joined the army." },
      { verb: "Disband", example: "The emperor was deposed and his army disbanded." }
    ]},
    { noun: "Fire", entries: [{ verb: "Open", example: "The troops opened fire on the crowd." }]},
    { noun: "Peace", entries: [
      { verb: "Bring about", example: "The UN has long made efforts to bring about peace and stability in the region." },
      { verb: "Restore", example: "She urged the government to send the army to restore peace." }
    ]},
    { noun: "Ceasefire", entries: [
      { verb: "Call for", example: "The UN has passed a resolution calling for an immediate ceasefire." },
      { verb: "Agree to", example: "After three years of conflict the two sides have finally agreed to a ceasefire." }
    ]},
    { noun: "Troops", entries: [
      { verb: "Deploy", example: "The authorities took steps to provide some security and deployed troops in the area." },
      { verb: "Withdraw", example: "The government decided to withdraw all US troops from Afghanistan." }
    ]},
    { noun: "Attack", entries: [
      { verb: "Launch", example: "A group of insurgents launched an attack on the presidential palace." },
      { verb: "Repel", example: "The security forces vigorously repelled and neutralized this latest attack." }
    ]},
    { noun: "Casualties", entries: [
      { verb: "Inflict", example: "The guerrillas inflicted heavy casualties on the local population." },
      { verb: "Suffer", example: "Our division suffered only light casualties." }
    ]}
  ]},

  { id: "elections", title: "22. Les élections", nouns: [
    { noun: "Election", entries: [
      { verb: "Call", example: "The Prime Minister called an early election because he needed to obtain a strong mandate." },
      { verb: "Hold", example: "In our country, we hold presidential elections once every five years." }
    ]},
    { noun: "Vote", entries: [
      { verb: "Take", example: "Let's take a vote on the issue." },
      { verb: "Cast", example: "You can cast your vote at the local polling station." }
    ]},
    { noun: "Candidate", entries: [
      { verb: "Stand as", example: "She decided to stand as a candidate in the union elections." },
      { verb: "Nominate", example: "Parties traditionally nominate the candidate who has won the primary elections." }
    ]},
    { noun: "Office", entries: [
      { verb: "Run for", example: "He ran for office in the last presidential election." },
      { verb: "Hold", example: "The president holds office for a period of four years." }
    ]},
    { noun: "Majority", entries: [
      { verb: "Win", example: "They failed to win the requisite two-thirds majority." },
      { verb: "Secure", example: "The party just needs 20 seats to secure an overall majority." }
    ]}
  ]}
];

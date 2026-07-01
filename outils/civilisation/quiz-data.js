// Questions du quiz de civilisation, par chapitre
const CIVILISATION_QUIZ = [
  {
    "id": "road-to-independence",
    "title": "USA 1764-1776 : The Road to Independence",
    "questions": [
      {
        "q": "What best describes the ‘‘American state of mind’’ that Crevecoeur tried to capture before the Revolution?",
        "choices": [
          "A rigid attachment to European traditions",
          "A shared sense of equal opportunity, self-determination and freedom among people of very different origins",
          "A desire to return to Britain",
          "A purely economic ambition with no ideal of freedom"
        ],
        "correct": 1,
        "explanation": "Crevecoeur describes colonists of many origins united by opportunity and freedom, the root of the later ‘‘American Dream’’."
      },
      {
        "q": "What was the guiding economic principle governing relations between Britain and its 13 colonies before 1764?",
        "choices": [
          "Free trade",
          "Mercantilism: colonies supply raw materials, buy manufactured goods, no local manufacturing competition",
          "Complete colonial economic independence",
          "A shared currency union"
        ],
        "correct": 1,
        "explanation": "Mercantilism structured colonial trade: raw materials to Britain, manufactured goods back, no colonial manufacturing."
      },
      {
        "q": "Why was the Stamp Act of 1765 more explosive than the Sugar Act of 1764?",
        "choices": [
          "It taxed only enslaved people",
          "It directly taxed printed material, angering powerful and vocal groups (lawyers, journalists, clergymen)",
          "It abolished taxes altogether",
          "It only applied to British citizens in London"
        ],
        "correct": 1,
        "explanation": "By taxing printed material, it hit groups with the means and voice to organize resistance effectively."
      },
      {
        "q": "What happened during the Boston Massacre (March 5, 1770)?",
        "choices": [
          "Colonists dumped tea into Boston harbor",
          "British soldiers fired into a crowd of colonists, killing five",
          "The Declaration of Independence was signed",
          "The Sons of Liberty were officially disbanded"
        ],
        "correct": 1,
        "explanation": "Nervous Redcoats opened fire on an angry crowd, killing five Bostonians — an event used as proof of British tyranny."
      },
      {
        "q": "What was the core argument behind the slogan ‘‘No taxation without representation’’?",
        "choices": [
          "Colonists refused to pay any tax under any circumstances",
          "Since colonists had no representatives in the British Parliament, that Parliament had no legitimate right to tax them",
          "Taxes should only be decided by the King",
          "Representation should be granted only to landowners"
        ],
        "correct": 1,
        "explanation": "The argument was about legitimacy: taxation without political representation was seen as a violation of democratic principles."
      },
      {
        "q": "What does the Gadsden Flag (‘‘Don't Tread on Me’’) symbolize, and what is notable about its use today?",
        "choices": [
          "It symbolizes surrender and is no longer used",
          "It symbolizes resistance to tyranny and individual liberty, and is still used in political demonstrations today",
          "It was invented in the 20th century",
          "It represents loyalty to the British Crown"
        ],
        "correct": 1,
        "explanation": "Born during the Revolution as a symbol of resistance, the flag is still carried at demonstrations today, often for individual rights and limited government."
      },
      {
        "q": "What united the Boston Tea Party, the Battle of Lexington and the Declaration of Independence in the text's narrative?",
        "choices": [
          "They were all peaceful negotiations with no consequences",
          "They were decisive ‘‘actions’’ — turning points where the colonists moved from protest to open confrontation and finally independence",
          "They all happened on the same day",
          "They were all organized directly by King George III"
        ],
        "correct": 1,
        "explanation": "The text groups them under ‘‘6) The Actions’’ as key turning points on the path from resistance to full independence."
      },
      {
        "q": "On what philosophical foundation did Thomas Jefferson's committee build the Declaration of Independence?",
        "choices": [
          "Montesquieu's separation of powers",
          "John Locke's theory of natural rights (life, liberty, property)",
          "Max Weber's Protestant ethic",
          "Divine right of kings"
        ],
        "correct": 1,
        "explanation": "The Declaration set forth a philosophy of human freedom based on Locke's natural rights theory."
      },
      {
        "q": "According to the conclusion of the chapter, what consequence did this Revolutionary experience have for the future Constitution of the United States?",
        "choices": [
          "It made Americans want an even stronger central king",
          "It had no influence on later political choices",
          "The traumatic experience of British authoritarianism made the fear of despotism central to the later drafting of the Constitution",
          "It led the colonies to rejoin the British Empire"
        ],
        "correct": 2,
        "explanation": "The chapter explicitly links this experience to the fear of despotism that would shape the Constitutional debates."
      },
      {
        "q": "Who were the Sons of Liberty?",
        "choices": [
          "A British regiment sent to repress the colonies",
          "A secret society, created by figures like Samuel Adams and Patrick Henry, that organized colonial resistance",
          "An official department of the British government",
          "A group of loyalist merchants supporting the Crown"
        ],
        "correct": 1,
        "explanation": "Founded after the Stamp Act, the Sons of Liberty organized resistance through petitions, assemblies, propaganda and sometimes violence."
      }
    ]
  },
  {
    "id": "us-constitution",
    "title": "The US Constitution : The Supreme Law of the Land",
    "questions": [
      {
        "q": "What two ‘‘traumas’’ shaped the drafting of the US Constitution, according to the text?",
        "choices": [
          "The trauma of losing a war, and the trauma of winning too fast",
          "The trauma of a too-strong government (George III) and the trauma of a too-weak one (Articles of Confederation)",
          "The trauma of having no army, and the trauma of having too large an army",
          "The trauma of religious conflict only"
        ],
        "correct": 1,
        "explanation": "The Framers wanted a government strong enough to function, but not so strong it could become tyrannical like George III's rule."
      },
      {
        "q": "Why was the central government under the Articles of Confederation considered too weak?",
        "choices": [
          "It had too much power over the states",
          "It had no power to collect taxes and little power to enforce rules on the states, failing to create real union",
          "It was controlled entirely by the King",
          "It had no President at all, which was illegal"
        ],
        "correct": 1,
        "explanation": "Without tax power, the central Congress could not maintain order or cohesion, leading to crises like Shays' Rebellion."
      },
      {
        "q": "What event helped convince leaders that a stronger constitution was needed?",
        "choices": [
          "The signing of the Treaty of Paris",
          "Shays' Rebellion, an armed uprising caused by unfair taxation and lack of central oversight",
          "The Boston Tea Party",
          "The election of George Washington as King"
        ],
        "correct": 1,
        "explanation": "Shays' Rebellion showed the dangers of a central government too weak to maintain order, pushing leaders to convene in Philadelphia."
      },
      {
        "q": "What is federalism, as defined in the text?",
        "choices": [
          "Total centralization of all power in Washington D.C.",
          "The sharing of power between national and state governments",
          "Total independence of each state with no national government",
          "A monarchy with regional governors"
        ],
        "correct": 1,
        "explanation": "Federalism divides power between a national government and the state governments, each retaining some autonomy."
      },
      {
        "q": "Why does the Senate give 2 seats to every state regardless of population, while the House of Representatives allocates seats by population?",
        "choices": [
          "It is a historical accident with no logic",
          "It reflects two competing visions of federalism: equal representation of states vs. representation proportional to population",
          "Only rich states get Senate seats",
          "The House represents states and the Senate represents individuals"
        ],
        "correct": 1,
        "explanation": "The Senate reflects the idea that all states are equal; the House reflects the idea that bigger, more populous states deserve more power."
      },
      {
        "q": "What is the difference between ‘‘separation of powers’’ and ‘‘checks and balances’’?",
        "choices": [
          "They are identical concepts",
          "Separation of powers creates 3 independent branches; checks and balances gives each branch some control over the other two",
          "Checks and balances applies only to foreign policy",
          "Separation of powers was invented by the Supreme Court"
        ],
        "correct": 1,
        "explanation": "Separation of powers divides government into legislative, executive and judicial branches; checks and balances then lets each branch limit the others."
      },
      {
        "q": "What compromise was necessary to get the Anti-Federalists to accept ratification of the Constitution?",
        "choices": [
          "Abolishing the Presidency",
          "Adding the Bill of Rights, ten amendments explicitly protecting individual rights and limiting federal power",
          "Giving all power to the states with no federal government",
          "Restoring British rule"
        ],
        "correct": 1,
        "explanation": "The Bill of Rights was the concession that reassured the Anti-Federalists worried about excessive federal power."
      },
      {
        "q": "Why is the US Constitution, despite being over 230 years old, still considered adaptable today?",
        "choices": [
          "It gets entirely rewritten every 50 years",
          "It is short and somewhat vague, leaving room for interpretation (notably by the Supreme Court) and for amendments",
          "It was designed to only apply until 1900",
          "It has never been interpreted differently by different courts"
        ],
        "correct": 1,
        "explanation": "Its brevity leaves room for interpretation (e.g. by the Supreme Court) and the amendment process allows formal changes over time."
      },
      {
        "q": "What does the impeachment process illustrate about the Constitution's design?",
        "choices": [
          "That the President has unlimited power",
          "That checks and balances allow the legislative branch to hold the executive branch accountable for serious abuses of power",
          "That only the Supreme Court can remove a President",
          "That impeachment always results in removal from office"
        ],
        "correct": 1,
        "explanation": "Impeachment is a check by Congress on the President, illustrating the broader logic of checks and balances — even though historically no impeached president has been removed by the Senate."
      },
      {
        "q": "What is the theoretical basis of the Bill of Rights, inspired by John Locke?",
        "choices": [
          "The theory of the divine right of kings",
          "The theory of natural rights: freedoms granted by nature/God, not by the state, which the state cannot legitimately take away",
          "The theory of mercantilism",
          "The theory of checks and balances"
        ],
        "correct": 1,
        "explanation": "Locke's natural rights theory holds that fundamental freedoms exist independently of government and should be protected from state overreach."
      }
    ]
  },
  {
    "id": "british-empire",
    "title": "The Empire on which the sun never sets",
    "questions": [
      {
        "q": "According to the text, what was the main internal division within the British Empire?",
        "choices": [
          "A divide between Catholic and Protestant colonies",
          "A racial divide between self-governing white dominions and the rest of the Empire, ruled by whites without self-government",
          "A divide based only on language",
          "There was no significant internal division"
        ],
        "correct": 1,
        "explanation": "The Empire's main division was racial: white dominions moved towards self-government while the rest remained under direct control."
      },
      {
        "q": "What effect did the Limited Liability Act of 1855 have on British expansion?",
        "choices": [
          "It discouraged entrepreneurs from taking economic risks abroad",
          "It protected company owners from personal responsibility for company debts, encouraging risk-taking and expansion overseas",
          "It banned all foreign trade",
          "It nationalized all British companies"
        ],
        "correct": 1,
        "explanation": "By removing personal financial risk, it encouraged more individuals to invest and try their luck overseas, fuelling imperial expansion."
      },
      {
        "q": "How does the law of primogeniture help explain British imperial expansion?",
        "choices": [
          "It guaranteed equal inheritance for all sons, discouraging emigration",
          "Because only the eldest son inherited the family estate, many ‘‘second sons’’ sought their fortune abroad, fuelling colonial entrepreneurship",
          "It only applied to daughters",
          "It was abolished before the Empire existed"
        ],
        "correct": 1,
        "explanation": "Second and third sons, left with no inheritance, had strong incentives to seek fortune and status in the colonies."
      },
      {
        "q": "How did the East India Company evolve from a trading company into a political ruler of India?",
        "choices": [
          "The British government directly appointed it to rule India from 1600",
          "It built its own private army to protect trade interests, gradually gaining political control, until the Sepoy Mutiny led to direct British rule (the Raj)",
          "It never had any military or political role",
          "Indian princes gave it power voluntarily with no conflict"
        ],
        "correct": 1,
        "explanation": "Profit-driven militarization led to a ‘‘vicious spiral’’ of increasing political control, ending in direct rule after the 1857 Sepoy Mutiny."
      },
      {
        "q": "Why were maritime choke points like the Suez Canal, Gibraltar or the Straits of Malacca strategically important to Britain?",
        "choices": [
          "They had no strategic value, only symbolic",
          "Controlling them allowed Britain to secure and dominate global maritime trade routes",
          "They were used only for tourism",
          "They were controlled exclusively by France"
        ],
        "correct": 1,
        "explanation": "Controlling these narrow passages allowed Britain to dominate global shipping routes essential to trade and naval power."
      },
      {
        "q": "What triggered the ‘‘Scramble for Africa’’ in the late 19th century?",
        "choices": [
          "African kingdoms requesting European protection",
          "New transportation technology from the Industrial Revolution made inland colonization possible, triggering a rush among European powers",
          "The end of the Suez Canal's construction",
          "The abolition of the Royal Navy"
        ],
        "correct": 1,
        "explanation": "New transport technologies made inland Africa newly accessible, sparking a competitive rush among European powers to claim territory."
      },
      {
        "q": "What is the core idea behind the concept of the ‘‘White Man's Burden’’?",
        "choices": [
          "That colonization was purely for Britain's economic benefit, openly admitted as such",
          "That British/European civilization was superior and had a duty to ‘‘civilize’’ supposedly inferior peoples, for their own good",
          "That colonized peoples asked to be ruled by Britain",
          "That the Empire had no ideological justification"
        ],
        "correct": 1,
        "explanation": "It was the (self-serving) ideological justification that imperial rule served the ‘‘greater good’’ of ‘‘civilizing’’ colonized peoples."
      },
      {
        "q": "How did Britain manage to rule vast colonies like India with only about 100,000 officials?",
        "choices": [
          "By using indirect rule: delegating domestic authority to local princes while controlling external affairs, defence and trade",
          "By replacing the entire local population with British settlers",
          "By granting full independence immediately",
          "By relying solely on the Royal Navy stationed inland"
        ],
        "correct": 0,
        "explanation": "Indirect rule let local rulers manage domestic affairs while Britain controlled the ‘‘big things’’: defence, taxation, trade and law."
      },
      {
        "q": "How did the British use the existing Indian caste system to their advantage?",
        "choices": [
          "They abolished it immediately upon arrival",
          "They used and reinforced this pre-existing social division to control the population more easily, following a ‘‘divide and rule’’ logic",
          "They merged all castes into a single class",
          "They ignored it completely"
        ],
        "correct": 1,
        "explanation": "The British exploited an existing division of Indian society (e.g. via the 1871 Criminal Tribes Act) rather than creating a new administrative system from scratch."
      },
      {
        "q": "What does the term ‘‘Pax Britannica’’ refer to, and why is it a matter of debate?",
        "choices": [
          "A period of total absence of British military power, uncontested by historians",
          "A relative 19th-century peace guaranteed by British naval supremacy — debated because this ‘‘peace’’ was often achieved through violent subjugation",
          "An official peace treaty signed in 1901",
          "A period when Britain lost all its colonies"
        ],
        "correct": 1,
        "explanation": "The text explicitly raises the question: ‘‘Is it really peace when it's been obtained after violent subjugation?’’"
      }
    ]
  }
];

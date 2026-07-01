// Contenu des chapitres de civilisation (genere a partir des PDF de reference)
const CIVILISATION_CHAPTERS = [
  {
    "id": "road-to-independence",
    "title": "USA 1764-1776 : The Road to Independence",
    "period": "1764 - 1776",
    "cover": "images/road/01-statue-george.jpg",
    "intro": "Comment l'attachement des colons américains à la liberté, confronté à l'autoritarisme britannique, a mené à la Déclaration d'Indépendance de 1776.",
    "sections": [
      {
        "id": "objectives",
        "heading": "Objectives",
        "paragraphs": [
          "The objective of this presentation is to show that the decision of the American Colonies to become independent was based on a typically American state of mind, an attachment to freedom which, when confronted to manifestations of authoritarianism from Britain, the mother country, materialized in the form of symbols, people, actions, which eventually led to a document celebrating political sovereignty and individual freedom : the Declaration of Independence of the United States."
        ],
        "image": {
          "src": "images/road/01-statue-george.jpg",
          "caption": "Statue of George III demolished by the crowd, New York, 1776."
        }
      },
      {
        "id": "1a",
        "heading": "1 A) Geography",
        "paragraphs": [
          "Traditionally, when we tell the story of “Colonial America” in the 17th and 18th centuries, we are talking about the British colonies along the East Coast: 13 colonies (New Hampshire, Massachusetts, Connecticut, Rhode Island, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia).",
          "At the time, these colonies provided economic opportunity and religious freedom which attracted millions of immigrants: in 1700, there were about 250,000 European and African settlers in North America's 13 English colonies. By 1775, on the eve of revolution, there were nearly 2.5 million."
        ],
        "image": {
          "src": "images/road/02-13colonies-map.jpg",
          "caption": "The 13 original British colonies along the East Coast."
        }
      },
      {
        "id": "1b",
        "heading": "1 B) Mentality",
        "paragraphs": [
          "The millions of colonists living in the 13 British colonies came from different geographical areas: England, Scotland, Ireland, but also Germany, France, Holland, Sweden... and of course Africa. They had different cultures and customs, and yet were united through a common spirit, an attachment to freedom (well... we're talking about those who were actually free — we'll talk about the slaves later).",
          "This American state of mind was described by Hector St John de Crevecoeur, a French-American writer who was one of the first to portray American society as characterized by the principles of equal opportunity and self-determination, and to describe what would be later called the American Dream.",
          "« What then is the American, this new man? He is either an European, or the descendant of an European [...]. He is an American, who, leaving behind him all his ancient prejudices and manners, receives new ones from the new mode of life he has embraced [...]. Here individuals of all nations are melted into a new race of men. » (Hector St. John Crevecoeur, Letters from an American Farmer, 1781.)"
        ],
        "image": null
      },
      {
        "id": "1c",
        "heading": "1 C) Influence of the Enlightenment",
        "paragraphs": [
          "During the 18th century, referred to as an Age of Reason, new, often radical ideas, swept through the salons and universities, altering the way educated Europeans thought about God, nature and society. This intellectual revolution, called the Enlightenment, involved the work of Europe's greatest minds, men like Newton and Locke, Voltaire and Hume.",
          "These ideas spread to the New World, where for many Americans, the appeal of the Enlightenment was its focus on a search for useful knowledge, ideas and inventions that would improve the quality of human life and get rid of obscurantism and authoritarianism.",
          "Benjamin Franklin (1706-1790), one of the Founding Fathers, epitomized the Enlightenment in colonial America: philosopher, journalist, inventor..."
        ],
        "image": {
          "src": "images/road/03-franklin.jpg",
          "caption": "Benjamin Franklin (1706-1790)."
        }
      },
      {
        "id": "1d",
        "heading": "1 D) Ties with Great Britain",
        "paragraphs": [
          "The guiding principle in the British Empire was mercantilism: colonies should supply Britain, the mother country, with raw materials (tobacco, cotton...) and not compete in manufacturing.",
          "In fact, in the 13 Colonies, before 1764, Great Britain had not imposed many strict measures, nor sent enough executive agents to enforce them. With the remoteness afforded by a vast ocean, the colonies had never thought of themselves as subservient. They rather considered themselves as semi-autonomous states, having only a loose association with authorities in London."
        ],
        "image": {
          "src": "images/road/04-mercantilism-diagram.jpg",
          "caption": "Mercantilism briefly explained: raw materials flow to the mother country, manufactured goods flow back to the colonies."
        }
      },
      {
        "id": "cp1",
        "type": "checkpoint",
        "question": "According to the text, what best explains the shared « American state of mind » described by Crevecoeur before the Revolution?",
        "choices": [
          "A single ethnic group imposed its culture on all colonists",
          "Colonists from very different origins were united by a common attachment to freedom and self-determination",
          "All colonists were already citizens with full voting rights in Britain",
          "The colonies had no contact with Enlightenment ideas from Europe"
        ],
        "correct": 1,
        "explanation": "Crevecoeur describes colonists of many different origins (England, Germany, France...) « melted into a new race of men », united by freedom and opportunity — not by a shared ethnicity, and very much in contact with Enlightenment thought (Franklin)."
      },
      {
        "id": "2a",
        "heading": "2 A) The Sugar Act of 1764",
        "paragraphs": [
          "In the mid 18th century, the British government needed more money to support the growing Empire and its army, and decided that the 13 Colonies would have to contribute.",
          "The 1st step in inaugurating the new system was the passage of the Sugar Act of 1764: it put a modest duty on molasses, wine, coffee and a number of other luxury items. The power of the British Parliament to tax colonial commodities for the regulation of trade had long been accepted in theory, though not always in practice, but the power to tax ‘‘for improving the revenue of the Kingdom’’, as stated in the act, was new, and infuriated American merchants."
        ],
        "image": null
      },
      {
        "id": "2b",
        "heading": "2 B) The Stamp Act of 1765",
        "paragraphs": [
          "The act which sparked organized resistance was the Stamp Act, passed in 1765: it imposed a direct tax on all printed material in the North American colonies. This act aroused the hostility of the most powerful and articulate groups in the population: journalists, lawyers, clergymen, merchants and businessmen.",
          "After months of street violence, the British decided in March 1766 to repeal the Stamp Act. But the stage for the American Revolution had already been set."
        ],
        "image": {
          "src": "images/road/05-stamp-act-penny.jpg",
          "caption": "Example of the type of stamp which had to be appended to all printed documents."
        }
      },
      {
        "id": "2c",
        "heading": "2 C) The Boston Massacre",
        "paragraphs": [
          "Boston, Massachusetts, was a center of radical revolutionary ideas and sentiment. To repress uprisings, Britain sent troops to impose order. From 1768 to 1770, Boston existed in a state of virtual British military occupation — one out of three men in the city was a Redcoat, a common nickname for British soldiers due to the color of their uniforms.",
          "On March 5th 1770, one confrontation turned violent. As a mob of angry townspeople encircled a British soldier shouting insults and throwing rocks and sticks, nervous Redcoats opened fire into the crowd, killing five Bostonians and wounding several others. Known to history as the Boston Massacre, the incident was pictured as proof of Britain's tyranny. John Adams later claimed that the “foundation of American independence was laid” that fateful day of March 5, 1770."
        ],
        "image": {
          "src": "images/road/06-boston-massacre.jpg",
          "caption": "Contemporary engraving of the Boston Massacre, March 5, 1770."
        }
      },
      {
        "id": "3",
        "heading": "3) The actors : the Sons of Liberty",
        "paragraphs": [
          "After the passage of the Stamp Act in 1765, agitators such as Samuel Adams and Patrick Henry decided to organize the rebellion and created a secret society called the Sons of Liberty.",
          "The Sons of Liberty rallied support for colonial resistance through the use of petitions, assemblies, and propaganda, and they sometimes resorted to violence against British officials. Instrumental in preventing the enforcement of the Stamp Act, they remained an active pre-Revolutionary force against the crown."
        ],
        "image": null
      },
      {
        "id": "cp2",
        "type": "checkpoint",
        "question": "What made the Stamp Act (1765) especially explosive compared to the Sugar Act (1764)?",
        "choices": [
          "It taxed printed material, directly hitting powerful, vocal groups like lawyers, journalists and clergymen",
          "It only affected enslaved people, so colonists were indifferent to it",
          "It was immediately and permanently accepted without protest",
          "It abolished all British taxes on the colonies"
        ],
        "correct": 0,
        "explanation": "The Stamp Act taxed printed material directly, angering the most articulate and influential colonists (lawyers, journalists, clergymen, merchants) — exactly the groups able to organize effective resistance."
      },
      {
        "id": "4",
        "heading": "4) The argument : « No taxation without representation »",
        "paragraphs": [
          "Britain was, and still is, a constitutional monarchy governed within the framework of a parliamentary democracy. British citizens voted for Members of Parliament, who then represented the people and wrote pieces of legislation.",
          "However, American colonists were not British citizens: they did not have the right to vote and elect British Members of Parliament. Samuel Adams and Benjamin Franklin were among the most influential voices arguing that since the American colonies were not represented in the British Parliament, that legislative body had no right to tax them. Acts such as the Sugar Act or the Stamp Act were described as unfair, a form of authoritarianism, and a violation of the principles of democracy. Hence the catchy slogan used in demonstrations: “No taxation without representation!”"
        ],
        "image": {
          "src": "images/road/07-no-taxation-cartoon.jpg",
          "caption": "‘‘No taxation without representation’’ — contemporary political cartoon."
        }
      },
      {
        "id": "5a",
        "heading": "5 A) The Gadsden Flag",
        "paragraphs": [
          "Here are elements considered as symbols of the colonists' fight against British rule. They are still famous today and represent a spirit of independence.",
          "The Gadsden Flag, featuring a coiled rattlesnake and the phrase ‘‘Don't Tread on Me’’, originated during the American Revolution as a symbol of resistance against British oppression. It represents liberty, vigilance, and a warning against tyranny. Today, the flag is still used in demonstrations, often representing individual rights, limited government, and personal freedoms, making it a powerful political symbol."
        ],
        "image": {
          "src": "images/road/09-dont-tread-flag.jpg",
          "caption": "The Gadsden Flag: ‘‘Don't Tread on Me’’."
        },
        "image2": {
          "src": "images/road/08-modern-protest-photo.jpg",
          "caption": "The Gadsden flag is still carried at political demonstrations in the USA today — an illustration of how a Revolutionary-era symbol can be reclaimed by later movements."
        }
      },
      {
        "id": "5b",
        "heading": "5 B) Give me liberty or give me death",
        "paragraphs": [
          "The famous and catchy quote ‘‘Give me liberty or give me death’’ was part of a speech by one of the Sons of Liberty and Founding Father, Patrick Henry, at a convention in 1775, to convince the audience of the necessity to enter the Revolutionary War in order to defend their freedom.",
          "The speech was so inspirational, and the speaker so motivational, that he actually caused a large number of people to willingly enter into the war against England in order to fight for their freedom."
        ],
        "image": null
      },
      {
        "id": "5c",
        "heading": "5 C) The Liberty Tree",
        "paragraphs": [
          "In 1765, a group of nine patriots who called themselves the Loyal Nine — a precursor of the Sons of Liberty — began to plan resistance to the Stamp Act. They chose an old elm tree in Boston as the site of their first protest, declaring it the “Tree of Liberty.”",
          "Angry colonists now had a voice — and a symbol. They began to meet regularly beneath the tree, and its fame quickly spread to other colonies. Even after the revolution, liberty trees remained a potent symbol of the power of rebellion and public protest: when revolution broke out in France in 1789, revolutionaries began to name and plant their own liberty trees."
        ],
        "image": {
          "src": "images/road/10-hanging-tree.jpg",
          "caption": "18th-century engraving referencing the Liberty Tree tradition."
        }
      },
      {
        "id": "cp3",
        "type": "checkpoint",
        "question": "Why does the text present the Gadsden Flag, Patrick Henry's speech and the Liberty Tree together, in a section called ‘‘The symbols’’?",
        "choices": [
          "Because they are unrelated anecdotes with no shared purpose",
          "Because each one, in a different form (object, words, place), rallied colonists around the same idea of resisting tyranny in the name of liberty",
          "Because they were all created by the British government to control the colonists",
          "Because they only became meaningful after 1800"
        ],
        "correct": 1,
        "explanation": "A flag, a speech and a tree are very different kinds of symbols, but the text groups them because they all embody and spread the same idea: resistance to British authoritarianism in the name of liberty."
      },
      {
        "id": "6a",
        "heading": "6 A) The Boston Tea Party",
        "paragraphs": [
          "Here are 3 events that you can remember as turning points — key moments when the colonists acted against British rule, decisive moments in their path towards independence.",
          "In 1773, the East India Company was granted a monopoly on all tea exported to the colonies by the British Parliament. This monopoly was eliminating the independent colonial merchants, who protested. In Boston, a band of men led by the Sons of Liberty and disguised as Mohawk Indians boarded three English ships and dumped crates of tea into the Boston harbor, destroying almost 10 thousand pounds sterling worth of tea (about $1.7 million today) belonging to the British East India Company. The incident, called at the time the ‘‘Destruction of the Tea’’, would later become known as the Boston Tea Party."
        ],
        "image": {
          "src": "images/road/11-boston-tea-party.jpg",
          "caption": "The Boston Tea Party, December 1773."
        }
      },
      {
        "id": "6b",
        "heading": "6 B) The ‘‘shot heard round the world’’",
        "paragraphs": [
          "In February 1775, British Parliament declared that the colony of Massachusetts was in a state of rebellion and sent thousands of troops to Boston. The Massachusetts colonial assembly responded by directing townships to ready their militias.",
          "British soldiers and rebel militiamen (Patriots) confronted each other at Lexington on April 19. A British officer demanded that the militia disarm and disperse, and in the ensuing confusion, shots were fired. To this day, there is uncertainty over who fired first. Eight militiamen were killed and only one British soldier wounded. It was just a skirmish, but the American Revolutionary War had begun."
        ],
        "image": null
      },
      {
        "id": "6c",
        "heading": "6 C) The Declaration of Independence",
        "paragraphs": [
          "In 1775, King George III declared the colonies to be in a state of rebellion. To assert the legitimacy of their independence, a committee of five colonists, headed by Thomas Jefferson, was appointed and drafted the Declaration of Independence, adopted July 4, 1776.",
          "This cornerstone document not only announced the birth of a new nation, it also set forth a philosophy of human freedom, based on John Locke's theory of natural rights, according to which all humans have certain rights — including life, liberty and property — which are not dependent on the laws or customs of any particular culture or government. It inspired mass fervor for the American cause around the world."
        ],
        "image": null
      },
      {
        "id": "conclusion",
        "heading": "Conclusion",
        "paragraphs": [
          "When confronted to what was perceived as manifestations of authoritarianism by Britain, the American state of mind and its attachment to individual freedom and democracy led the American colonists to rebel against a tyrannical mother country.",
          "As we will see next, the years and steps to come — the necessity to decide on a form of government — were profoundly shaped by this traumatic experience: the fear of any form of despotism was central in the drafting of the Constitution of the United States."
        ],
        "image": null
      },
      {
        "id": "cp4",
        "type": "checkpoint",
        "question": "On what philosophical theory did the Declaration of Independence rely to justify American independence?",
        "choices": [
          "Montesquieu's separation of powers",
          "John Locke's theory of natural rights (life, liberty and property, independent of any government)",
          "Max Weber's Protestant ethic",
          "The divine right of kings"
        ],
        "correct": 1,
        "explanation": "The text explicitly states the Declaration ‘‘set forth a philosophy of human freedom, based on John Locke's theory of natural rights’’."
      },
      {
        "id": "reference",
        "heading": "Repères : chronologie, figures, glossaire",
        "paragraphs": [
          "Timeline — 1764: Sugar Act. 1765: Stamp Act. 1770: Boston Massacre. 1773: Boston Tea Party. 1775: Battle of Lexington, Washington named commander-in-chief. 1776: Declaration of Independence.",
          "Famous figures — Benjamin Franklin (1706-1790): Founding Father, philosopher, inventor, major figure of the American Enlightenment. George III: King of Great Britain (1760-1820). George Washington (1732-1799): Founding Father, military general, first US president. Hector St John de Crevecoeur (1735-1813): French-American writer who described the American Dream. Patrick Henry (1736-1799): ‘‘Give me liberty or give me death’’. Samuel Adams (1722-1803): leader of the Sons of Liberty.",
          "Glossary — Mercantilism: economic system where colonies supply raw materials to and buy manufactured goods from the mother country. Duty: a tax on goods. Enlightenment: 18th-century philosophical movement favouring reason over dogma. Founding Fathers: Americans who fought for independence and wrote the Constitution. Authoritarianism: belief that people must obey completely, without freedom to act as they wish. Democracy: government by the people or their elected representatives. Militia: an army-like organisation of non-professional soldiers."
        ],
        "image": null
      }
    ]
  },
  {
    "id": "us-constitution",
    "title": "The US Constitution : The Supreme Law of the Land",
    "period": "1777 - aujourd'hui",
    "cover": "images/constitution/01-constitution-parchment.jpg",
    "intro": "Comment les rédacteurs de la Constitution américaine, traumatisés par la tyrannie de George III mais aussi par la faiblesse du premier gouvernement fédéral, ont inventé un système de pouvoirs limités et équilibrés.",
    "sections": [
      {
        "id": "objectives",
        "heading": "Objectives",
        "paragraphs": [
          "The objective of this presentation is to show that, traumatized by the memories of George III's tyrannical behaviour, but also influenced by the experience of the dangers of a weak form of government, the authors of the Constitution of the USA managed to define a frame to organize power in a self-regulating way — a constitution strong enough to grant the necessary powers to certain institutions, but also careful enough to make sure any form of abuse of power would be repressed.",
          "The result was a surprisingly short but clear and effective text, constantly subject to interpretation, and which is today the world's longest surviving written charter of government."
        ],
        "image": {
          "src": "images/constitution/01-constitution-parchment.jpg",
          "caption": "The US Constitution, ‘‘We the People...’’"
        }
      },
      {
        "id": "1a",
        "heading": "A) The trauma of a strong form of government",
        "paragraphs": [
          "The War of Independence, or Revolutionary War, lasted from 1775 to 1783, when Great Britain formally recognized the independence of the United States in the Treaty of Paris. Throughout the course of the war, an estimated 6,800 Americans were killed in action; historians believe at least 17,000 more died of disease, including 8,000-12,000 prisoners of war.",
          "In addition to these physical casualties, the trauma of life under what was perceived as despotism was to leave a mark in the debates to come."
        ],
        "image": null
      },
      {
        "id": "1b",
        "heading": "B) The trauma of a weak form of government",
        "paragraphs": [
          "Immediately after the Declaration of Independence, a national government had to be formed. On the one hand, the 13 States wanted to stay united: union makes you stronger. On the other hand, they also wanted to keep a form of sovereignty and not submit totally to a central government.",
          "Representatives met in 1777 to write the Articles of Confederation, the first written constitution of the United States. But traumatized by George III's tyrannical behaviour, and fearing a government that would become too strong, they went too far the other way: the central government created by the Articles of Confederation had no power to collect taxes, and not much power to force the states to follow the rules — too weak to create real union.",
          "Since the central Congress had no power to collect taxes, the states were in charge of it, which led, in the absence of central supervision, to cases of unfair taxation and corruption. To protest, some citizens organized armed rebellions: the most famous was Shays' Rebellion, after its leader Daniel Shays. Pressure was mounting: General George Washington came out of retirement to promote a strong national government."
        ],
        "image": {
          "src": "images/constitution/02-shays-grave.jpg",
          "caption": "Daniel Shays' gravestone: leader of the 1786-1787 Shays' Rebellion that influenced the creation of the US Constitution."
        }
      },
      {
        "id": "1c",
        "heading": "C) The Constitutional Convention",
        "paragraphs": [
          "Uprisings like Shays' Rebellion convinced leaders around the country to act. Delegates from the various states met in Philadelphia in the summer of 1787, with instructions to revise the Articles of Confederation.",
          "In just a few months, these 55 delegates — known as the Framers, including George Washington, Benjamin Franklin, Alexander Hamilton and James Madison — met and drafted the seven-article document which was to become the Constitution of the young Republic."
        ],
        "image": {
          "src": "images/constitution/03-convention-painting.jpg",
          "caption": "‘‘Washington as Statesman at the Constitutional Convention’’, by J.B. Stearns, 1856."
        }
      },
      {
        "id": "cp1",
        "type": "checkpoint",
        "question": "Why did the Framers meet in Philadelphia in 1787?",
        "choices": [
          "To draft the Declaration of Independence",
          "To revise the Articles of Confederation, whose central government was too weak to function",
          "To negotiate the Treaty of Paris with Britain",
          "To organize Shays' Rebellion"
        ],
        "correct": 1,
        "explanation": "The delegates met ‘‘with instructions to revise the Articles of Confederation’’, whose central government had proven too weak (no power to tax, unable to respond effectively to Shays' Rebellion)."
      },
      {
        "id": "2a",
        "heading": "2 A) Federalism",
        "paragraphs": [
          "Federalism is one of the most important and innovative concepts in the U.S. Constitution, although the word never appears there. Federalism is the sharing of power between national and state governments — a bit like the way the European Union is organized: every member has its own identity, but is also part of a larger group.",
          "Federalism poses certain problems: it's not easy to decide how much power each state should have in the central government, and especially in Congress. Two visions were possible: either all states are equal and represented equally (hence 2 Senators per state in the Senate, regardless of size), or bigger, more populous states should have more power (hence a number of Representatives calculated according to population in the House — today California has 52 Representatives and Alaska 1).",
          "This notion of federalism appears in the preamble: ‘‘We the People of the United States, in order to form a more perfect union.’’"
        ],
        "image": {
          "src": "images/constitution/04-state-national-handshake.jpg",
          "caption": "Federalism: sharing of power between state and national government."
        }
      },
      {
        "id": "2b",
        "heading": "2 B) Democracy",
        "paragraphs": [
          "The Framers didn't forget the ‘‘No taxation without representation’’ slogan: democracy — a system of government in which people choose their rulers by voting for them — is central in the Constitution.",
          "Representatives are elected directly by the inhabitants of the states. The President is also elected, although indirectly, by the people. Since 1913, Senators have also been elected directly by the people."
        ],
        "image": null
      },
      {
        "id": "2c",
        "heading": "2 C) Separation of powers",
        "paragraphs": [
          "Another principle of the Constitution, inspired by Montesquieu's book L'Esprit des Lois, is the separation of powers among separate and independent bodies.",
          "Such a separation is supposed to limit the possibility of arbitrary excesses by government, since the three main stages related to a piece of legislation (the making, the executing, and the administering of laws) are divided into 3 branches."
        ],
        "image": {
          "src": "images/constitution/05-three-branches.jpg",
          "caption": "The 3 branches of U.S. government: legislative, executive, judicial."
        }
      },
      {
        "id": "2d",
        "heading": "2 D) Checks and balances",
        "paragraphs": [
          "To further limit the possibility of arbitrary excesses, the Framers designed a system called Checks and balances, in which each branch has a certain form of control over the other two, to make sure none would get the upper hand."
        ],
        "image": {
          "src": "images/constitution/07-checks-and-balances.jpg",
          "caption": "The system of checks and balances: each branch controls the other two."
        }
      },
      {
        "id": "cp2",
        "type": "checkpoint",
        "question": "What is the key difference between ‘‘separation of powers’’ and ‘‘checks and balances’’ as presented in the text?",
        "choices": [
          "They are exactly the same thing under two different names",
          "Separation of powers divides government into 3 independent branches; checks and balances then gives each branch a form of control over the other two",
          "Checks and balances abolishes the separation of powers",
          "Separation of powers only applies to the states, checks and balances only to the federal government"
        ],
        "correct": 1,
        "explanation": "Separation of powers creates 3 distinct branches (legislative, executive, judicial); checks and balances is the further mechanism ensuring each branch can limit the others, preventing any one from dominating."
      },
      {
        "id": "3a",
        "heading": "3 A) Necessary ratification",
        "paragraphs": [
          "The Constitution was just a proposition, with no value unless accepted by the States: to be validated, it had to be ratified by a minimum of 9 of the 13 states (though the Framers hoped all 13 would ratify it, for a real union)."
        ],
        "image": {
          "src": "images/constitution/08-united-we-stand.jpg",
          "caption": "‘‘Constitutional Ratification’’ cartoon, ‘‘The Federal Pillars’’, 1789 — note the importance given to unity."
        }
      },
      {
        "id": "3b",
        "heading": "3 B) Federalists vs. Anti-Federalists",
        "paragraphs": [
          "Citizens debated the merits of the Constitution in newspaper articles, letters, sermons and coffeehouse discussions across America. Some of the most famous arguments came from Alexander Hamilton, John Jay and James Madison in the Federalist Papers (1787-1788), which supported the Constitution and argued for the necessity of a strong form of government. The Federalist Papers are considered one of the most significant American contributions to political philosophy.",
          "The ideological opponents of the Federalists were the Anti-Federalists — figures like Samuel Adams and John Hancock — who thought the government described in the Constitution was too strong and worried it would inevitably become tyrannical, threatening the rights of citizens and states."
        ],
        "image": {
          "src": "images/constitution/09-federalist-papers.jpg",
          "caption": "The Federalist Papers & Anti-Federalist Papers."
        }
      },
      {
        "id": "3c",
        "heading": "3 C) The Adding of a Bill of Rights",
        "paragraphs": [
          "To offer a concession to the Anti-Federalists and ensure all the states would ratify the Constitution, the Framers accepted to add an extra check on federal power: the Bill of Rights.",
          "The Bill of Rights consists of 10 amendments that explicitly guarantee certain rights and protections to US citizens by limiting the power of the federal government. It codifies the theory of natural rights, inspired by John Locke, according to which humans are granted certain freedoms by God, and the state should not have the power to usurp those rights."
        ],
        "image": {
          "src": "images/constitution/10-bill-of-rights.jpg",
          "caption": "The Bill of Rights: the first 10 amendments to the Constitution."
        }
      },
      {
        "id": "3d",
        "heading": "3 D) Final ratification",
        "paragraphs": [
          "The Federalists' arguments, and the addition of the Bill of Rights, convinced everybody: the Constitution was ratified by all the states in 1790.",
          "As Benjamin Franklin said: ‘‘I consent, Sir, to this Constitution because I expect no better, and because I am not sure that it is not the best.’’"
        ],
        "image": null
      },
      {
        "id": "cp3",
        "type": "checkpoint",
        "question": "What compromise finally convinced the Anti-Federalists to accept the Constitution?",
        "choices": [
          "The abolition of the Senate",
          "The addition of the Bill of Rights, a set of 10 amendments explicitly limiting federal power to protect individual rights",
          "The replacement of Congress by a king",
          "The cancellation of all federal taxes"
        ],
        "correct": 1,
        "explanation": "The text states the Framers ‘‘accepted to add [...] an extra check on federal power [...]: the Bill of Rights’’, which convinced the Anti-Federalists, worried about a government becoming too strong."
      },
      {
        "id": "4a",
        "heading": "4 A) Constant interpretation",
        "paragraphs": [
          "The US Constitution is the oldest Constitution in the world. How can it still be adapted to our time period? It is surprisingly short — only 4,500 words — and because it is short, it is also vague, and subject to interpretation, which makes it adaptable to the evolution of society and mentalities.",
          "The Supreme Court, whose power is to invalidate laws, bases its decisions on its reading of the Constitution. In 2022, in Dobbs v. Jackson Women's Health Association, the Supreme Court decided the Constitution does not protect the right to an abortion, overturning the 1973 decision Roe v. Wade. This reversal shows that the decisions of the Court can evolve with time and political contexts."
        ],
        "image": {
          "src": "images/constitution/11-supreme-court.jpg",
          "caption": "The 9 Justices of the Supreme Court, whose role is to protect civil rights and liberties by invalidating laws that violate the Constitution."
        }
      },
      {
        "id": "4b",
        "heading": "4 B) The example of impeachment",
        "paragraphs": [
          "Impeachment is a good example of checks and balances: the Constitution states a president ‘‘shall be removed from office on impeachment for, and conviction of, treason, bribery, or other high crimes or misdemeanours’’ — essentially, an abuse of power by a high-level official. It was intended by the Framers as a tool to prevent presidents from becoming tyrants.",
          "The impeachment process is rarely used: the only U.S. presidents impeached were Andrew Johnson (1868), Bill Clinton (1998), and Donald Trump (2019 and 2021). In all four cases, the Senate found the president not guilty. But even without removal, the threat of impeachment has had a dissuasive effect — Richard Nixon resigned in 1974 when threatened with impeachment over the Watergate break-in."
        ],
        "image": null
      },
      {
        "id": "4c",
        "heading": "4 C) Amendments",
        "paragraphs": [
          "When the Constitution was written, the Framers knew their creation was not perfect, and that other people would have good ideas to improve it. They wanted change to be neither too easy nor too hard. That is why the Framers added an amendment process: a change that can be added to the Constitution or modify an older part of it. The Bill of Rights is the first 10 amendments; there are 27 in total today."
        ],
        "image": null
      },
      {
        "id": "cp4",
        "type": "checkpoint",
        "question": "Why is the impeachment process considered an example of ‘‘checks and balances’’ in action?",
        "choices": [
          "Because it lets the President dissolve Congress",
          "Because it gives Congress (legislative branch) a way to remove a President (executive branch) who abuses power — one branch controlling another",
          "Because it automatically removes any president after 8 years",
          "Because only the Supreme Court can vote on it"
        ],
        "correct": 1,
        "explanation": "Impeachment allows the legislative branch to check the executive branch by removing a president guilty of ‘‘treason, bribery, or other high crimes or misdemeanours’’ — a textbook illustration of one branch controlling another."
      },
      {
        "id": "reference",
        "heading": "Repères : chronologie, figures, glossaire",
        "paragraphs": [
          "Timeline — 1777: Articles of Confederation. 1783: Treaty of Paris (independence). 1787: Constitutional Convention. 1790: Constitution ratified by all states. 1868: Impeachment of Andrew Johnson. 1974: Nixon resigns under threat of impeachment. 1998: Impeachment of Bill Clinton. 2019 & 2021: Impeachment of Donald Trump.",
          "Famous people — Montesquieu (1689-1755): theorist of the separation of powers. John Locke (1632-1704): theory of natural rights. Alexander Hamilton (1755-1804): co-writer of the Federalist Papers. James Madison (1751-1836): ‘‘Father of the Constitution’’, co-writer of the Federalist Papers, US president 1809-1817. John Roberts (born 1955): Chief Justice of the Supreme Court since 2005.",
          "Glossary — Framer: a delegate who wrote the US Constitution. Legislative power: authority to make and repeal laws. Executive power: authority to enforce laws. Judicial power: authority to interpret and apply the law. Federal: relating to the central government. Federalism: system where states give up some power to a central authority. Republic: a country without a monarch, governed via elected representatives. Impeachment: process of charging an official with a serious crime. Checks and balances: mutual restraint among branches of government. Bill of Rights: the first 10 amendments (1791), guaranteeing individual liberty."
        ],
        "image": null
      }
    ]
  },
  {
    "id": "british-empire",
    "title": "The Empire on which the sun never sets",
    "period": "18e - 20e siècle",
    "cover": "images/empire/01-queen-victoria.jpg",
    "intro": "Comment le Royaume-Uni a construit le plus vaste empire de l'Histoire, entre motivations économiques, militaires et idéologiques.",
    "sections": [
      {
        "id": "objectives",
        "heading": "Objectives",
        "paragraphs": [
          "The expansion of Europe in the 18th and 19th centuries was one of the most significant phenomena to shape the modern world. A Malayan author wrote in the 1840s: ‘I am astonished to see how markedly our world is changing. A new world is being created, the old world destroyed [...]’ — this quotation illustrates the complexity of colonization: both creative and destructive.",
          "Britain was at the center of this phenomenon of expansion: its mighty Empire was so vast it was nicknamed ‘‘the Empire on which the sun never sets’’. Studying its rise will help us answer the question: what drives a people to impose a model of society on another people? What are the driving forces behind imperialism and colonialism?"
        ],
        "image": {
          "src": "images/empire/01-queen-victoria.jpg",
          "caption": "Queen Victoria, Empress of India, symbol of the British Empire at its height."
        }
      },
      {
        "id": "1a",
        "heading": "1 A) Evolution",
        "paragraphs": [
          "As you can see on the graph, throughout the centuries, the British Empire grew, and then decreased. Historians usually identify 4 stages of development: the First Empire was based on mercantilism, and ended with the loss of the American Colonies, which inaugurated a Second Empire based on free trade, encouraged by the Industrial Revolution.",
          "The size of the Empire reached its peak at the beginning of the 20th century (the Third Empire), a period when Britain started to grant more freedom, especially to its white dominions, to avoid tensions. In the middle of the 20th century, the size of the Empire abruptly diminished, especially after World War II: this is called the Fourth Empire. We will focus in this presentation on the second stage of the Empire."
        ],
        "image": {
          "src": "images/empire/02-empire-growth-graph.jpg",
          "caption": "Annual number of proto-states in the British Empire over time."
        }
      },
      {
        "id": "1b",
        "heading": "1 B) Extent",
        "paragraphs": [
          "By the end of the 19th century, Great Britain had extended its power to an unprecedented scale. The British Empire then comprised nearly one quarter of the world's land surface and more than one quarter of its total population. Measured on indicators of power such as political, economic and strategic reach, the British Empire was the world's sole superpower."
        ],
        "image": {
          "src": "images/empire/03-empire-world-map.jpg",
          "caption": "The British Empire in 1914."
        }
      },
      {
        "id": "1c",
        "heading": "1 C) Heterogeneity",
        "paragraphs": [
          "It would be wrong to think that all of Britain's colonies had the same status. The Empire's main division was a racial one. On the ‘white’ side were Britain and the white settlements (later called the white dominions) — the idea was to ‘‘clone’’ British society in a land perceived as virgin and free. You know these countries today, populated in majority by people of European descent: the USA, Australia, Canada, New Zealand and South Africa. These white settlements wanted to be as self-governing as possible.",
          "The rest of the Empire was entirely different: it was an empire of non-whites ruled by whites, and the question of self-government was, until the 20th century, inconceivable.",
          "Fun fact (well, not really fun): being sent to Australia (then New South Wales) was a common sentence for prisoners — a practice abolished in 1853."
        ],
        "image": null
      },
      {
        "id": "cp1",
        "type": "checkpoint",
        "question": "What was the main dividing line within the British Empire, according to the text?",
        "choices": [
          "A religious divide between Protestants and Catholics only",
          "A racial divide between the ‘white’ settler dominions (self-governing) and the rest of the Empire (ruled by whites, without self-government)",
          "A linguistic divide between English and French speakers",
          "There was no division, all colonies were treated identically"
        ],
        "correct": 1,
        "explanation": "The text is explicit: ‘‘The Empire's main division was a racial one’’, between white settlements pushing for self-government and the rest of the Empire, where self-government was ‘‘inconceivable’’ until the 20th century."
      },
      {
        "id": "2a",
        "heading": "2 A) The Industrial Revolution",
        "paragraphs": [
          "In the 19th century, Britain became the first industrialized nation. By the 1800s, steam engines were powering mills, factories, breweries and other manufacturing operations. This rise of productivity created more demand for raw materials to be imported, and more manufactured goods to be exported.",
          "This, coupled with the invention of new means of transportation such as the steamship, led to the intensification of trade, and therefore to the multiplication of business opportunities."
        ],
        "image": {
          "src": "images/empire/04-steam-ship.jpg",
          "caption": "A 19th-century steamship."
        }
      },
      {
        "id": "2b",
        "heading": "2 B) Deregulation of trade",
        "paragraphs": [
          "The First Empire had been based on mercantilism, a highly regulated form of trade, gradually replaced during the 19th century: the government took measures to encourage entrepreneurs. For example, in 1855, it passed the Limited Liability Act, meaning the owner of a company is not personally responsible for the company's debts — freeing entrepreneurs from the fear of losing their personal belongings in case of bankruptcy.",
          "Gradually, free trade replaced trade regulations, and became a signature feature of British expansion."
        ],
        "image": null
      },
      {
        "id": "2c",
        "heading": "2 C) The ambition of second sons",
        "paragraphs": [
          "The tradition in Britain was to organize inheritance according to primogeniture: if you were the eldest son, you inherited everything (titles, estate, wealth); if you were a second or third son, you had nothing. This encouraged many second sons to try their luck in another country.",
          "The spirit of entrepreneurship of these merchants, who had nothing to lose and everything to gain, contributed to the spread of the Empire."
        ],
        "image": {
          "src": "images/empire/05-colonial-manor.jpg",
          "caption": "A stately house bought in 1777 by a Scottish merchant who made his fortune in Jamaica and India — he was a second son."
        }
      },
      {
        "id": "2d",
        "heading": "2 D) The importance of the Protestant ethic",
        "paragraphs": [
          "German sociologist Max Weber, in The Protestant Ethic and the Spirit of Capitalism, argued that the Protestant way of thinking, by giving importance to hard work and economic success, was an important factor in the economic success of Protestant groups.",
          "According to Weber, the predominance of this religion helped develop the spirit of entrepreneurship of the British, which in turn contributed to the spread of the Empire."
        ],
        "image": null
      },
      {
        "id": "2e",
        "heading": "2 E) From economics to politics : the East India Company",
        "paragraphs": [
          "The East India Company (EIC) is a good example of how the original objective, making a profit, started a vicious spiral which inevitably led to political control. Founded in 1600 as a trading company, it soon got a monopoly over the trade of cotton, silk and spices. Because wars between local princes were bad for business, the EIC started recruiting its own private army to pacify the region. Until 1857, an entire continent was ruled by a private company.",
          "The spiral continued: some members of the EIC's army, the Sepoys, started to rebel against growing British influence, leading to brutal repression in 1857 — the Sepoy Mutiny. The British government then decided to officially rule India: the start of the British Raj."
        ],
        "image": {
          "src": "images/empire/06-colonial-battle-painting.jpg",
          "caption": "The Sepoy Mutiny, oil on canvas by Chevalier Louis-William Desanges, c. 1859."
        }
      },
      {
        "id": "cp2",
        "type": "checkpoint",
        "question": "What best summarizes the trajectory of the East India Company described in the text?",
        "choices": [
          "It stayed a purely commercial company and never got involved in politics or the military",
          "It started as a trading company, built its own army to protect its business, and this spiral of control eventually led to direct British political rule over India",
          "It was created by the British government specifically to govern India from the start",
          "It disappeared immediately after the Sepoy Mutiny with no consequences"
        ],
        "correct": 1,
        "explanation": "The text traces a ‘‘vicious spiral’’: profit → private army to protect trade → political control → the Sepoy Mutiny → direct British rule (the Raj)."
      },
      {
        "id": "3a",
        "heading": "3 A) The Royal Navy",
        "paragraphs": [
          "After the Battle of Trafalgar in 1805, Britain became the undisputed ruler of the seas for more than a century. The strict hierarchy of the Royal Navy, its technological advantage and Britain's maritime culture all contributed to British maritime supremacy, helping secure trade with colonies and repress rebellions quickly.",
          "The Naval Defense Act of 1889 required the Royal Navy to possess a number of battleships at least equal to the combined strength of the next two largest navies in the world (France and Russia at the time)."
        ],
        "image": null
      },
      {
        "id": "3b",
        "heading": "3 B) Strategic maritime choke points",
        "paragraphs": [
          "Britain managed to set up colonies to control most of the world's key maritime choke points: the Suez Canal (1869-1956), the Cape of Good Hope (Cape Colony, early 19th century), the Straits of Malacca (Colony of Singapore, 1819), the Falklands (since 1833), Hong Kong (1842), Gibraltar (1713)."
        ],
        "image": null
      },
      {
        "id": "3c",
        "heading": "3 C) The Scramble for Africa",
        "paragraphs": [
          "In the second part of the 19th century, most European Empires realized Africa hadn't really been colonized yet (apart from the coasts), and that it was now possible thanks to new means of transportation from the Industrial Revolution. They rushed, fought one another, and often dispossessed native populations to get ‘‘a slice of the cake’’.",
          "Most of Britain's large African empire was acquired during this period, called the Scramble for Africa. Explorers like Cecil Rhodes dreamt of controlling a great north-south corridor of British rule, from Egypt to South Africa, and building a transcontinental railroad from Cape to Cairo. It was never completed."
        ],
        "image": {
          "src": "images/empire/08-afrique-cartoon.jpg",
          "caption": "French cartoon about the Scramble for Africa."
        },
        "image2": {
          "src": "images/empire/07-colossus-cape-cairo.jpg",
          "caption": "Cartoon about Cecil Rhodes' dream of a Cape-to-Cairo British corridor."
        }
      },
      {
        "id": "cp3",
        "type": "checkpoint",
        "question": "What made the ‘‘Scramble for Africa’’ possible in the late 19th century, according to the text?",
        "choices": [
          "African kingdoms invited European powers to colonize them",
          "New means of transportation from the Industrial Revolution made inland colonization technically possible, triggering a rush between European powers",
          "The Suez Canal had just been closed to all traffic",
          "Cecil Rhodes had already completed the Cape-to-Cairo railway"
        ],
        "correct": 1,
        "explanation": "The text says it became ‘‘possible thanks to the new means of transportation made available with the Industrial Revolution’’, which triggered the rush among European powers described as the Scramble for Africa."
      },
      {
        "id": "4a",
        "heading": "4 A) Missionaries",
        "paragraphs": [
          "Missionary societies such as the London Missionary Society played an important role in the process of colonisation. British missionaries of all denominations took the Christian religion throughout the Empire. Although they made relatively little impression where advanced religions like Buddhism, Hinduism or Islam dominated, their success was greater in the West Indies and in Africa south of the Sahara.",
          "David Livingstone, a Scottish missionary, explored much of what is now Botswana, Zambia, and Zimbabwe."
        ],
        "image": {
          "src": "images/empire/09-livingstone-portrait.jpg",
          "caption": "Dr David Livingstone (1813-1873), Scottish missionary and explorer."
        },
        "image2": {
          "src": "images/empire/10-livingstone-map.jpg",
          "caption": "Map showing David Livingstone's 1852-1856 journey through central Africa."
        }
      },
      {
        "id": "4b",
        "heading": "4 B) The White Man's Burden",
        "paragraphs": [
          "Supporters of the Empire thought the British presence in the colonies was acting for the greater good. They believed the European model of society was far more advanced (human rights, economy, law and order), and that it was their responsibility to set an example for other, ‘‘inferior’’ societies to follow. They argued the Empire existed not for Britain's benefit, but so that primitive peoples, incapable of self-government, could eventually become civilized with British guidance.",
          "The title of Rudyard Kipling's poem, The White Man's Burden, is often used to describe this mentality: ‘‘Take up the White Man's burden — the savage wars of peace — fill full the mouth of famine and bid the sickness cease.’’"
        ],
        "image": {
          "src": "images/empire/11-civilization-barbarism-cartoon.jpg",
          "caption": "‘‘From the Cape to Cairo’’: a 19th-century cartoon opposing ‘‘Civilization’’ and ‘‘Barbarism’’, illustrating the ideology of empire."
        }
      },
      {
        "id": "4c",
        "heading": "4 C) Pax Britannica",
        "paragraphs": [
          "During most of the 19th century, thanks to naval supremacy, Britain enjoyed unchallenged sea power and wasn't involved in any major armed conflict with other empires. Within its own colonies, the Empire tried, in a way, to enforce human rights and the rule of law, attempting to eradicate practices such as cannibalism, foot binding or widow burning.",
          "This relative pacification is nicknamed Pax Britannica (echoing Pax Romana). Of course, this concept is a matter for debate: is it really peace when it's been obtained after violent subjugation?"
        ],
        "image": null
      },
      {
        "id": "cp4",
        "type": "checkpoint",
        "question": "According to the text, how did supporters of the Empire justify colonial domination through the idea of the ‘‘White Man's Burden’’?",
        "choices": [
          "They openly admitted it was purely for Britain's economic profit",
          "They claimed the Empire existed to civilize ‘‘inferior’’ peoples for their own good, not for Britain's benefit",
          "They argued that colonized peoples had asked Britain to rule over them",
          "They denied any ideological justification was needed"
        ],
        "correct": 1,
        "explanation": "The text states supporters argued the Empire existed ‘‘not for the benefit of Britain, but in order that primitive peoples [...] could, with British guidance, eventually become civilized’’ — the core idea of the White Man's Burden."
      },
      {
        "id": "5a",
        "heading": "5 A) Indirect Rule",
        "paragraphs": [
          "Take the example of India: there were only about 100,000 British officials for a population of hundreds of millions. How could they control it? By delegating to local rulers.",
          "The British concluded deals with local princes: Indian princes were given authority over domestic affairs, but agreed to leave external affairs (monetary policy, taxation, defence, law and order, trade regulation) in the hands of Britain. This system of delegation, called indirect rule, was repeated across Asia and Africa: cheaper and more convenient for Britain, and a limited but real occasion for local rulers to exercise power."
        ],
        "image": {
          "src": "images/empire/12-king-of-ejayboo.jpg",
          "caption": "Photograph illustrating indirect rule in Nigeria: a local leader included in the ruling ceremony, alongside the British governor."
        }
      },
      {
        "id": "5b",
        "heading": "5 B) Adaptability : the example of castes",
        "paragraphs": [
          "Another characteristic of British rule was its adaptability: the British took advantage of local practices and customs and turned them to their advantage. In India, society was already based on a rigid system of castes — social classes you could never leave, generation after generation.",
          "The British used this existing division (a strategy resembling Machiavelli's ‘‘divide and rule’’): for example, the 1871 Criminal Tribes Act considered all members of a certain caste as potential criminals, who could be arrested arbitrarily — a violation of the right to a fair trial, and a means of oppression based on an existing division of society."
        ],
        "image": {
          "src": "images/empire/13-castes-infographic.jpg",
          "caption": "The traditional pyramid of castes in India: Brahmins, Kshatriyas, Vaishyas, Shudras — and the ‘‘untouchables’’ outside the system."
        }
      },
      {
        "id": "5c",
        "heading": "5 C) Propaganda",
        "paragraphs": [
          "British rule was also based on bluff and illusion. A great deal of effort was invested in projecting imperial authority through elaborate ceremonies backed up by shows of military capacity, to make the Empire seem more real, powerful and monolithic than it actually was — and to persuade people the British were legitimate rulers, not alien invaders.",
          "In India, these displays of power took the form of official military parades called Durbars. In 1876, Queen Victoria was declared Empress of India: it didn't change much for the colony in practice, but it was a powerful symbolic gesture."
        ],
        "image": null
      },
      {
        "id": "cp5",
        "type": "checkpoint",
        "question": "What do indirect rule, the manipulation of the caste system, and the Durbars all have in common as methods of British rule?",
        "choices": [
          "They all required a massive number of British troops to be permanently stationed everywhere",
          "They were all ways to control a vast population with limited resources, by using existing local structures or symbolic displays of power rather than brute force alone",
          "They were all abolished by the British government as soon as they were discovered",
          "They only applied to the white dominions"
        ],
        "correct": 1,
        "explanation": "Indirect rule delegated power to local princes, the caste system was used to divide and control the population, and Durbars projected authority symbolically — three efficient, low-cost ways to dominate a huge population with relatively few British officials."
      },
      {
        "id": "reference",
        "heading": "Repères : chronologie, figures, glossaire",
        "paragraphs": [
          "Timeline — 1855: Limited Liability Act. 1856: Livingstone returns from Africa as a national hero. 1857: Sepoy Mutiny, start of the British Raj. 1869: Opening of the Suez Canal. 1871: Criminal Tribes Act. 1877: Queen Victoria becomes Empress of India. 1889: Naval Defence Act. 1901: Death of Queen Victoria.",
          "Famous figures — Dr David Livingstone (1813-1873): Scottish missionary, explorer of central Africa. Cecil Rhodes (1853-1902): British businessman, believer in imperialism, founder of Rhodesia. Max Weber (1864-1920): German sociologist, theorist of the Protestant ethic. Queen Victoria (1819-1901): Queen of the UK, Empress of India from 1876. Rudyard Kipling (1865-1936): British writer, author of The White Man's Burden.",
          "Glossary — Imperialism: the policy of extending a state's influence over other peoples or territories. Colonialism: direct control of less powerful countries by a powerful one, exploiting their resources. White Man's Burden: the supposed duty of white people to bring education and Western culture to their colonies. Scramble for Africa: the late-19th-century invasion, occupation and division of Africa by European powers. Indirect rule: governing colonies through limited power granted to local rulers. Pax Britannica: relative 19th-century peace guaranteed by British naval supremacy. Durbar: an official ceremonial reception used to display imperial power. Caste: a rigid hereditary social class system. British Raj: the period (1858-1947) of direct British rule over India."
        ],
        "image": null
      }
    ]
  }
];

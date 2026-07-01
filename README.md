# Outils pédagogiques

Site statique (HTML/CSS/JS pur, sans build) hébergeant des outils interactifs pour les étudiants de CPGE B/L (T.Fêche), construit à partir du *Reference Booklet*.

## Mettre le site en ligne avec GitHub Pages

1. Sur GitHub, allez dans **Settings → Pages**.
2. Dans « Build and deployment », choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Votre site sera visible à `https://VOTRE-NOM.github.io/VOTRE-DEPOT/`.

Pour mettre à jour le site : glissez-déposez les fichiers de ce dossier dans **Add file → Upload files** sur GitHub (ils remplaceront les fichiers existants et ajouteront les nouveaux), puis Commit.

## Structure du projet

```
index.html                     → page d'accueil, 5 catégories d'outils
assets/style.css                → styles partagés (identité Art Déco)
outils/
  qcm.html + vocab-data.js       → QCM de vocabulaire (21 listes thématiques)
  grammaire.html + grammaire-data.js   → 141 règles de grammaire (Nom/Adj/Verbe/Syntaxe/Prép/Orth)
  connecteurs.html + connecteurs-data.js → réécriture avec mots de liaison
  collocations.html + collocations-data.js → 22 catégories de collocations, phrases à trous
  prononciation.html + prononciation-data.js → shadowing (synthèse + reconnaissance vocale)
  reformulation.html + reformulation-data.js → reformulation de problématiques d'essai
  calculatrice.html              → calculatrice scientifique (non reliée à l'accueil)
  civilisation/
    lecture-data.js               → contenu des chapitres (texte, illustrations, questions de relance)
    lecture.html                  → lecture dynamique : sommaire cliquable, zoom sur les images, questions intégrées
    quiz-data.js                  → banque de questions de compréhension par chapitre
    quiz.html                     → quiz de civilisation : sélection du chapitre puis série de questions
    images/road, images/constitution, images/empire → illustrations extraites des PDF de référence
actualites/
  index.html                     → affiche le fil d'actualité
  news.json                      → généré automatiquement (voir ci-dessous)
scripts/fetch-news.mjs            → script Node qui récupère les flux RSS
.github/workflows/update-news.yml → action GitHub qui exécute le script chaque jour
```

## Le fil d'actualité (mise à jour automatique)

La catégorie **Connaissance de l'actualité** affiche des titres récents de presse anglophone fiable (The Guardian, BBC News, The New York Times), récupérés via leurs flux RSS publics — **aucune clé API n'est nécessaire**.

Une fois le dépôt en ligne, l'action GitHub `.github/workflows/update-news.yml` s'exécute automatiquement chaque jour (6h05 UTC) et régénère `actualites/news.json`. Vous pouvez aussi la lancer manuellement : onglet **Actions** du dépôt → « Mettre à jour le fil d'actualité » → **Run workflow**.

Si l'action ne se déclenche pas : vérifiez dans **Settings → Actions → General** que les workflows sont autorisés à écrire dans le dépôt (« Read and write permissions »).

## Grammaire, collocations, mots de liaison

Ces trois outils sont entièrement basés sur des données statiques (fichiers `*-data.js`), sans IA ni backend :
- **Grammaire** : chaque règle propose une phrase correcte et une phrase fautive, l'élève doit identifier la bonne.
- **Collocations** : la phrase d'exemple est affichée avec le verbe masqué automatiquement (repérage par conjugaison approchée) ; l'élève choisit le bon verbe parmi plusieurs propositions.
- **Mots de liaison** : l'élève reconstitue dans le bon ordre une phrase modèle utilisant le connecteur donné, en cliquant les mots d'une banque mélangée (correction automatique, mot par mot).

Pour ajouter de nouvelles règles/collocations/connecteurs, copiez un bloc dans le fichier `*-data.js` correspondant : le format est documenté en commentaire en haut de chaque fichier.

## Reformulation de problématique (Méthode de l'essai)

Fonctionne en QCM : pour chaque question, l'élève choisit parmi 4 reformulations celle qui garde exactement le même sens que la question d'origine (avec un nouveau vocabulaire et une nouvelle structure) ; les 3 autres choix illustrent les erreurs classiques (reformulation trop proche de l'original, sens modifié, ou phrase qui n'est plus une question). Correction et explication immédiates. Pour ajouter des problématiques, éditez `outils/reformulation-data.js` (chaque entrée contient la question, les 4 choix, l'indice du bon choix et une explication).

## Prononciation — Shadowing

Utilise les API natives du navigateur : `speechSynthesis` (voix de synthèse, pour écouter le modèle) et `SpeechRecognition` (reconnaissance vocale, pour comparer ce que l'élève a dit au mot ciblé). Fonctionne mieux sur Chrome/Edge ; certains navigateurs (Firefox, Safari) ne supportent pas la reconnaissance vocale — le site le signale et propose alors l'écoute seule. Pour ajouter des exercices, éditez `outils/prononciation-data.js`.

## Civilisation — Lecture dynamique et Quiz

Construits à partir de trois PDF de cours (Road to Independence, US Constitution, British Empire), sans IA ni backend :

- **Lecture dynamique** (`outils/civilisation/lecture.html`) : l'élève choisit un chapitre, puis lit le texte avec un sommaire cliquable (navigation directe + barre de progression), des illustrations tirées du cours (cliquables pour zoomer), et des « questions de relance » à choix multiple insérées régulièrement dans le texte pour vérifier la compréhension en cours de lecture.
- **Quiz de civilisation** (`outils/civilisation/quiz.html`) : l'élève choisit un chapitre puis répond à une série de 10 questions à choix multiple portant sur les enjeux du cours (10 questions par chapitre), avec correction et explication immédiates.

Pour ajouter un nouveau chapitre : dupliquez un chapitre dans `outils/civilisation/lecture-data.js` (tableau `CIVILISATION_CHAPTERS`, avec ses sections et questions de relance) et dans `outils/civilisation/quiz-data.js` (tableau `CIVILISATION_QUIZ`), puis déposez les illustrations correspondantes dans `outils/civilisation/images/<nom-du-chapitre>/`.

## Ajouter un nouvel outil sur la page d'accueil

1. Créez votre page dans `outils/` (dupliquez un outil existant comme point de départ).
2. Dans `index.html`, dans la catégorie concernée, remplacez `<p class="empty-note">...</p>` par :

```html
<div class="card-grid">
  <a class="card" href="outils/mon-outil.html">
    <span class="icon"><span>✒️</span></span>
    <h3>Nom de l'outil</h3>
    <p>Description courte de l'outil.</p>
  </a>
</div>
```

## Astuce

Testez le site en local avant de le publier : ouvrez `index.html` dans votre navigateur, ou lancez un petit serveur local :

```
python3 -m http.server 8000
```

puis rendez-vous sur `http://localhost:8000`.

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
- **Mots de liaison** : l'élève réécrit librement une phrase avec le connecteur donné, puis compare avec un exemple de réécriture (auto-évaluation, pas de correction automatique).

Pour ajouter de nouvelles règles/collocations/connecteurs, copiez un bloc dans le fichier `*-data.js` correspondant : le format est documenté en commentaire en haut de chaque fichier.

## Reformulation de problématique (Méthode de l'essai)

Fonctionne en auto-évaluation : l'élève reformule une question dans une zone de texte libre, puis peut afficher des propositions de reformulation pour comparer. Pour ajouter des problématiques, éditez `outils/reformulation-data.js`.

**Note :** un vrai retour généré par IA sur la reformulation de l'élève (comme envisagé initialement) nécessiterait un service backend avec une clé API, ce qui n'est pas compatible avec un site 100% statique et gratuit sur GitHub Pages. Cette version utilise donc l'auto-évaluation par comparaison à des modèles. Si vous souhaitez ajouter un vrai retour IA plus tard, il faudra un petit backend (ex. Cloudflare Worker) qui appelle une API IA en gardant la clé secrète côté serveur — n'hésitez pas à demander de l'aide pour cette étape.

## Prononciation — Shadowing

Utilise les API natives du navigateur : `speechSynthesis` (voix de synthèse, pour écouter le modèle) et `SpeechRecognition` (reconnaissance vocale, pour comparer ce que l'élève a dit au mot ciblé). Fonctionne mieux sur Chrome/Edge ; certains navigateurs (Firefox, Safari) ne supportent pas la reconnaissance vocale — le site le signale et propose alors l'écoute seule. Pour ajouter des exercices, éditez `outils/prononciation-data.js`.

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

# Outils pédagogiques

Site statique (HTML/CSS/JS pur, sans build) hébergeant des outils interactifs pour vos étudiants.

## Mettre le site en ligne avec GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `outils-pedagogiques`).
2. Ajoutez tous les fichiers de ce dossier à la racine du dépôt :
   ```
   git init
   git add .
   git commit -m "Premier déploiement du site"
   git branch -M main
   git remote add origin https://github.com/VOTRE-NOM/outils-pedagogiques.git
   git push -u origin main
   ```
3. Sur GitHub, allez dans **Settings → Pages**.
4. Dans "Build and deployment", choisissez **Deploy from a branch**, sélectionnez la branche `main` et le dossier `/ (root)`.
5. Après quelques minutes, votre site sera visible à l'adresse :
   `https://VOTRE-NOM.github.io/outils-pedagogiques/`

À chaque fois que vous modifiez un fichier et faites `git push`, le site se met à jour automatiquement (1-2 minutes de délai).

## Structure du projet

```
index.html               → page d'accueil, 5 catégories d'outils
assets/style.css          → styles partagés (identité Art Déco)
outils/
  qcm.html                 → QCM de vocabulaire
  vocab-data.js            → listes de vocabulaire utilisées par le QCM
  calculatrice.html        → calculatrice scientifique (non reliée à l'accueil actuellement)
documents/                 → (à créer) déposez-y vos PDF de cours
```

## Les 5 catégories de la page d'accueil

La page d'accueil est organisée en 5 catégories fixes :
- **Travail de la langue** (contient le QCM de vocabulaire)
- **Méthode de l'essai**
- **Actualités**
- **Civilisation**
- **Traduction**

Les catégories vides affichent actuellement "Aucun outil pour l'instant — à venir."
Dès que vous ajoutez un outil, remplacez ce message par une carte (voir ci-dessous).

## Ajouter un nouvel outil

1. Dupliquez `outils/qcm.html` comme point de départ (ou repartez d'une page vierge).
2. Renommez le fichier (ex. `outils/essai-plan.html`).
3. Adaptez le contenu et le script JavaScript à votre outil.
4. Dans `index.html`, repérez la catégorie concernée et remplacez le `<p class="empty-note">...</p>`
   (ou ajoutez à côté d'une carte existante dans `<div class="card-grid">`) par :
   ```html
   <div class="card-grid">
     <a class="card" href="outils/essai-plan.html">
       <span class="icon"><span>✒️</span></span>
       <h3>Nom de l'outil</h3>
       <p>Description courte de l'outil.</p>
     </a>
   </div>
   ```

## Modifier ou ajouter une liste de vocabulaire (QCM)

Le QCM (`outils/qcm.html`) pioche ses questions dans le fichier `outils/vocab-data.js`.
L'élève choisit d'abord une liste, puis le sens (anglais → français, français → anglais,
ou mixte) et le nombre de questions ; les mauvaises réponses (distracteurs) sont générées
automatiquement à partir des autres mots de la même liste.

Pour ajouter une nouvelle liste, ouvrez `outils/vocab-data.js` et ajoutez un bloc au tableau
`VOCAB_LISTS` :
```js
{
  id: "identifiant-unique-sans-accent",
  title: "Titre affiché aux élèves",
  words: [
    { en: "English word", fr: "Traduction française" },
    { en: "Another word", fr: "Une autre traduction" },
    // ajoutez autant de mots que nécessaire
  ]
}
```
Aucune autre modification n'est nécessaire : la nouvelle liste apparaît automatiquement
sur l'écran de sélection du QCM.

## Ajouter des documents (PDF)

1. Créez un dossier `documents/` à la racine du projet.
2. Déposez-y vos fichiers PDF.
3. Ajoutez des liens vers ces fichiers dans `index.html`, ou créez une page `documents/index.html` listant vos fichiers si vous en avez beaucoup.

## Astuce

Vous pouvez tester le site en local avant de le publier : ouvrez simplement `index.html` dans votre navigateur, ou lancez un petit serveur local :
```
python3 -m http.server 8000
```
puis rendez-vous sur `http://localhost:8000`.

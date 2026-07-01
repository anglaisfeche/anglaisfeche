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
index.html              → page d'accueil, liste tous les outils par catégorie
assets/style.css         → styles partagés par toutes les pages
outils/
  qcm.html                → générateur de QCM (modifiable)
  calculatrice.html        → calculatrice scientifique
documents/                → (à créer) déposez-y vos PDF de cours
```

## Ajouter un nouvel outil

1. Dupliquez `outils/qcm.html` ou `outils/calculatrice.html` comme point de départ.
2. Renommez le fichier (ex. `outils/simulateur-physique.html`).
3. Adaptez le contenu et le script JavaScript à votre outil.
4. Ajoutez une carte vers ce nouvel outil dans `index.html`, dans la section appropriée :
   ```html
   <a class="card" href="outils/simulateur-physique.html">
     <span class="icon">⚙️</span>
     <h3>Nom de l'outil</h3>
     <p>Description courte de l'outil.</p>
   </a>
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

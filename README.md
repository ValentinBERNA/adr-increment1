# Les Aventuriers du Rail - Incrément 1 (Portage JavaScript)

## Structure du projet

- `Etat.js` : définit un état avec son nom et son contour (chaîne SVG-like pour dessin).
- `Ville.js` : définit une ville avec un nom et des coordonnées `(x, y)`.
- `Route.js` : relie deux villes avec une couleur. Contient les méthodes pour calculer la longueur et les points associés.
- `Plateau.js` : initialise les listes d’états, de villes, et de routes du jeu. Permet de rechercher une ville par son nom.
- `Jeu.js` : contient la logique principale de création du plateau et d’affichage dans le DOM (et console).
- `index.html` : intègre les scripts JavaScript et teste le code.
- `README.md` : doc du projet.



## Organisation du travail

Projet réalisé par Valentin BERNA et Alexandre BARBE.  
Temps estimé : 4 heures, réparties de la manière suivante :
Travail individuel :
- Implémentation des classes `Etat`, `Ville` et `Route` (Valentin).
- Construction du `Plateau`, initialisation des objets, méthode `rechercheVille` (Alexandre).
Travail collaboratif :
- Test console de `Jeu`.
- Revue croisée du code.
- Intégration finale dans `index.html` et test du rendu dans le navigateur.



## Difficulté principale rencontrée

La principale difficulté a été l'adaptation d'un affichage graphique Java à une version JavaScript sans framework. En particulier, pour rendre lisible les objets (États, Villes, Routes) dans le DOM sans moteur graphique, on a été obligés de simplifier l'affichage.


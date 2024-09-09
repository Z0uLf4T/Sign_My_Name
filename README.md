
# Signe Mon Nom

Signe Mon Nom permet à l'utilisateur d'entrer un nom et d'obtenir une vidéo de son nom épelé en Langue des Signes Française.


## Demo

![Démo Signe Mon Nom V1](https://github.com/user-attachments/assets/f50df7ee-8272-409a-b973-9c72dc978b16)

[Lien vers le site](https://signe-mon-nom.vercel.app/)


## Stack



## Découpage du projet

_JS_
--> Création de la fonction signMyName() qui prend une string name en paramètre et retourne un tableau videoPathsArray contenant le chemin de fichier vidéo correspondant à chaque lettre du name.

--> Création de la fonction getVideos() qui prend un tableau videoPathsArray et retourne un ensemble d'éléments HTML, balises vidéo avec pour source les chemins contenus dans videoPathsArray.

--> Création de la fonction displaySign() qui récupère la valeur de l'input entered_name et affiche les vidéos sur la page HTML.

--> Affichage dynamique des vidéos (une après l'autre)

## Fonctionnalités à développer
- Bouton replay pour rejouer les vidéos
- Gestion des caractères entrés en input (seulement des lettres + gestion des prénoms composés)
- Permettre de stocker les vidéos dans une liste de favoris
- Améliorer le fondu de l'enchaînement des vidéos

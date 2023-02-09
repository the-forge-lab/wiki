---
author: IonisX
theme: Les Méthodes de Hachage
assignment: Algo
state: WIP
link: 
pin: false
type: part
semester: S3
---
#### Chainage Séparé
- chaque case du tableau contient un pointeur vers une liste chainée d’éléments dont chacun est une valeur dont la valeur de hash est la case à laquelle elle est reliée.
- Liste dynamiquement implémentée
- Recherche
	- Calculer le hash de la valeur recherchée et parcourir la liste
- Ajout deux possibilités
	- On recherche l’élément à ajouter, si `!exists` on l’ajoute à la fin de la liste (pas de redondance)
	- On ajoute l’élément en première place de la liste sans le rechercher (pas de recherche, plus opti)
- Suppression : 2 possibilités
	- On recherche l’élément à supprimer, si `!exists` alors `delete`
	- On recherche toutes les occurrences de l’élément pour les supprimer.
- Uniquement cette méthode permet une suppression aisée des clés
- Complexité : en théorie linéaire (constant si fonction uniforme)
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
---
#### [[Hachage]] direct 
##### Principe
+ En cas de collision, on utilise une fonction de calcul pour retrouver la bonne valeur.
+ On appelle cette fonction `essai`.
	+ Elle va générer une table avec un nombre d'essais et la valeur de chacun de ces essais pour toutes les valeurs.
##### Algorithmes de Manipulation
+ Ajout
	+ On prend l'élément à insérer, et on regarde le premier essai.
	+ Si la case est vide, on l'insère.
	+ Si la case est déjà occupée, on prend l'essai suivant  et on incrémente le numéro de l'essai.
	+ On refait ça tant que la case n'est pas vide
+ Recherche
	+ On prend un élément avec sa table d'essais.
	+ On regarde les essais un par un en comparant avec la case du tableau correspondante.
	+ Si la case est pleine
		+ si la valeur est celle recherchée, alors `POSITIVE_SEARCH`
		+ Sinon, recommencer avec `essai += 1`
	+ Si la case est vide, alors `NEGATIVE_SEARCH`
+ Suppression
	+ Comme pour le [[Hachage Coalescent]], on ne va pas reconstruire le tableau à chaque suppression.
	+ On met en place 3 états:
		+ `vide` = état initial
		+ `occupée` = cette case contient un élément
		+ `libre` = il y avait un élément qu'on a supprimé
	+ La recherche ne s'arrête pas sur les cases libres
	+ A l'ajout, on peut remplir une case libre
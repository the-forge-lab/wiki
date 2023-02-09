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
#### [[Hachage]] Coalescent
##### Principe
+ Si on ne peut pas allouer dynamiquement de la mémoire
+ Le tableau possède alors une case pour l'élément et une case pour un lien
+ On divise le tableau en deux zones :
	+ Zone de hachage primaire `p`
	+ Zone de réserve `r`
+ Si un élément est à placer, et que sa valeur de hachage atteint une place vide du tableau il est placé là.
+ Sinon, il est placé dans la zone de réserve et le lien de collision est mis à jour
	+ la réserve est utilisée du bas vers le haut
+ Difficulté: choix de la taille de la réserve
	+ Si la réserve est trop petite, on ne peut plus utiliser le tableau et le hachage est incomplet
	+ Si la réserve est trop grande, l'intervalle de hachage est trop petit, l'effet de dispersion est perdu et on aura une liste chainée de tous les éléments
+ On peut alors ne pas utiliser de réserve, et faire comme si tout le tableau était une zone de réserve
	+ Cela crée des collisions non dues à la collision de hachage primaire => **collisions secondaires**
##### Algorithmes de Manipulation
+ Simple, et basé sur les listes chainées
+ Recherche
	+ Déterminer la valeur de hachage de l'élément recherché => indice de départ dans le tableau
	+ Comparaison de chaque élément en suivant les liens jusqu'à trouver l'élément recherché
	+ Si `lien` = -1, l'élément existe pas !
+ Ajout
	+ On calcule la valeur de hachage de l'élément
	+ Si case vide, alors on met l'élément dans cette case, et on met le lien à -1
	+ Si nous avons une collision primaire, on met l'élément dans la case la plus basse disponible, et on met à jour le lien vers cette case
	+ On récurse si besoin
	+ Si nous avons une collision secondaire, on fait comme pour une collision primaire
	+ Pas trop de perte de temps => Complexité Constante
		+ pire cas => Complexité linéaire
+ Suppression
	+ Compliqué, gestion du décalage de tous les éléments qui sont liés à celui à supprimer
	+ Il est préférable de pas vraiment supprimer l'élément, mais de mettre en place un procédé permettant de déclarer une case comme `libre` et non `vide`.
	+ Une case peut alors prendre 3 états:
		+ `vide` = état initial
		+ `occupée` = cette case contient un élément
		+ `libre` = il y avait un élément qu'on a supprimé
	+ Les liens ne sont ni détruits ni modifiés, et on a pas besoin de reranger le tableau de hachage
	+ La recherche ne s'arrêtera pas sur les cases libres
	+ l'ajout commencera par les cases libres
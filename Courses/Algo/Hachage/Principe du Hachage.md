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
## Principe du Hachage

La place d’un élément dépend d’un calcul effectué sur cette clé, mais pas des autres clés
- Calcul réalisé avec une fonction, pointe vers une adresse mémoire ou une cellule de tableau
- Interest: complexité constante malgré le nombre d’éléments
- la fonction de hachage $h()$ est injective, mais c'est pas obligé.
- Si $h(x)$ n’est plus injective, alors il y a collision primaire.
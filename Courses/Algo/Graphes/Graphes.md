---
author: IonisX
theme: "Les graphes"
assignment: Algo
state: WIP
link: 
pin: false
type: full
semester: S3
---
[[Algo - MoC|Go Up]]
# Les Graphes

![[Introduction]]
***
![[Graphes Orientés]]
***
![[Graphes Non Orientés]]
***
![[Parties de Graphes]]
***
![[Chemins et Connexité des Graphes]]
***
![[Représentations]]
***
## Parcours
![[Parcours Profondeur des Graphes]]
***
![[Parcours Largeur des Graphes]]
***
## Connexité
On cherche à étudier les composantes connexes d'un [[Graphes Non Orientés|graphe non orienté]].
+ Si on en a qu'une seule, le graphe est connexe
+ Sinon, on a plusieurs composantes connexes
	+ On peut déterminer les sommets dans chacune des composantes, et déterminer les chaines les reliant.
On part du principe que l'ensemble des sommets est statique, c'est à dire qu'il ne change pas
L'ensemble des arêtes peut être [[Connexité d'un graphe non orienté statique|statique]] ou [[Connexité d'un graphe non orienté évolutif|évolutif]]

![[Connexité d'un graphe non orienté statique]]
![[Connexité d'un graphe non orienté évolutif]]
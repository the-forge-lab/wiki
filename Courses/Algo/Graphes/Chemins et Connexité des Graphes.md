---
author: IonisX
theme: Les graphes
assignment: Algo
state: WIP
pin: false
link: 
type: part
semester: S3
---
## Chemins et Connexité des Graphes

### Chemins
Dans un [[Graphes Orientés]] : **Chemin** $\mu$ de longueur $\lambda$ = suite de $\lambda$ arcs 
Ils doivent se suivre
On peut dire que c'est une suite de $\lambda+1$ sommets 

Si on a un retour au départ, on dit que c'est un circuit
Par convention, la longueur = 0

Chemin Elémentaire = ne contient pas plusieurs fois un même sommet (pas un circuit)
On peut parler de circuit élémentaire si celui ci ne contient pas d'autres circuits

### Chaines
Dans un [[Graphes Non Orientés]]: **Chaine** $\mu$ de longueur $\lambda$ = suite de $\lambda$ arêtes
Elles doivent se suivre
On peut dire que c'est une suite de $\lambda+1$ sommets

Si on a un retour au départ, on dit que c'est un cycle
Par convention, la longueur = 0

Chaine Elémentaire = ne contient pas plusieurs fois un même sommet (pas un cycle)
On peut parler de cycle élémentaire si celui ci ne contient pas d'autres cycles

### Connexité
+ Un graphe non orienté est dit **connexe** si pour toute paire de sommets distincts `x` et `y`, il existe une chaine reliant `x` et `y`.
+ Composantes connexes:
	+ Sous graphe connexe maximal du graphe => un sous graphe connexe qui n'est pas inscrit dans un sous graphe connexe

+ Un graphe orienté a une **forte connexité** si pour toute paire ordonnée de sommets distincts `x` et `y`, il existe un chemin reliant `x` et `y`.
+ Chemin de `x` vers `y` ≠ chemin de `y` vers `x` ^-1
+ Composantes fortement connexes:
	+ Sous graphe fortement connexe maximal du graphe => un sous graphe fortement connexe qui n'est pas inclut dans un autre sous graphe fortement connexe
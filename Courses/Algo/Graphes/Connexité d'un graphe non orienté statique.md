---
author: IonisX
theme: "Graphes"
assignment: Algo
state: WIP
link: ""
pin: false
type: part
semester: S3
---
### Connexité d'un graphe non orienté **statique**
On peut calculer la connexité du graphe par 3 moyens
+ [[#Parcours Profondeur des Graphes Parcours Profondeur|Parcours Profondeur]]
+ [[#Parcours Largeur des Graphes Parcours Largeur|Parcours Largeur]]
+ [[#Fermeture Transitive|Calcul de la fermeture transitive]]

#### [[Parcours Profondeur des Graphes|Parcours Profondeur]]
1. On construit la forêt couvrante du graph
2. On compte le nombre de composantes connexes du graph (le nombre de racines)
3. On associe à chaque sommet le numéro de la composante à laquelle il appartient.

**Remarques**
+ Pour la connexité, ce qui nous intéresse est si deux sommets sont reliés, pas combien de fois ils sont reliés entre eux
+ Si le graphe est valué, nous ne considérons pas les coûts mais uniquement les relations.

A la fin du parcours
+ On compte le nombre d'arborescences pour avoir le nombre de composantes connexes
+ Pour savoir si deux sommets sont connectés, leur numéro de composante connexe doit être égal.

#### [[Parcours Largeur des Graphes|Parcours Largeur]]
Même principe que pour le parcours profondeur, la seule difference est dans l'ordre des sommets rencontrés.

Les deux parcours ont la même complexité, on choisit celle que l'on préfère

#### Fermeture Transitive
On calcule la fermeture transitive d'un graphe pour déterminer si ce graphe est connexe ou non. 

>[!INFO] Définition 
>On appelle fermeture transitive d'un graphe `G=<S,A>` le graphe `G*=<S,A*>` tel que:
>Pour toute paire de sommets `x,y` de `S`, il existe `x -- y` dans `G*` si et seulement si il existe une chaine entre `x` et `y` dans `G`.

On en déduit:
+ Un graphe `G` est connexe si `G*` est un graphe complet.
+ Deux sommets `x` et `y`  de `G` sont dans la même composante connexe si et seulement si il existe `x -- y` dans `G*`

##### Calcul - Algorithme de Warshall
**Principe**
+ Représente toutes les chaines possibles du graphe à l'aide d'une matrice d'adjacence
+ Elle est initialisée par les arêtes du graphe, et est enrichie par chaque itération
+ On obtient alors la fermeture transitive, représentée par sa matrice d'adjacence.
+ On utilise à chaque itération la matrice calculée par la précédente itération

```fortran
FUNCTION warshall(graph G, mat[bool] M)
	!! DECLARATION
		integer :: x, y, i, N
		N = order(G)
		i = 1
		y = 1
		x = 1
	DO
		M = adj(G)
		WHILE i < N DO
			WHILE x < N DO
				WHILE y < N DO
					M[x, y] = M[x, y] .OR. (M[x, i] .AND. M[i, y])
					y += 1
				END DO
			x += 1
			END DO
		i += 1
		END DO
	END DO
END FUNCTION warshall
```

Cet algo fonctionne aussi pour les graphes orientés
Sa complexité est $O(n^3)$
On calculera la fermeture transitive d'un graphe que si c'est vraiment nécessaire
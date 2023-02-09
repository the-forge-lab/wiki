---
author: IonisX
theme: "Les graphes"
assignment: Algo
state: WIP
pin: false
link: ""
type: part
semester: S3
---
### Parcours Largeur des [[Graphes]]

##### Concept
+ Suivre à partir d'un sommet donné tous les successeurs de celui ci, puis tous les successeurs des successeurs 
+ Il se fait en fonction de la distance de la racine (la hauteur)
+ On parcours tous les sommets à une distance 1 du départ, puis 2 etc.
+ On peut l'appeler parcours hiérarchique ou parcours par niveaux
+ il est par nature itératif

**Risque**: rentrer dans un circuit
	=> On marque les sommets visités

On utilise une file pour mémoriser les sommets déjà rencontrés

```Fortran
FUNCTION parc_larg(graph g, summit s)
	!! Define
		queue :: f
		summit :: s, t
		f = empty_queue
	DO
		f = enqueue(s)
		mark_summit(s)
		WHILE .NOT. f.is_empty DO
			s = f.dequeue()
			WHILE t = s.successor DO
				IF .NOT. t.marked THEN
					f = enqueue(t)
					mark_summit(s)
				END IF
			END DO
		END DO
	END DO
END FUNCTION parc_larg
```

Il faut bien vérifier à la fin si tous les sommets sont marqués
Si non, on recommence le parcours à partir d'un sommet non marqué

Il n'y a pas d'autre classification que les arcs couvrants.
Ils permettent d'obtenir la *forêt couvrante associée au parcours largeur*

Pour les [[Graphes Non Orientés]], le parcours va orienter les arêtes. 

##### Ordre
On appelle *ordre hiérarchique* l'ordre obtenu si on note les sommets au moment de les marquer.

##### Complexité
+ Dépend des [[Représentations]] choisies
+ Pour `G` avec `n` sommets et `m` arcs ou arêtes
	+ Pour `G` [[En Liste]] d'adjacence: $O(\max(n,m))$
	+ Pour `G` [[En Matrice]]: $O(n^2)$
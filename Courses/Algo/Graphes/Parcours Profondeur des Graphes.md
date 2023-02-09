---
author: IonisX
theme: "les graphes"
assignment: Algo
state: WIP
pin: false
link: ""
type: part
semester: S3
---
### Parcours Profondeur des [[Graphes]]

##### Concept
+ suivre à partir d'un sommet donné un chemin le plus loin possible.
+ Quand on a finit, il faut revenir en arrière pour explorer les chemins ignorés.
+ Il est par nature récursif

**Risque**: Pendant le parcours, on peut entrer dans un circuit 
	=> on marque les sommets visités pour voir si on est déjà passés par là

##### Principe
+ On prend le premier node
+ On le marque `passed`
+ on prend son premier successeur
+ On recommence tant qu'on peut
+ Si il n'y a plus de successeur, on revient à celui d'avant et on prend le deuxième successeur
+ A la fin, on vérifie que tous les sommets sont marqués
	+ Si non, on recommence le parcours à partir de celui ci

```fortran
FUNCTION parc_prof(graph g, summit s)
		!! Define
		summit :: t
	DO
		!! Traitement préfixe
		mark_summit(s)
		WHILE t = s.successor DO
			IF .NOT. t.marked THEN
				parc_prof(g, t)
			END IF
		END DO
		!! Traitement suffixe
	END DO
END FUNCTION parc_prof
```

##### [[Graphes Orientés]]
+ **Arcs couvrants** (*forêt couvrante associé au parcours en profondeur du graph*)
	+  Constituent une forêt couvrante de recherche en profondeur
	+ Ils permettent de découvrir des sommets non marqués
+ **Arcs en arrière**
	+ Extrémité terminale: ascendant de l'extrémité initiale dans la forêt couvrante
+ **Arcs en avant**
	+ Extrémité terminale: descendant de l'extrémité initiale dans la forêt couvrante
+ **Arcs croisés**
	+ Il n'existe pas de chemins entre leurs extrémités dans la forêt couvrante

##### [[Graphes Non Orientés]]
Pour un graph non orienté, le parcours va orienter les arêtes, on va donc là aussi parler de forêt couvrante.
+ **Arcs couvrants**
	+ Constituent une forêt couvrante de recherche en profondeur
	+ Ils permettent de découvrir des sommets non marqués
+ **Arcs en arrière**
	+ Il ne faut pas considérer comme symétriques les arcs couvrants (on repasse pas sur un arc couvrant)
+ Pas d'autres types d'arcs parce que les relations sont symétriques

##### Ordres
**Préfixe**: On note les sommets lors de leur première rencontre
**Suffixe**: On note les sommets lors de leur dernière rencontre

##### Complexité
+ Dépend des [[Représentations]] choisies
+ Pour `G` avec `n` sommets et `m` arcs ou arêtes
	+ Pour `G` [[En Liste]] d'adjacence: $O(\max(n,m))$
	+ Pour `G` [[En Matrice]]: $O(n^2)$
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
## Connexité d'un graphe non orienté évolutif
On regroupe les composantes connexes du graphe par regroupement des composantes du graphe en évolution.
On construit la fermeture réflexive et transitive du nouveau graphe
On doit pouvoir savoir à tout moment combien on a de composantes connexes et si elles sont reliées entre elles.
On va représenter notre graphe comme un ensemble muni d'une relation d'équivalence. => un graphe non orienté qui vérifie certaines propriétés.
On représente les composantes connexes par des sous ensembles de l'ensemble
Relation d'équivalence = `x chaine y` $\iff$ `x -- y`
On utilise une fonction `find(x, G)` que nous donne le représentant de la classe (une sorte d'`ID` de la classe)
On utilise la fonction `union(x, y, G)` pour réunir deux classes en une (un seul représentant)

Comme c'est une relation d'équivalence, si on ajoute une composante, plusieurs sont rajoutées dans la fermeture transitive du graphe.

On va utiliser une forêt
+ chaque arbre a pour racine le représentant de la classe
On utilise un tableau des pères pour la forêt
Si un nœud est racine, alors son père est `-1`

Complexité de base = $O(n)$

Réduction de la complexité
+ On va ajouter le plus petit arbre au à la racine du plus grand => union pondérée
	+ réduit la taille des arbres, et la complexité de la fonction
	+ problème: connaitre en permanence la taille des arbres
+ Connaitre la taille des arbres en temps réel
	+ Si un nœud est une racine dans le tableau de pères, on note `-taille(arbre)` pour stocker la valeur de sa taille
+ On peut encore compacter la forêt avec la compression de données
	+ à chaque appel de `find(x)`, on accroche à l'arbre tous les sommets du chemin vers `x`
=> on passe à une complexité constante, qui tend vers $O(2)$
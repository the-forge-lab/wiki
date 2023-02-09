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
### En Matrice
Pour un [[Graphes]] d'ordre `n`, il faut une matrice `n` x `n` bools appelée **matrice d'adjacence**
Pour un graphe d'ordre 5: (arcs  `x -> y`)
| x \\ y   | 1   | 2   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- | --- |
| 1   |     | V   | V   |     | V   |
| 2   | v   |     |     | v   |     |
| 3   |     | v   |     |     | v   |
| 4   |     | v   |     |     |     |
| 5   |     |     | v   |     |     |
On a donc un arc (ou une arête) existant(e) entre un sommet de l'axe `x` et d'un sommet de l'axe `y`.
Si le graphe présenté n'est pas orienté alors sa matrice est symétrique

+ Pour un graphe valué
	+ On prend une matrice de tuple `<bool, float>` avec en `float` le coup de la relation

#### Avantages
+ Cette représentation est appropriée pour un sommet static
+ Si le graphe doit bouger, alors il faudrait surdimensionner la matrice
+ Très pratique pour tester l'existence d'un arc
+ Très facile de supprimer / rajouter un arc
+ Facile de connaitre tous les successeurs / prédécessurs d'un sommet, et de trouver ses demi-degrés

#### Inconvénients
+ Complexité : parcours complet d'un arbre en $N^2$
+ Stockage en mémoire important ($N^2$)

#### Implems
```algo
constantes:
   NMAX = 100
types:
   t_mat_adj  = NMAX x NMAX  entier
   t_mat_cout = NMAX x NMAX  reel
   t_graph_stat = enregistrement
       booleen     orient
       entier      ordre
       t_mat_adj   adj
       t_mat_cout  cout
   fin enregistrement t_graph_stat
```

```c
int NMAX = 100

typedef struct t_graph_stat {
    int orient;     /* 1 = orienté */
    int ns;
    int mat_adj[NMAX][NMAX];
    float mat_p[NMAX][NMAX];
} t_graph_stat;
```
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
### En Liste
Vecteur de pointeur sur une liste d'enregistrements correspondant aux sommets adjacents de chaque sommet => **Liste d'adjacence**

Chaque enregistrement contient le numéro du sommet adjacent sous forme d'entiers, un éventuel cout, et un pointeur sur le sommet adjacent suivant (`if exists`)
Pour voir si un arc `x -> y` existe, il suffit de partir du sommet `x` et de voir si `y` est dans sa liste

**/!\\ La liste représente les successeurs de `x`, en aucun cas un chemin partant de `x`**

#### Avantages
+ Très facile de supprimer / rajouter un arc
+ Très facile de trouver tous les successeurs d'un sommet, et de calculer son demi degré extérieur
+ Espace mémoire:
	+ ordre `N` + `M` (fois la taille) (orienté)
	+ ordre `N` + `2M` (fois la taille) (non orienté, ou orienté avec prédécesseurs)

#### Inconvénients
+ Long et fastidieux de calculer son demi degré intérieur
+ Il faudrait parcourir toutes les listes d'adjacence pour trouver les prédécesseurs de `x`
	+ Solution => Posséder une autre liste chainée pour les sommets, permettant de contenir les prédécesseurs 
	+ Cas de l'espace mémoire `N` + `2M` (très respectable par rapport au $N^2$)

#### Pour un [[Graphes]] avec un ensemble de sommets mouvants
On remplace le vecteur de sommets par une liste
+ Facile de tout trouver 
+ Facile de tout calculer
+ Facile de créer / détruire
+ Temps de recherche au pire : $O(N)$

#### Implems
```algo
types
    t_listsom = ↑s_som    /* liste des sommets */

    t_listadj = ↑s_ladj    /* liste d'adjacence */
/* un sommet */
    s_som     = enregistrement
       entier      som
       t_listadj   succ
       t_listadj   pred
       t_listsom   suiv
    fin enregistrement s_som
/* un successeur (ou prédécesseur) */
    s_ladj      = enregistrement
       entier      nb
       reel        cout
       t_listadj   suiv
       t_listsom   vsom
    fin enregistrement s_ladj

    t_graph_dyn  = enregistrement    /* le graphe */
       entier     ordre
       booleen    orient
       t_listsom  lsom
    fin enregistrement t_graph_dyn
```

```c
typedef struct s_som   *t_listsom;
typedef struct s_ladj  *t_listadj;

struct s_som {
  int           som;
  t_listadj     succ, pred;
  t_listsom     next;
};

struct s_ladj {
  int           nb;
  float         cost;
  t_listsom     vsom;
  t_listadj     next;
};

struct s_graph_dyn {
  unsigned      order;
  int           directed;
  t_listsom     lsom;
  
typedef struct s_graph_dyn *t_graph_dyn;
};
```
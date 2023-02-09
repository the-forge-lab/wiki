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
## Graphes Non Orientés

Pas forcément besoin tout le temps du sens des relations, mais plutôt du fait que les sommets soient reliés entre eux ou non.
=> On appelle ça des **multigraphes**
`G = <S, A>` tel que
+ `S` => ensemble fini de sommets (ordre(`G`) = card(`S`) = `N`)
+ `A` => Famille d'arêtes, avec redondance autorisée (card(`A`) = `M`)

Si multigraphe valué ou pondéré, `G = < S, A, C >` avec `C` = `A` $\to\mathbb{R}$ la fonction de cout.
`C_u` => fonction de cout de l'arête `u`

### Arêtes
forme: `u = {x, y} = x -- y`
+ `x` et `y` sont des extrémités de l'arête
+ On peut dire successeur / prédécesseur comme pour les graphes orientés
+ Relation symétrique => `x -- y <=> y -- x`
+ Deux arêtes sont dits adjacents si ils ont au moins une extrémité commune
+ `x` et `y` sont dits adjacents ou voisins si il existe `x -- y`

Voisins de `x`: $\Gamma(x)$
Degré d'un sommet `x` = nombre d'arêtes dont `x` est le sommet.
noté $d^º(x)$

Ensemble des arêtes dont `x` est une extrémité 
noté $\omega(x)$
avec $d^º(x)=\mathrm{card}(\omega(x))$

>[!example] Propositions
>+ Un sommet isolé (relié à aucun autre), a un degré nul
>+ Un graphe est dit complet si pour tout sommet `x` et `y`, il existe une arête `x -- y`

#### Graphe simple 
On enlève les doublons, et on enlève les boucles

`A` devient un ensemble d'arêtes, sans redondance.
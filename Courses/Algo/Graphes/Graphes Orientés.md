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
## Graphes Orientés

**p-graph** `G` => forme la plus courante des graphes orientés
`G = < S, A >`
+ `S` => ensemble de sommets (ordre(`G`)=card(`S`) = `N`)
+ `A` => Famille d'arcs, avec redondance autorisée (card(`A`) = `M`)
Si p-graphe valué ou pondéré, `G = < S, A, C >` avec `C` = `A` $\to\mathbb{R}$ la fonction de cout.
`C_u` => fonction de cout de l'arc `u`

On peut parfois prendre un graph orienté pour un non orienté pour simplifier les calculs

### Arcs
`u=(x,y)=x->y`
avec 
+ `x` => extrémité initiale (prédécesseur de `y`)
+ `y` => extrémité terminale (successeur de `x`)

Deux arcs sont dits adjacents si ils ont au moins une extrémité commune

>[!abstract]  Propriété
>Dans un graphe orienté, s'il existe un arc `x->y`, alors `y` est adjacent à `x`

+ Successeurs de `x`: $\Gamma(x)$
+ Prédécesseurs de `x`: $\Gamma^{-1}(X)$

### Incidence
`u = x -> y` est incident à `x` vers l'extérieur
=> demi degré extérieur de `x` $\longrightarrow{d}^{º+}(x)=|\omega^+(x)|$

`u = y -> x` est incident à `x` vers l'intérieur
=> demi degré intérieur de `x` $\longrightarrow{d}^{º-}(x)=|\omega^-(x)|$

Degré d'un sommet `x` = nombre d'arc dont `x` est le sommet.
noté $d^º(x)=d^{º+}(x)+d^{º-}(x)$

Ensemble des arcs incidents à `x` = ceux dont `x` est une extrémité
noté $\omega(x)=\omega^+\cup\omega^-$
avec $d^º(x)=\mathrm{card}(\omega(x))$

>[!example] Propositions
>+ Un sommet isolé (relié à aucun autre), a un degré nul
>+ Un graphe est dit complet si pour tout sommet `x` et `y`, il existe un arc `x -> y`

#### Les 1-graphes
Graphes orientés les plus simples
Il n'y a plus de redondance d'arcs possible
---
author: IonisX
theme: Les Séries Entières
assignment: Maths
state: WIP
pin: false
link: 
type: part
semester: S3
---
### Rayon de Convergence
>[!info] Définition
>Soient $(a_n)$ une suite réelle, et $\sum{a_nx^n}$ la [[Séries Entières]] définie par : $$f:\,x \longmapsto \displaystyle\sum_{n=0}^{+\infty} a_n x^n$$
>Alors il existe $R\in\mathbb{R}\cup+\{\infty\}$ tel que 
>+ $\forall{x}\in\mathbb{R}/|x|<R$, la série converge absolument
>+ $\forall{x}\in\mathbb{R}/|x|>R$, la série diverge grossièrement
>$R$ est le **rayon de convergence** de la série entière.
>L'ensemble $\{x\in\mathbb{R},|x|<R\}=]-R,R[$ est appelé **disque de convergence** de la série

>[!example] Interprétation
>1. Si $R=0$, la série converge vers $a_0$ en $x=0$ et diverge pour le reste. Ainsi, le domaine de définition de $f$ est $\mathcal{D}_f=\{0\}$.
>2. Si $R\int\mathbb{R}^*_+$, on a donc $$\left\lbrace\begin{array}{lll} ]-R,R[\,\subset\,\mathcal{D}_f&\implies&\text{ La série converge absolument}\\ ]-\infty,-R[\,\,\cap\,\,\mathcal{D}f = \emptyset&\implies&\text{ La série diverge grossièrement}\\ ]+R,+\infty[\,\,\cap\,\,\mathcal{D}f = \emptyset&\implies&\text{ La série diverge grossièrement}\end{array}\right.$$
>   **On ne peut rien dire de la nature de la série si $|x|=R$.**
>3. Si $R=+\infty$, alors la série converge absolument pour tout $x\in\mathbb{R}$, et $f$ est définie sur $\mathbb{R}$.

Détermination => [[Règle d'Alembert pour les Séries Entières]]
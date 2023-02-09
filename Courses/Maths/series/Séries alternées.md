---
author: IonisX
theme: "Les Séries Numériques"
assignment: Maths
state: WIP
pin: false
link: ""
type: part
semester: S3
---

### Séries alternées
>[!info] Définition - Séries alternées
>Soit $(u_n)$ une suite réelle.
>On dit que $(u_n)$ est *alternée* s'il existe une suite réelle $(a_n)$ positive telle que, pour tout $n\in\mathbb{N}$:
>$$
>u_n=(-1)^na_n\text{  ou  }u_n=(-1)^{n+1}a_n
>$$
>La série de terme général $u_n$, $\sum{u_n}$, est alors dite série alternée.

>[!tip] Critère Spécial des Séries Alternées (CSSA)
>Soit $(u_n)$ une suite réelle alternée.
>Si $(|u_n|)$ est décroissante, et converge vers 0 alors:
>1. $\sum{u_n}$ converge
>2. $\forall{n}\in\mathbb{N},|R_n|\leqslant|u_{n+1}|$

>[!quote]- Démonstration 
>![[Critère Spécial des Séries Alternées (DEMO)]]

>[!example] Proposition - Application aux séries de Riemann
>Soit $\alpha\in\mathbb{R}$. Alors $\sum\frac{(-1)^n}{n^\alpha}\text{  converge  }\iff\alpha>0$
---
author: Guillaume Euvrard
theme: "Démonstrations du chapitre Séries Numériques"
assignment: Maths
state: WIP
link: ""
pin: false
type: part
semester: S3
---

>[!info]- Remarques
>+ La propriété 1 reste vraie si l'inégalité $u_n\leqslant{v_n}$ n'est satisfaite qu'à part d'un certain rang au lieu de pour tout $n\in\mathbb{N}$. Autrement dit, elle s'applique s'il existe $n_0\in\mathbb{N}$ tel que $$\forall{n}\in\mathbb{N},n\geqslant{n_0}\implies{u_n}\leqslant{v_n}$$
>+ La propriété 1 s'applique en particulier au cas où $u_n=o(v_n)$. En effet, dans ce cas, la relation $u_n\leqslant{v_n}$ est bien satisfaite à partir d'un certain rang.

## Preuve
1. Notons $(S_n)$ les sommes partielles de $\sum{u_n}$ et $(T_n)$ les sommes partielles de $\sum{u_n}$. 
   On remarque tout d'abord que les suites $(S_n)$ et $(T_n)$ sont toutes les deux croissantes. En effet, pour tout $n\in\mathbb{N}$, $$S_{n+1}-S_n=u_{n+1}\geqslant0\,\,\text{ et }\,\,T_{n+1}-T_n=v_{n+1}$$
   Donc on sait que $$(S_n)\text{ converge }\iff(S_n)\text{ majorée}$$
   Par ailleurs, comme pour tout $n\in\mathbb{N},u_n\leqslant{v_n},$ on a: $$\forall{n}\in\mathbb{N},S_n\leqslant{T_n}$$
   Ainsi, si $\sum{v_n}$ converge, alors $(T_n)$ est bornée. Elle admet donc un majorant $M$. On a alors pour tout $n\in\mathbb{N}$: $$S_n\leqslant{T_n}\leqslant{M}$$
   $M$ est donc aussi un majorant de $(S_n)$. La suite $(S_n)$ est dont majorée et, comme elle est croissante, elle converge. Ce qui démontre la propriété (a).
   La propriété (b) est démontrée du même coup, car c'est la contraposée de (a).
2. Supposons que $(u_n)\sim(v_n)$. Alors il existe une suite $(\varepsilon_n)$ telle que:$$\forall{n}\in\mathbb{N},u_n=v_n\times(1+\varepsilon_n)\,\,\text{ et }\,\,\varepsilon_n\underset{n\to+\infty}{\longrightarrow}0$$
   Comme $(\varepsilon_n)$ converge vers $0$, elle est comprise entre $-\frac12$ et $+\frac12$ à partir d'un certain rang: il existe $n_0\in\mathbb{N}$ tel que:$$\begin{array}{lll}\forall{n}\in\mathbb{N},n\geqslant{n_0}&\implies&-\frac12\leqslant\varepsilon_n\leqslant\frac12\\&\implies&\frac12\leqslant1+\varepsilon_n\leqslant\frac32\\&\implies&\frac12v_n\leqslant{u_n}\leqslant\frac32v_n\end{array}$$
   Alors si $\sum{u_n}$ converge, on déduit la propriété 1 et de l'inégalité $\frac12v_n\leqslant{u_n}$ que $\sum\frac12v_n$ converge et donc que $\sum{v_n}$ converge.
   Et si $\sum{u_n}$ diverge, on déduit de la propriété 1 et de l'inégalité $u_n\leqslant\frac32v_n$ que $\sum\frac32v_n$ diverge et donc que $\sum{v_n}$ diverge.
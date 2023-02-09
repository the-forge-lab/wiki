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
## Preuve
Soit une suite $(u_n)$ alternée. Alors il existe une suite $(a_n)$ positive tel que:
$$(u_n)=\Big((-1)^na_n\Big)$$
La suite positive $(a_n)$ est en fait la suite $(|u_n|)$. D'après les hypothèses du théorème, elle est donc décroissante et converge vers 0. 
Notons $(S_n)$ les sommes partielles de $\sum{u_n}$: pour tout $n\in\mathbb{N}$,
$$S_n=a_0-a_1+a_2-a_3+\cdots+(-1)^na_n$$
Dans une première étape, montrons que les suites $(S_{2n})$ et $(S_{2n+1})$ sont adjacentes.
1. Monotonie de $(S_{2n})$ : cette suite contient les termes de rangs pairs de $(S_n)$. Le terme suivant $S_{2n}$ est donc $S_{2(n+1)}=S_{2n+2}$. Ainsi, pour tout $n\in\mathbb{N}$:
   ![[Demo1.png]]
   Mais comme $(a_n)$ est décroissante, $-a_{2n+1}+a_{2n+2}$ est négatif. La suite $(S_{2n})$ est donc décroissante.
2.  Monotonie de $(S_{2n+1})$ : cette suite contient les termes de rangs impairs de $(S_n)$. Le terme suivant $S_{2n+1}$ est donc $S_{2(n+1)+1}=S_{2n+3}$. Ainsi, pour tout $n\in\mathbb{N}$:
   ![[demo3.png]]
   Mais comme $(a_n)$ est décroissante, $a_{2n+2}-a_{2n+3}$ est positif. La suite $(S_{2n+1})$ est donc croissante.
3. Étude de $S_{2n+1}-S_{2n}$: pour tout $n\in\mathbb{N}$:
   ![[demo2.png]]
   Comme $(a_n)$ converge vers 0, $(S_{2n+1}-S_{2n})$ converge aussi vers 0.

Ainsi, les suites $(S_{2n})$ et $(S_{2n+1})$ sont adjacentes. Elles convergent toutes les deux et admettent une même limite $l$. Mais alors,
$$
\left.\begin{array}{cl}
	S_{2n}&\underset{n\to+\infty}\longrightarrow{l}\\
	S_{2n+1}&\underset{n\to+\infty}\longrightarrow{l}
\end{array}\right\}
\implies{S}_{n}\underset{n\to+\infty}\longrightarrow{l}
$$
Ce qui montre que $(S_n)$ converge, et donc que $\sum{u_n}$ converge.
Montrons maintenant que pour tout $n\in\mathbb{N},|R_n|\leqslant|u_{n+1}|$: les suites $(S_{2n})$ et $(S_{2n+1})$ étant adjacentes, on a pour tout $n\in\mathbb{N}$: 
$$
S_{2n+1}\leqslant{S_{2n+3}}\leqslant{l}
\leqslant{S_{2n+2}}\leqslant{S_{2n}}
$$
Ainsi, $|R_n|=S_{2n}-l\leqslant\underbrace{S_{2n}-S_{2n+1}}_{|u_{2n+1}|}$
De même, $|R_{2n+1}|=S_{2n+1}-l\leqslant\underbrace{S_{2n+2}-S_{2n+1}}_{|u_{2n+2}|}$
Donc, pour tout $n\in\mathbb{N},|R_n|\leqslant|u_{n+1}|$.

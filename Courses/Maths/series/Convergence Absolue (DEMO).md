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
Considérons une série $\sum{u_n}$ absolument convergente. Alors par hypothèse, $\sum|u_n|$ converge. Définissons les suites $(u_n^+)$ et $(u_n^-)$ par:$$\forall{n}\in\mathbb{N},\,\,\,\,\,\,u_n^+=\begin{cases}u_n\text{ si }u_n\geqslant0\\0\text{ sinon}\end{cases}\,\,\,\,\,\,\text{ et }\,\,\,\,\,\,u_n^-=\begin{cases}-u_n\text{ si }u_n\leqslant0\\0\text{ sinon}\end{cases}$$
Ces deux suites sont toutes les deux positives. De plus, $(u_n)=(u_n^+)-(u_n^-)$. Enfin,
+ $\forall{n}\in\mathbb{N},0\leqslant{u_n^+}\leqslant|u_n|$ et $\sum|u_n|$ converge, donc $\sum{u_n^+}$ converge.
+ $\forall{n}\in\mathbb{N},0\leqslant{u_n^-}\leqslant|u_n|$ et $\sum|u_n|$ converge, donc $\sum{u_n^-}$ converge.
Ainsi, $\sum{u_n}=\sum(u_n^++u_n^-)$ est la somme de deux séries convergentes, donc elle converge elle aussi.
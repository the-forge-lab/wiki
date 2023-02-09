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
### [[Règle d'Alembert]] pour les [[Séries Entières]]
=> Permet de déterminer le [[Rayon de Convergence]]

>[!abstract] Théorème - Règle d"Alembert - Séries Entières
>Soit une série entière $\sum{a_nx^n}$, telle que $a_n\neq0$ APCR.
>S'il existe $l\in\mathbb{R}_+\cup\{+\infty\}$ tel que$$\lim_{n\to+\infty}\begin{vmatrix}\frac{a_{n+1}}{a_n}\end{vmatrix}=l$$
>Alors: $$\text{Rayon de convergence }=\left\lbrace\begin{array}{lll}l=0&\implies&+\infty\\l\in\mathbb{R}_+^*&\implies&\frac1l\\l=+\infty&\implies&0\end{array}\right.$$
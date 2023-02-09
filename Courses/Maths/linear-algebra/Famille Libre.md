---
author: IonisX
theme: "Algèbre Linéaire"
assignment: Maths
state: WIP
pin: false
link: ""
type: part
semester: S3
---
### Famille Libre
>[!info] Définition
> - Une famille $\{v_1,v_2,\dots,v_p\}$ de $E$ est une _famille libre_ (ou _linéairement indépendante_) si toute combinaison linéaire nulle $\lambda_1v_1+\lambda_2v_2+\cdots+\lambda_pv_p=0$ est telle que tous ses coefficients sont nuls, c’est-à-dire $\lambda_1=\lambda_2=\cdots=\lambda_p=0$
> - Si la famille est pas libre, on dit que la famille est _liée_ ou _linéairement dépendante._ Dans ce cas, il existe une combinaison linéaire nulle de $\{v_1,v_2,\dots,v_p\}$ avec au moins un coefficient non nul
> - La famille $\{v_1,v_2\}$ est liée `iff` $v_1$ est un multiple de $v_2$ ou bien $v_2$ est un multiple de $v_1$.

>[!abstract] Théorèmes
>Soit $E$ un $\mathbb{K}-ev$.
>- Une famille $\mathcal{F}=\{v_1,v_2,\dots,v_p\}$ de $p\geqslant2$ vecteurs de $E$ est une famille liée `iff` au moins un des vecteurs de $\mathcal F$ est combinaison linéaire des autres vecteurs de $\mathcal{F}$
>- Soit $\mathcal{F}=\{v_1,v_2,\dots,v_p\}$, une famille de vecteurs de $\mathbb{R}^n.$ Si $\mathcal{F}$ contient plus de $n$ éléments (c’est-à-dire $p\geqslant{n}$), alors $\mathcal F$ est une famille liée
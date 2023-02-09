---
author: IonisX
theme: Probabilités - Variables aléatoires
assignment: Maths
state: WIP
pin: false
link: 
type: part
semester: S3
---
## Fonction Génératrice d'une variable aléatoire finie
### DÉFINITION 
>[!info] Définition
>Soit $X$ est une variable aléatoire finie entière. On note $X(\Omega)=[\![0,n]\!]$ l'ensemble de ses valeurs possibles. Sa fonction génératrice est alors la fonction $G_X$ définie pour tout $t\in\mathbb{R}$ par
>$$
>G_X(t)=E(t^X)=\displaystyle\sum^n_{k=0}P(X=k)t^k
>$$

#### Remarques
1. La condition $X(\Omega)=[\![0,n]\!]$ peut être enlevée. En fait, il suffit d'avoir $X(\Omega)\subset[\![0,n]\!]$, quitte à poser $P(X=k)=0$ pour certaines valeurs de $k$.
2. La fonction $G_X$ est un polynôme en $t$: en notant, pour tout $k\in[\![0,n]\!],p_k=P(X=k)$, on a$$G_X(t) = p_0 + p_1 t + \cdots p_n t^n \Longrightarrow G_X\in\Bbb R_n[X]$$
3. Si deux variables aléatoires finies entières $X$ et $Y$ ont même fonction génératrice, alors elles ont même distribution. C'est en effet une propriété des fonctions polynomiales:$$\begin{array}{lll} G_X=G_Y&\Longleftrightarrow&\forall t\in\Bbb R,\displaystyle\sum_{k=0}^n P(X{=}k)t^k =\displaystyle\sum_{k=0}^nP(Y{=}k)t^k\\&\Longleftrightarrow&\forall k\in[\![0,n]\!],P(X{=}k)=P(Y{=}k)\end{array}$$
   Ainsi, la fonction génératrice d'une variable aléatoire caractérise entièrement sa distribution.

>[!tip] Théorème
>Soit $X$, une variable aléatoire finie entière et $G_X$, sa fonction génératrice. Alors:
>$$\left|\begin{array}{l}G_X(1)=1\\\mbox{E}(X) = G_X\,'(1)\\\mbox{Var}(X) = G_X\,''(1) + G_X\,'(1) - \big(G_X\,'(1)\big)^2\end{array}\right.$$
>*A apprendre pour le chapitre, mais tout oublier après.*

La fonction $G_X$ contient toute l'information donnée par la distribution de la variable $X$. Ainsi, on peut aussi en déduire l'espérance et la variance de la variable.

>[!tip] Théorème
>Soient $X$ et $Y$ deux variables aléatoires entières, finies et **indépendantes**. Alors:
>$$G_{X+Y}=G_X\times{G}_Y$$

>[!warning] Remarques
>$G_{X+Y}=G_X+G_Y\centernot\implies{X}$ et $Y$ indépendantes.
>$X$ et $Y$ liées $\centernot\implies{G}_{X+Y}\neq{G}_X+G_Y$
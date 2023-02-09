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
### Fonctions Développable en [[Séries Entières]]

#### Définition
>[!info] Définition
>Une fonction $f$ est **développable en série entière** s'il existe une série entière $\sum{a_nx^n}$ de [[Rayon de Convergence]] $R\ne0$ telle que: $$\forall{x}\in\,]-R,R[,f(x)=\displaystyle\sum^{+\infty}_{n=0}a_nx^n$$

>[!example] Remarque
>Si $f$ est développable en série entière, alors:
>1. La fonction $f$ est nécessairement de classe $C^{\infty}$ sur $]-R,R[$.
>2. Ce développement est unique. En effet, le [[Théorème de Dérivation - Intégration]] implique: $$\forall{n}\in\mathbb{N},a_n=\dfrac{f^{(n)}(0)}{n!}$$ Il ne peut pas exister d'autres séries entières convergeant vers $f$.

#### Stabilité par Somme et par Produit
>[!done] Conditions
>Soient $f$ et $g$ deux fonctions admettant chacune un développement en séries entières de rayon de convergence $R_f$ et $R_g$:$$f(x) = \displaystyle\sum_{n=0}^{+\infty} a_n\,x^n\qquad\text{et}\qquad g(x) = \displaystyle\sum_{n=0}^{+\infty} b_n\,x^n$$

Alors $f+g$ et $f\times{g}$ admettent des développements en séries entières. Leurs rayons de convergence vérifient $R\geqslant\min(R_f,R_g)$ et les séries s'obtiennent en additionnant et multipliant les séries de $f$ et de $g$.

>[!tip] Addition
>$$f(x)+g(x)= \displaystyle\sum_{n=0}^{+\infty} (a_n+b_n)\,x^n$$

>[!tip] Multiplication
>$$f(x)\times g(x) = \displaystyle\sum_{n=0}^{+\infty} c_n\,x^n\qquad\text{où}\qquad c_n = \displaystyle\sum_{k=0}^n a_k b_{n-k}$$

#### Fonctions de Référence

>[!quote] Fonction Exponentielle
>$$e^x = \displaystyle\sum_{n=0}^{+\infty} \dfrac{x^n}{n!} = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots$$
>[[Rayon de Convergence]] = $+\infty$

>[!quote] Fonction Logarithmique
>$$\ln(1+x) = \displaystyle\sum_{n=1}^{+\infty} (-1)^{n-1}\,\dfrac{x^n}{n} = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} +\cdots$$
>[[Rayon de Convergence]] = 1

>[!quote] Fonction Sinus
>$$\sin(x) = \displaystyle\sum_{n=0}^{+\infty} (-1)^n\dfrac{x^{2n+1}}{(2n+1)!} = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!}+\cdots\,$$
>[[Rayon de Convergence]] = $+\infty$

>[!quote] Fonction Cosinus
>$$\cos(x) = \displaystyle\sum_{n=0}^{+\infty} (-1)^n \dfrac{x^{2n}}{(2n)!} = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} +\cdots\,$$
>[[Rayon de Convergence]] = $+\infty$

>[!quote] Fonction Puissance
>$$(1+x)^\alpha = \displaystyle\sum_{n=0}^{+\infty} \dfrac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n = 1+\alpha x + \dfrac{\alpha(\alpha-1)}{2!}x^2 + \cdots\,$$
>[[Rayon de Convergence]] = $\alpha\in\mathbb{N}$ `?` $+\infty$ `:` $1$

En particulier, 
$$\left\lbrace\begin{array}{lllll} \dfrac{1}{1+x}&=&\displaystyle\sum_{n=0}^{+\infty} (-1)^n x^n &= &1 - x + x^2 - x^3 + \cdots\\ \dfrac{1}{1-x}&=&\displaystyle\sum_{n=0}^{+\infty} x^n &= &1 + x + x^2 + x^3 + \cdots\, \end{array}\right.$$

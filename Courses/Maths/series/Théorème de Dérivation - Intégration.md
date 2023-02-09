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
### Théorème de Dérivation - Intégration

>[!done] Conditions
>Soient une [[Séries Entières]] $\sum{a_nx^n}$ de [[Rayon de Convergence]] non nul $R\in\mathbb{R}^*_+\cup\{\infty\}$ et sa somme $f(x)=\displaystyle\sum^{+\infty}_{n=0}a_nx^n$.


#### Énoncé du Théorème
1. Les séries $$\quad\textstyle\sum \left(\displaystyle\int_0^x a_nt^n\,\text{d}t\right)=\sum a_n\,\dfrac{x^{n+1}}{n+1}\quad\,\,\,\text{ et }\,\,\,\quad\sum (a_nx^n)'=\sum na_n\,x^{n-1}\quad$$ sont des séries entières qui ont le même rayon de convergence $R$ que la série initiale  $\sum{a_nx^n}$.
2. La fonction $f$ est continue et dérivable sur $]-R,R[$ et $$\forall{x}\in\,]-R,R[,\left\lbrace\begin{array}{ccccc} \displaystyle\int_0^x f(t)\,\text{d}t &= &\displaystyle\sum_{n=0}^{+\infty} \left(\int_0^x a_nt^n \,\text{d}t\right) &= &\displaystyle\sum_{n=0}^{+\infty} a_n\,\dfrac{x^{n+1}}{n+1}\\ f'(x)&= &\displaystyle\sum_{n=0}^{+\infty} (a_nx^n)' &= &\qquad \displaystyle\sum_{n=1}^{+\infty} na_n\,x^{n-1} \end{array}\right.$$
3. Si la série $\sum{a_nx^n}$ converge absolument aux bornes $±R$ du disque ouvert de convergence, la continuité de $f$ et la convergence de la série intégrée s'étendent à ces bornes.

>[!example] Remarque
>Il est facile de voir que $\quad\sum a_n\,\dfrac{x^{n+1}}{n+1}\quad$ et $\quad\sum na_n\,x^{n-1}\quad$ sont des séries entières.
>+ La première se met sous la forme $\sum\alpha_nx^n$ en posant $\alpha_n=\frac{a{_n-1}}n$ pour $n>0$ et $\alpha_0=0$.
>+ La seconde se met sous la forme $\sum\beta_nx^n$ avec $\beta_n=(n+1)a_{n+1}$.

#### Corollaire
=> On peut dériver autant de fois que l'on veut la série.

1. $f$ est de classe $C^\infty$ sur $]-R,R[$.
2. Pour tout $k\in\mathbb{N}$ et pour tout $x\in\,]-R,R[$,$$f^{(k)}(x) = \displaystyle\sum_{n=k}^{+\infty} n(n-1)\cdots(n-k+1)a_n\,x^{n-k} = \displaystyle\sum_{n=k}^{+\infty} \dfrac{n!}{(n-k)!}a_n\,x^{n-k}$$Cette dernière série a un rayon de convergence égal à $R$.

#### Conséquences
Pour tout $k\in\mathbb{N}$ et $x=0$, seul le premier terme de la série de $f^{(k)}(0)$ est non nul.
Ainsi, $f^{(k)}(0) = \dfrac{k!}{(k-k)!}a_k 0^0 = k!a_k$.
Donc, $a_k=\dfrac{f^{(k)}(0)}{k!}$ et $f(x) = \displaystyle\sum_{n=0}^{+\infty} a_nx^n = \displaystyle\sum_{n=0}^{+\infty} \dfrac{f^{(n)}(0)}{n!}\,x^n$.

**Attention !** Cela ne veut pas dire que toute fonction de classe $C^\infty$ peut s'écrire sous cette forme.
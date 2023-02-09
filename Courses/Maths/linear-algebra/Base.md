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
## Base
>[!info] Définition
>Soit $E$, un $\mathbb{K}-ev$.
>Une famille $\mathcal{B}=(v_1,v_2,\dots,v_n)$ de vecteurs de $E$ est une _base_ de $E$ si $\mathcal{B}$ est une famille **libre _et_ génératrice**.
>On parle de généralisation du concept de repère.

>[!abstract] Théorème
>Soit $\mathcal{B}=(v_1,v_2,\dots,v_n)$, une base de l’espace vectoriel $E$. Tout vecteur $v\in{E}$ s’exprime de façon unique comme combinaison linéaire d’éléments de $\mathcal{B}$. Autrement dit, il existe des scalaires $\lambda_1,\dots,\lambda_n\in\mathbb{K}$ uniques tels que : $v=\lambda_1v_1+\lambda_2v_2+\cdots+\lambda_nv_n$
>$$\forall\,v\in{E},\exists!(\lambda_1,\dots,\lambda_n)\in\mathbb{K}^n\big/v=\lambda_1v_1+\lambda_2v_2+\cdots+\lambda_nv_n$$

>[!tip] Propriété
>$$\text{If}\begin{cases} \mathcal{F}\text{ est composée de }n\text{ vecteurs}\\ \dim{E}=n \end{cases} \text{then} \begin{cases} \mathcal{F}\text{ est libre}\\ \mathcal{F}\text{ est génératrice}\\ \mathcal{F}\text{ est une base de }E \end{cases}$$

### Base Canonique
=> base que l’on utilise intuitivement pour parler de deux vecteurs dans le plan.
Existence d’une base = Tout espace vectoriel admettant une famille finie génératrice admet une base

### Base Incomplète
>[!abstract] Théorème
>Soit $E$, un $\mathbb{K}-ev$ admettant une famille génératrice finie.
>+ Toute famille libre $\mathcal L$ peut être complétée en une base.
>	+ ⇒ Il existe une famille $\mathcal F$ telle que $\mathcal L\cup\mathcal F$ soit une famille génératrice de $E$.
>+ De toute famille génératrice $\mathcal G$ on peut extraire une base de $E$.
>	+ ⇒ Il existe une famille $\mathcal B\subset\mathcal G$ telle que $\mathcal B$ soit une famille libre et génératrice de $E$.

#### Généralisation
Soit $\mathcal G$ une famille génératrice finie de $E$ et $\mathcal L$ un famille libre de $E$. Alors il existe un sous ensemble $\mathcal F$ de $\mathcal G$ tel que $\mathcal L\cup\mathcal F$ soit une base de $E$.
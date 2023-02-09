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
### Famille Génératrice 
>[!info] Définition
>Soit $E$ un $\mathbb{K}-ev$. Soient $v_1,\dots,v_p$ des vecteurs de $E$.
>Une famille $\{v_1,v_2,\dots,v_p\}$ de $E$ est une _famille génératrice_ si tout vecteur de $E$ est une combinaison linéaire des vecteurs $v_1,\dots,v_p$, c’est à dire : $\forall\,v\in{E},\exists\,\lambda_1,\dots,\lambda_p\in\mathbb{K},v=\lambda_1v_1+\cdots+\lambda_pv_p$

>[!abstract] Théorèmes
>+ Soit $\mathcal{F}=\{v_1,v_2,\dots,v_p\}$ une famille génératrice de $E$. Alors $\mathcal{F}'=\{v_1',v_2',\dots,v_p'\}$ est aussi une famille génératrice de $E$ `iff` tout vecteur de $\mathcal{F}$ est une combinaison linéaire de vecteurs de $\mathcal{F}'$.
>+ Si la famille de vecteurs $\mathcal{F}=\{v_1,\dots,v_p\}$ engendre $E$ et si l’un des vecteurs, par exemple $v_p$, est combinaison linéaire des autres, alors la famille $\mathcal{F}\,\backslash\,\{v+_p\}=\{v_1,\dots,v_{p-1}\}$ est encore génératrice de $E$.
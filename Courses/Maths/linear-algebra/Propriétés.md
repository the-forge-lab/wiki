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
### Propriétés
> [!abstract] Intersection
>Soient $F$ et $G$, deux SEV de $E$, un $\mathbb{K}-ev$.
>Alors, l’intersection $F\cap{G}$ est un SEV de $E$.
>Donc, $F_1\cap F_2\cap F_3\cap\cdots\cap F_n$ est un S.E.V.

>[!abstract] Somme
>- Définition 
>	- L’ensemble de tous les éléments $u+v$ où $u$ est un élément de $F$ et $v$ un élément de $G$, est appelé _somme_ des sev $F$ et $G$.
>	- $F+G=\{u+v|u\in{F},v\in{G}\}$
>- Propriétés
>	- $F+G$ est un SEV de $E$
>	- $F+G$ est le plus petit SEV de $E$ contenant $F$ et $G$.
>- **Somme Directe**
>	- $F$ et $G$ sont en _somme directe_ dans $E$ si
>		- $F\cap{G}=\{0_E\}$
>		- $F+G=E$
>	- Notation : $F\oplus{G}=E$

>[!abstract] S.E.V. Engendrés
>Soit $\{v_1,\dots,v_n\}$, des vecteurs d’un $\mathbb{K}-ev\;E$.
>+ L’ensemble des [[Combinaison Linéaire]] des vecteurs $\{v_1,\dots,v_n\}$ est un SEV de $E$
>+ C'est le plus petit SEV de $E$ contenant les vecteurs $v_1,\dots,v_n$
>+ C’est le _sous-espace vectoriel engendré par $\{v_1,\dots,v_n\},$_ et il est noté: $\mathrm{Vect}(v_1,\dots,v_n)(<v_1,\dots,v_n>)$
>$$u\in\mathrm{Vect}(v_1,\dots,v_n)\iff\exists\;\lambda_1,\dots,\lambda_n\in\mathbb{K}\,\big/\,u=\lambda_1v_1+\cdots+\lambda_nv_n$$
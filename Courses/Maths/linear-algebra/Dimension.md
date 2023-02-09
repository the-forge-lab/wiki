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
## Dimension
>[!info] Définition
>Un $\mathbb K-ev\;E$ admettant une base ayant un nombre fini d’éléments est dit de dimension finie.

#### Théorème
Toutes les bases d’un ensemble vectoriel $E$ de dimension finie ont le même nombre d’éléments

#### Lemme
Soit $\mathcal L$, une famille libre et $\mathcal G$, une famille génératrice de $E$.
Alors $\mathrm{Card}\,\mathcal{L}\leqslant\mathrm{Card}\,\mathcal{G}$

#### Proposition découlant du Lemme
Soit $E$, un $\mathbb K-ev$ de dimension $n$. Alors :
+ Toute famille libre de $E$ a au plus $n$ éléments
+ Toute famille génératrice de $E$ a au moins $n$ éléments

#### Théorème d’équivalence
Soit $E$, un $\mathbb{K}-ev$ de dimension $n$, et $\mathcal{F}=(v_1,\dots,v_n)$, une famille de $n$ vecteurs de $E$. Alors, il y a équivalence entre :
- $\mathcal{F}$ est une base de $E$
- $\mathcal{F}$ est une famille libre de $E$
- $\mathcal{F}$ est une famille génératrice de $E$
---
### Dimension d'un S.E.V.
#### Principe de base
-   Tout sev $F$ de $E$ est de dimension finie
-   $\dim\,F\leqslant\dim\,E$
-   $\dim\,F=\dim\,E\iff{F}=E$

#### Corollaire
-   Soient $F$ et $G$, deux sev d’un ev $E$ avec $F$ de dimension finie et $G\subset{F}$.
-   $F=G\iff\dim{F}=\dim{G}$

>[!abstract] Théorème des 4 dimensions
>- Soit $E$ un espace vectoriel de dimension finie Soient $F,G$ des sous-espaces vectoriels de $E$
>- $\dim(F+G)=\dim{F}+\dim{G}-\dim(F\cap{G})$
>- Corollaire 1: Si $E=F\oplus{G}$, alors $\dim{E}=\dim{F}+\dim{G}$
>- Corollaire 2: Tout sev $F$ d’un $ev$ $E$ de dimension finie admet un supplémentaire
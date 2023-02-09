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
## Espace Vectoriel
>[!info] Définition
> + Un [[Espace Vectoriel]] est un ensemble formé de vecteurs, de sorte que l'on puisse additionner (et soustraire) deux vecteurs $u,v$ pour en former un troisième $u+v$ (ou $u-v$) et aussi afin que l'on puisse multiplier chaque vecteur $u$ par un facteur $\lambda$ pour obtenir un vecteur $\lambda\cdot{u}$.
> + On définit un $\mathbb{K}\textit{-espace vectoriel}\;(\text{ou }\mathbb{K}-ev)$ par un ensemble non vide $E$ muni de :
> 	+ d’une loi de composition interne, c'est à dire d’une application de $E\times{E}$ dans $E$:
> $$\begin{matrix}+:&E\times{E}\longrightarrow{E}\\&(u,v)\mapsto{u+v}\end{matrix}$$
> 	+ d’une loi de composition externe, c'est à dire d’une application de $\mathbb{K}\times{E}$ dans $E$: 
> 	$$\begin{matrix}\cdot:&\mathbb{K}\times{E}\longrightarrow{E}\\&(\lambda,v)\mapsto\lambda\cdot{v}\end{matrix}$$

### Vocabulaire
Soit $E$ un $\mathbb{K}\textit{-espace vectoriel}$
+ Les éléments de $E$ sont des *vecteurs*
+ Les éléments de $\mathbb{K}$ sont des _scalaires_
+ L’_élément neutre_ $0_E$ s’appelle aussi le _vecteur nul_
+ Le _symétrique_ $-u$ d’un vecteur $u\in{E}$ s’appelle aussi l’_opposé_
+  La loi de composition interne sur $E$ notée ‘$+$’ est l’_addition_
+  La loi de composition externe sur $E$ est la _multiplication par un scalaire_
+  Un S.E.V. de dimension 1 est appelé _droite vectorielle_
+  Un S.E.V. de dimension 2 est appelé _plan vectoriel_
+  Un S.E.V. de dimension $n-1$ est appelé _hyperplan_
+ La dimension d’un espace vectoriel de dimension finie E, notée $\dim{E}$, est , par définition, le nombre d’éléments d’une base E.
---
### Axiomes
>[!tip] Pour la loi ‘$+$’
>+ Commutativité de ‘$+$’ => $\forall(u,v)\in{E}^2,u+v=v+u$
>+ Associativité de ‘$+$’ => $\forall(u,v,w)\in{E}^3,u+(v+w)=(u+v)+w$
>+ Existence d’un élément neutre => $\exists\,0_E\in{E}/\forall\,u\in{E},u+0_E=u$
>+ Symétrique => $\forall\,u\in{E},\exists\,u'\in{E}/u+u'=0_E\\u'=-u$
>
>**Remarks**
>- Il existe un unique élément neutre $0_E$
>- Pour $u$ un élément de $E$, il existe un unique symétrique $-u$

>[!tip] Pour la loi ‘•’
>+ $1_E$ est l’élément neutre de la loi ‘•’ => $\forall\,u\in{E},1_E\cdot{u}=u$
>+ ‘•’ est la multiplication par un scalaire, ‘$\times$’ est la multiplication dans le corps => $\mathbb{K}$ $\forall\,(\lambda,\mu)\in\mathbb{K}^2,\forall\,u\in{E},\lambda\cdot(\mu\cdot{u})=(\lambda\times\mu)\cdot{u}$)

>[!tip] Pour les lois ‘+’ et ‘•’ entre elles
>+ Distributivité par rapport à l’addition des vecteurs => $\forall\,\lambda\in\mathbb{K},\forall\,(u,v)\in{E}^2,\lambda\cdot(u+v)=\lambda\cdot{u}+\lambda\cdot{v}$
>+ Distributivité par rapport à l’addition des scalaires => $\forall\,(\lambda,\mu)\in\mathbb{K}^2,\forall\,u\in{E},(\lambda+\mu)\cdot{u}=\lambda\cdot{u}+\mu\cdot{u}$
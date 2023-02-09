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
## Application Linéaire
>[!info] Définitions
>Soit $E$ et $F$, deux $\mathbb{K}-ev$
>+ Une application $f$ de $E$ dans $F$ est une _application linéaire_ si:
>$$ \forall\;u,v\in{E}, \forall\;\lambda\in\mathbb{K},\\ \begin{cases} f(u+v)=f(u)+f(v)\\ f(\lambda\cdot{u})=\lambda\cdot{f}(u) \end{cases} \iff f(\lambda{u}+v)=\lambda{f}(u)+f(v) $$

+ L’ensemble des applications linéaires de $E$ dans $F$ est noté: $\mathcal{L}(E,F)$.
+ Une application linéaire de $E$ dans $F$ est aussi appelée _morphisme_ d’espaces vectoriels.
+ Une application linéaire de $E$ dans $E$ est appelée _endomorphisme_ de $E$.
+ L’ensemble des endomorphisme de $E$ est noté $\mathcal{L}(E)$.
+ L’_application nulle_, notée $0_{\mathcal{L}(E,F)}$ correspond à:

$$
0_{\mathcal{L}(E,F)}=\forall\;u\in{E},
\begin{cases}\begin{array}{ll}
	f:&E\longrightarrow{F}\\
	&f(u)=0_F
\end{array}\end{cases}
$$

+ L’_application identité_, notée $\mathrm{id}_E$ correspond à:
$$
\mathrm{id}_E=\forall\;u\in{E},
\begin{cases}\begin{array}{ll}
	f:&E\longrightarrow{F}\\
	&f(u)={u}
\end{array}\end{cases}$$
---
### Image
>[!info] Définition
>$f(E)$ est _l’image_ de l’application linéaire $f$ et est notée $\mathrm{Im}\,f$
>$$\begin{array}{cc}
f:E\to{F}\text{ et }A\subset{E}\\f(A)=\{f(x)\,|\,x\in{A}\}\end{array}$$

- Si $E'$ est un S.E.V. de $E$, alors $f(E')$ est un S.E.V. de $F$
- En particulier, $\mathrm{Im}\,f$ est un S.E.V. de $F$
- $f$ est surjective `iff` $\mathrm{Im}\,f=F$
---
### Noyau
>[!info] Définition
>Le _noyau_ de $f$, noté $\ker(f)$, est l’ensemble des éléments de $E$ dont l’image est $0_F$.
>$$ \ker(f)=\{x\in{E}\,|\,f(x)=0_F\}\\ \iff\ker(f)=f^{-1}\{0_F\} $$

#### Théorème
- $f$ injective $\iff\ker(f)=\{0_E\}$
- Pour montrer que $f$ est injective, il suffit de vérifier que : $\text{if }f(x)=0_F,\text{ then }x=0_E$

#### Propositions
- L’ensemble des applications linéaires entre deux $\mathbb{K}-ev,\;E\text{ et }F$, noté $\mathcal{L}(E,F)$, est un $\mathbb{K}-ev$
- $(f+g)(u)=f(u)+g(u)\text{ et }(\lambda\cdot{f})(u)=\lambda{f}(u)$
- Le noyau de $f$ est un S.E.V. de $E$

#### Composition
- Soient $E,F,G$, trois $\mathbb{K}-ev$, $f$ une application linéaire de $E$ dans $F$ et $g$ une application linéaire de $F$ dans $G$
- $g\circ{f}$ est une application linéaire de $E$ dans $G$
- En particulier, le composé de deux endomorphismes de $E$ est un endomorphisme de $E$.
- Autrement dit, '$\circ$' est une loi de composition interne sur $\mathcal{L}(E)$
- $g\circ(f_1+f_2)=g\circ{f_1}+g\circ{f_2}$
- $(g_1+g_2)\circ{f}=g_1\circ{f}+g_2\circ{f}$
- $(\lambda{g})\circ{f}=g\circ(\lambda{f})=\lambda(g\circ{f})$
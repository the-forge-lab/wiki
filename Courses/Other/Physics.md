---
author: Me + Samuel
theme: "Physics at S3"
assignment: Elphy
state: WIP
link: 
pin: false
type: full
semester: S3
---
[[Courses - MoC|Go Up]]
# Physics S3

## Electrostatique
*Dans toute cette partie, on pose $\displaystyle{k}=\frac1{4\pi\varepsilon_0}$. $k$ (sans définition préalable) est interdit en exams, mais on peut le définir comme précédemment dans chacun de ses exercices.*

### Distribution de charges discrètes
#### Champ électrique : 
$$
\overrightarrow{E}=\frac1{4\pi\varepsilon_0}
	\times\frac{Q}{r^2}\times\hat{u}
$$
avec :
$$
\hat{u}=\frac{\overrightarrow{r}}r
$$
On peut donc écrire: 
$$
\overrightarrow{E}=\frac1{4\pi\varepsilon_0}
	\times\frac{Q}{r^3}\times\overrightarrow{r}
$$

#### Force exercée sur une charge dans un champ : 
$$
\begin{array}{rcl}
	\overrightarrow{F_{a/b}}&=&q_b\overrightarrow{E}\\
	&=&\frac1{4\pi\varepsilon_0}\times
		\frac{q_b\times{Q_a}}{(r_{a\to{b}})^2}\times\hat{u}
\end{array}
$$
La force électrostatique est toujours conservative.

#### Potentiel électrique
$$
V=\frac1{4\pi\varepsilon_0}\times\frac{Q}{r}
$$
#### Champ électrique en un point
$$\overrightarrow{E}(M)=\frac1{4\pi\varepsilon_0}\times\displaystyle\sum_{i}\frac{Q_i}{r_i^2}\times\hat{u}_{i\to{M}}$$
Déduction du potentiel électrique:
$$
V(M)=\frac1{4\pi\varepsilon_0}\times\displaystyle\sum_{i}\frac{Q_i}{r_i}
$$

#### Opérateur Gradient ($\nabla$)
+ On dérive chaque composante du vecteur une par une.
$$
\begin{array}{rcl}
	\overrightarrow{E}&=&-\nabla{V}\\
	&=&-\,\overrightarrow{\mathrm{grad}}(V)\\
	&=&-\begin{pmatrix}
			\frac{\partial{V}}{\partial{x}}\\
			\frac{\partial{V}}{\partial{y}}\\
			\frac{\partial{V}}{\partial{z}}
		\end{pmatrix}_{(x,y,z)}&\longrightarrow\text{cartesian}\\
	&=&-\begin{pmatrix}
			\frac{\partial{V}}{\partial{r}}\\
			\frac1r\frac{\partial{V}}{\partial{\theta}}\\
			\frac{\partial{V}}{\partial{z}}
	\end{pmatrix}_{(r,\theta,z)}&\longrightarrow\text{cylindrical}\\
	&=&-\begin{pmatrix}
			\frac{\partial{V}}{\partial{r}}\\
			\frac1r\frac{\partial{V}}{\partial{\theta}}\\
			\frac1{r\sin(\theta)}\frac{\partial{V}}{\partial{\varphi}}
	\end{pmatrix}_{(r,\theta,\varphi)}&\longrightarrow\text{spherical}
\end{array}
$$

#### Théorème de Gauss
$$
\begin{array}{rcl}
	\phi_E&=&\displaystyle\frac{Q_{int}}{\varepsilon_0}\\
	&=&\displaystyle\oint\oint_s\overrightarrow{E}
		\cdot\overrightarrow{ds}
\end{array}
$$
+ Une surface est toujours orientée de l'intérieur vers l'extérieur
+ Produit scalaire de deux vecteurs normaux = 0

$$
\begin{array}{rcl}
	\displaystyle\phi_E&=&\displaystyle\oint\oint_\sum\overrightarrow{E}(M)\cdot\overrightarrow{ds}
	=\underbrace{\iint_{s1}\overrightarrow{E}
		\cdot\overrightarrow{ds_1}}_0
		+\underbrace{\iint_{s2}\overrightarrow{E}
			\cdot\overrightarrow{ds_2}}_0
		+\iint_{s3}\overrightarrow{E}\cdot\overrightarrow{ds_3}
	=\frac{Q_{int}}{\varepsilon_0}\\
	&\iff&\displaystyle\iint_{s3}\overrightarrow{E}
		\cdot\overrightarrow{ds_3}=\frac{Q_{int}}{\varepsilon_0}\\
	&\implies&E\times2\pi{r}L=\frac{Q_{int}}{\varepsilon_0}\\
	&\implies&E=\frac{Q_{int}}{2\varepsilon_0rL}
		=\frac{\lambda{L}}{2\varepsilon_0rL}\\
	&\iff&\displaystyle\iint_{s3}ds_3=\iint{rd\alpha}dz
		=r\int_0^{2\pi}d\alpha\int_0^Ldz=2\pi{rL}
\end{array}
$$

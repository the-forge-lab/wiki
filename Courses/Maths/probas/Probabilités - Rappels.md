---
author: Felix
theme: Rappels de Probabilités
assignment: Maths
state: WIP
link: 
pin: false
type: part
semester: S3
---
# Probabilités - Rappels

## Définitions

+ $\Omega$ = Univers = toutes les possibilités
+ `event_elementaire` = une seule possibilité
+ Event = Ensemble d'issues possibles
+ Event incompatibles  A et B = $A\cap{B}=\emptyset$
+ Event indépendants = $P(A\cap{B})=P(A)P(B)$
	+ $P(A\cap{B})=P(A)+P(B)-P(A\cup{B})$
	+ $P(A|B)=\frac{P(A\cap{B})}{P(B)}=P(B\cap{A})=P(B|A)P(A)=P(A|B)P(B)=P(B|A)P(A)$
### Variables aléatoires
+ $X(\Omega)=[\![10, -11]\!]$ 
	+ $X=10$ si pair
	+ $X=-11$ si impair
+ $P(X=10)=P(\{2\}\sqcup\{4\}\sqcup\{6\})=P(\{2\})+P(\{4\})+P(\{6\})$
+ $\mathbb{E}=\displaystyle\sum_{x_i\in{X(\Omega)}}x_iP(X=x_i)$ Espérance
+ $V(X)=\mathbb{E}((X-\mathbb{E}(X))^2)=\displaystyle\sum_{x_i\in{X(\Omega)}}(x_i-\mathbb{E}(X))^2P(X=x_i)=\mathbb{E}(X^2)-(\mathbb{E}(X))^2$
+ $\mathbb{E}(\varphi(X))=\displaystyle\sum_{x_i\in{X(\Omega)}}\varphi(x_i)P(X=x_i)$

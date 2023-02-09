---
author: IonisX
theme: Les Méthodes de Hachage
assignment: Algo
state: WIP
link: 
pin: false
type: part
semester: S3
---
#### [[Hachage]] Linéaire vs [[Hachage]] Double
Différence = Fonction d'essai
Il y a au plus $n!$ suites possibles dans le tableau

##### [[Hachage]] Linéaire
+ Principe
	+ Si collision sur `v`, alors on essaye `v+1`
	+ Si `v == len(table)` alors `v=0`
	+ `essai(x,i) = (h(x) + (i - 1)) % m`
+ Méthode simple à mettre en place
+ Problèmes:
	+ deux éléments en collision primaire ont la même séquence d'essais
	+ Plus les groupements sont importants, plus les possibilités de collisions sont importantes.
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
## Résolution des collisions
### Méthode par chainage
- Il faut une fonction de [[Hachage]] uniforme et en adéquation avec les données
- Les éléments sont chainés entre eux
	- Extérieur du tableau : chainage séparé
	- Zone d’extension du tableau si dynmalloc est pas dispo (rarement le cas) : hachage coalescent
 ![[Chainage Séparé]]
 ![[Hachage Coalescent]]
### Méthodes par Calcul
+ Aussi appelée méthodes directes ou adressage ouvert
+ Nous disposons d'une fonction de hachage uniforme et en adéquation avec les données
+ Pas de liens entre les éléments en collisions
![[Hachage Direct]]

![[Hachage Linéaire - Double]]
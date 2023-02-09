---
author: David Bouchet
theme: "68K Assembler"
assignment: Archi
state: WIP
pin: false
link: ""
type: part
semester: S3
---
## Architecture du 68K

### 1. Bus d'adresse et de donnée
+ Bus d'adresse : **23 fils**
+ Bus de donnée : **16 fils**
+ Il se comporte comme si son bus d'adresse était de **24 fils**
+ Il peut donc adresser 16 Mi mots, soit **16 Mio**

### 2. Modes de Fonctionnement
##### Mode Superviseur
+ aucune limitation
+ utilisé par l'OS
+ `sudo su`

##### Mode User
+ mode classique, limité aux actions non `sudo`
+ Utilisé par les applications
+ Bloque les actions dangereuses, et les dysfonctionnements

### 3. Registres
##### Registres de Donnée
+ `D0` => `D7`
+ 32 bits, accessibles en 8, 16, 32 bits

##### Registres d'adresse et les pointeurs de piles
+ `A0` => `A7`
+ 32 bits, accessibles en 16, 32 bits
+ Les 8 bits de poids fort sont ignorés
+ Pointeurs de pile (32 bits)
	+ `SSP` => pointeur Superviseur
	+ `USP` => pointeur User
+ `A7`
	+ contient le pointeur de pile en fonction du mode du 68K

##### Compteur Programme
`PC` (32 bits) => contient l'adresse de la prochaine ligne à exécuter

##### Registre d'état
`SR` (16 bits) => contient l'état du proc
+ Le `CCR` (ses 8 bits de poids faible) est accessible pour le mode User, et contient les flags.
| Flags | Name     | Effect                           | `if` 1      | `if` 0             |
| ----- | -------- | -------------------------------- | ----------- | ------------------ |
| `C`   | Carry    | Retenue ou dépassement non signé | Retenue     | Pas de retenue     |
| `V`   | Overflow | Dépassement signé                | Dépassement | Pas de dépassement |
| `N`   | Negative | Négatif                          | Négatif     | Positif ou nul     |
| `Z`   | Zero     | Zéro                             | Nul         | Non nul            |

+ `N` est le bit de signe du résultat
+ `Z` est à 1 si le résultat est nul
+ `C` est à 1 si il y a une retenue
+ `V` est à 1 si:
	+ `POS` + `POS` = `NEG`
	+ `NEG` + `NEG` = `POS`
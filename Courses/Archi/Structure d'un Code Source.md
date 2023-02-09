---
author: David Bouchet
theme: "68K Assembler"
assignment: Archi
state: WIP
pin: false
link: 
type: part
semester: S3
---
## Structure d'un Code Source

Exemple:
```asm68k
Main        MOVE.B       D0,D1     ; D0 -> D1
^           ^            ^         ^
ETIQUETTE   MNEMONIQUE   OPERANDE  COMMENTAIRE
```
#### 1. Etiquette 
+ Facultative
+ Doit commencer sur le premier caractère de la ligne
+ Indique l'adresse de la prochaine instruction à exécuter
+ On peut les utiliser en temps qu'opérandes (branchements)

#### 2. Mnémonique
+ Instruction ou directive d'assemblage
	+ Instruction
		+ traduite en langage machine
		+ Appartient au jeu d'instruction du proc
	+ Directive d'assemblage => permet d'aider à l'assemblage
		+ pas une instruction
		+ peut pas être traduite en langage machine
+ Extensions
	+ Parfois, servent à préciser la taille de travail
	+ `.B` pour l'octet (8 bits)
	+ `.W` pour le mot (16 bits)
	+ `.L` pour le long (32 bits)

#### 3. Opérande
+ Données des mnémoniques
+ 0, 1 ou 2 opérandes, jamais plus
	+ Opérande gauche : Source (pas modifiée)
	+ Opérande droite : Destination (modifiée)
+ Peuvent être des nombres
	+ base 2: préfixe `%`
	+ base 16: préfixe `$`
	+ base 10: pas de préfixe

#### 4. Commentaire
+ Débute par un `;`
+ Tout ce qu'il y a après existe pas en phase d'assemblage
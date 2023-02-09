---
author: David Bouchet
theme: "68k Assembler"
assignment: Archi
state: WIP
pin: false
link: ""
type: part
semester: S3
---
## Adressage

##### Immédiate
```asm68k
		MOVE.B #$23,D2
```
On déplace directement la donnée après le `#` dans la destination selon son extension.
Par exemple, pour `D2=$123456`, le résultat va être: `D2=$123423`.
Si on mets l'extension `.W`, le résultat sera: `D2=$120023`

##### Direct par Registre d'Adresse
```asm68k
		MOVE.W A2,D2
```
On move ce qu'il y a dans `A2` vers `D2`

##### Direct par Donnée
```asm68k
		MOVE.L D0,D1
```
On move ce qu'il y a dans le registre de donnée

##### Indirect par Registre d'Adresse
```asm68k
		MOVE.B (A0),D0
```
On récupère la valeur de l'adresse contenue dans `A0` (et on récupère le début de la ligne)

##### Avec Postincrémentation
```asm68k
		MOVE.B (A0)+,D0
```
On rajoute `1` à la valeur de `A0`, ça change rien pour la valeur extraite, mais ça prépare la suite.
La valeur ajoutée dépend de l'extension, c'est `B=1`, `W=2`, `L=4`

##### Avec Prédésincrémentation
```asm68k
		MOVE.B -(A0),D0
```
On diminue la valeur de `A0`, puis on récupère la nouvelle valeur.

##### Avec Déplacement
```asm68k
		MOVE.W 2(A0),D0
```
On se déplace de 2 dans `A0` puis on va chercher la valeur. Ça change pas la valeur de `A0`

##### Avec Déplacement et Index
```asm68k
		MOVE.L 2(A0,D2.W),D3
				   ^
			   (A0+D2.W+2)
```
On effectue le calcul sur la première opérande, on trouve l'adresse en question, et on move le tout dans `D3`. On laisse tout en `HEXA`

##### Absolu
```asm68k
		MOVE.W $5002,D2
```
On move direct ce qu'il y a à l'adresse `$5002` dans `D2`

>[!warning] Remarks
>+ If the data doesn't hava a `$` signe before the value, don't forget to convert to `0x00` before use!
>+ In move and index, just add those two and cut the overflow.
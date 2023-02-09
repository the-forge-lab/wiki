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
## Fonctions de Hachage 

- Classer les éléments d’une collection de données $C$ appartenant à un univers $U$ très grand.
    - Trop grand pour avoir une case mémoire par clé possible
- $h:U\to[0,m-1]$ avec $m$ qui est la taille prévue de $C$
- $\forall x\in C, h(x)$ = indice de $x$ dans un tableau de taille $m$
- Fonction de hachage
    - Uniforme (les éléments sont répartis uniformément dans le tableau)
    - Facile et rapide à calculer : pas perdre l’intéret de la fonction
    - Déterministe: pour un $x$ donné, la fonction renverra toujours le même résultat.
    - ⇒ Compliqué d’éviter les collisions
        - Nous devons savoir les gérer
- Principes de construction
    - Extraction
        - Extraire un certain nombre de bits, et les concaténer entre eux pour former une nouvelle séquence de bits
        - très simple à faire sur un ordi
        - problème = pas de bons résultats, car utilisation partielle de la clé
    - Compression
        - un utilise tous les bits, on les découpes en sous groupes d’un nombre égal de bits, que l’on combine a l’aide d’opérateurs sur bits.
        - On fait un XOR et c'est bon
        - Problème : hasher de la même manière toutes les clés, parce que les mêmes caractères donnent le même nombre, même si c'est pas le même ordre
            - On peut faire des rotations de bits vers la droite
            - Mais elle peut créer de nouvelles collisions
    - Division
        - calcul du reste de la division par $m$ de la valeur de la clé
        - `h(clé) = compression(clé) mod m`
        - si $m$ est pair, les clés paires (impaires) iront dans des indices pairs (impairs)
        - Il faut prendre un $m$ premier
    - Multiplication
        - On prend un très petit nombre $\theta\in]0,1[$ et le ramener à $[0,m-1]$
        - $h(clé)=\lfloor\big(($`compression(clé)`$\times\theta)\text{ mod }1\big)\times m\rfloor$
        - Importance: choix de $\theta$
            - pas trop près de 0
            - pas trop près de 1
            - Meilleure values:
                - $\theta=\frac{\sqrt5-1}2\text{ et }\theta=1-\frac{\sqrt5-1}2$
- Pas de fonction de hashage universelle, elle doit être appliquée aux données hashées
---
author: Fabecc
theme: L'allocation dynamique en C
assignment: Prog
state: Done
link: 
pin: false
type: full
semester: S3
---
[Go Up](Prog%20-%20MoC.md)
# Allocation dynamique de la mémoire

>[!question]

+ Principe :
	+ on veut enregistrer un truc sans connaitre la taille du truc
	+ Pas passer par la pile
+ `stackoverflow` = la stack rejoint le heap
+ pas de dynalloc en embarqué

```c
ptr = malloc(size); // => demande de la place au programme
```

>[!example]
>```c
>int* tab = (int*) malloc(42 * sizeof(int));
>```

```c
tab = realloc(tab, newtable) // => déplace les éléments de malloc pour avoir plus de place
```
Ne pas oublier de rerooter le pointeur, sinon c'est bugé

```c
calloc // => allocation rapide pour le nombre de cell dans un tableau, et init le tab.
```

### Mettre un `free` pour libérer les espaces de mémoire. 
On doit toujours avoir un `free` pour un `malloc/calloc`

```c
char* tmp = malloc(n * sizeof(char));
char* tmp = calloc(n, sizeof(char));
```

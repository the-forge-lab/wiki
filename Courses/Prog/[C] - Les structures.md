---
author: Fabecc
theme: Les structures en C
assignment: Prog
state: Done
link: 
pin: false
type: full
semester: S3
---
[Go Up](Prog%20-%20MoC.md)
# Les structures en C
---
>[!question]

---
Concept : relier des infos ensemble
4 paramètres max en C
Créer un type qui va porter toutes les infos

---

Syntaxe :
```c
struct gens {
	char name[];
	unsigned int age: 7;
	int promo;
}

void print_gens(struct gens g)
{
	printf("%s\n", g.name);
}

int main(int argc, **char argv[])
{
	struct gens e1;
	printf("%d\n", e1.age);
}
```
---
En cas de pointeur...
```c
struct gens e1;
struct gens * ptr_e1 = &e1;
(*ptr_e1).age = 42;
// <=>
ptr_e1->age = 42;
```
---
Typedef:
```c
typedef struct 
{
/* params
*/
} name;

// la struct s'appelle name
```
---
Pointeurs de fonctions
```c
struct s_cmd
{
	char* cmd; // parmas
	void (*f)(void); // return type -> function name -> args
};
```


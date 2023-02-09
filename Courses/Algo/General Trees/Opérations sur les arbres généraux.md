---
author: IonisX
theme: Les Arbres Généraux
assignment: Algo
state: Done
link: 
pin: false
type: part
semester: S3
---
## Opérations sur les arbres généraux
Taille de l'arbre => Nombre de ses nœuds
+ Hauteur / profondeur / niveau d'un nœud `x`
	+ 0 si `x` est la racine
	+ `hauteur(père(x)) + 1` sinon
	+ => nombres de liens père-fils qu'il faut suivre entre la racine et le nœud
+ Hauteur / Profondeur de l'arbre => hauteur de son noeud le plus haut (loin)
+ Longueur de cheminement
    - somme des hauteurs des noeuds
    - LC = tous les noeuds
    - LCi = que sur les noeuds internes
    - LCe = que sur les feuilles
    - ⇒ LC = LCi + LCe
- Profondeur moyenne
    - division de la longueur de cheminement par le nombre de noeuds concernés
    - nombre de liens père-fils qu’il faut suivre pour trouver un noeud du type recherché
    - PM = LC // nombre de noeuds
    - PMi = LCi // nombre de noeuds internes
    - PMe = LCe // nombre de feuilles
### Type Abstrait: 
```python
types:
  arbre, foret

utilise:
 nœud, entier, element

operations:
  cons : noeud x foret → arbre       # Operation interne d'arbre
  racine : arbre → noeud             # Observateur d'arbre
  listearbre : arbre → foret         # Operation interne de foret
  foretvide : → foret                # Operation interne de foret
  inserer : foret x entier x arbre → foret # Operation interne de foret
  supprimer : foret x entier → foret  # Operation interne de foret
  ieme : foret x entier → arbre       # Operation interne d'arbre
  nbarbres : foret → entier           # Observateur de foret
  contenu : noeud → element           # Permet de gerer les arbres etiquetes

precondition:
  inserer(F, i, A) est-défini-ssi 1 ≤ i ≤ 1 + nbarbres(F)
  supprimer(F, i) est-défini-ssi F ≠ forêtvide & 1 ≤ i ≤ nbarbres(F)
  ieme(F, i) est-défini-ssi F ≠ forêtvide & 1 ≤ i ≤ nbarbres(F)

axiomes:
  racine(cons(o, F)) = o
  listearbre(cons(o, F)) = F
  nbarbres(foret-vide) = 0
  nbarbres(inserer(F, i, A)) = nbarbres(F') + 1
  nbarbres(supprimer(F, i)) = nbarbres(F') - 1
  1 ≤ i < k ⇒ ieme(insérer(F, k, A), i) = ieme(F, i)
  k = i ⇒ ieme(insérer(F, k, A), i) = A
  k < i ≤ nbarbres(F) + 1 ⇒ ieme(insérer(F, k, A), i) = ieme(F, i - 1)
  1 ≤ i < k ⇒ ieme(supprimer(F, k), i) = ieme(F, i)
  k ≤ i ≤ nbarbres(F) - 1 ⇒ ieme(supprimer(F, k), i) = ieme(F, i + 1)

avec:
  nœudo
  arbre A
  foret F
  entier i, k
```
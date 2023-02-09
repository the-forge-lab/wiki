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
## Parcours d'un arbre général
### Parcours Profondeur
- Faire le tour de l’arbre par l’extérieur
- Même principe que le parcours profondeur des arbres binaires
- Parcours profondeur main gauche
- chaque noeud est rencontré son nombre de fils + une fois
- Ordres
    - Préfixe => en descendant vers ses fils
    - Passages intermédiaires => remonté entre les fils et le noeud
    - Suffixe => en remontant du dernier fils
- Complexité => Linéaire
>[!example]- Algorithme
>```fortran
>FUNCTION parc_prof (arbre a)
>	!! DECLARATIONS
>		integer :: nbfils, i
>	DO
>		nbfils = nbarbres(listearbre(a))
>		IF feuille(a) THEN:    ! si nbfils = 0
>			!! traitement de terminaison
>		ELSE:
>			!! traitement préfixe
>			FOR i = 1 à nbfils - 1 DO
>				parc_prof(ième(listearbre(a), i))
>				!! traitement intermédiaire
>			END DO
>			parc_prof(ième(listearbre(a), nbfils))
>			!! traitement suffixe
>		END IF
>	END DO
>END FUNCTION parc_prof
>```

### Parcours Largeur
+ Parcourir l’arbre ligne par lignes
- parcours hiérarchique => itératif
- Complexité => Linéaire
>[!example]- Algorithme
>```fortran
>FUNCTION parc_larg (arbre a)
>	!! DECLARATIONS
>		integer :: i
>		queue :: f
>	DO
>		f = filevide
>		f = enfiler(f, a)
>		WHILE non (estvide(f)) DO
>			a = premier(f)
>			f = defiler(f)
>			!! traitement sur a
>			FOR i = 1 TO nbarbres(listearbre(a)) DO
>				f = enfiler(f, ieme(listearbre(a),i))
>			END DO
>		END DO
>	END DO
>END FUNCTION parc_larg
>```
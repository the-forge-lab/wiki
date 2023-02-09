---
author: ASD
theme: Electronic in S2
assignment: Elphy
state: Done
link: 
pin: false
type: full
semester: S2
---
[[Courses - MoC|Go Up]]
# Elec

## Théorème de Millman

Pour ne pas se tromper, je vous conseille de suivre exactement la méthodologie vue en classe en exprimant d'abord V en termes de potentiel puis U en termes de tension électrique (E1, E2, etc.).  

Il faudra faire attention à ne pas prendre en compte dans la formule de Millman des résistances qui n'interviennent pas!! Par exemple, une résistance en série avec un générateur de courant n'intervient pas dans la formule de Millman! Dans d'autres cas, certaines résistances n'interviennent pas non plus (voir exercice 3 du TD 1). Vous trouverez en PJ l'énoncé du TD 1 si vous ne l'avez pas récupéré.

## Condensateur

- La tension électrique aux bornes d'un condensateur est continue à chaque instant et en particulier à `t = 0` : fermeture (ou ouverture) d'un interrupteur.

- On a la relation suivante : `i(t) = C du(t)/dt`.

- Lorsque `t ⇾ ∞`, le régime permanent (constant) est atteint et la tension aux bornes du condensateur ne dépend plus du temps : `u(t ⇾ ∞) = CSTE` et donc `i(t ⇾ ∞) = 0` : le condensateur se comporte alors comme un interrupteur ouvert. Il faut alors redessiner le circuit en remplaçant le condensateur par un interrupteur ouvert pour déterminer les autres grandeurs électriques en régime permanent (comme par exemple `u(t ⇾ ∞)`).

## Bobine

- L'intensité du courant qui traverse une bobine est continue à chaque instant et en particulier à `t = 0` : fermeture (ou ouverture) d'un interrupteur.

- On a la relation suivante : `u(t) = L di(t)/dt`.

- Lorsque `t ⇾ ∞`, le régime permanent (constant) est atteint et l'intensité du courant qui traverse la bobine ne dépend plus du temps : `i(t ⇾ ∞) = CSTE` et donc `u(t ⇾ ∞) = 0` : la bobine se comporte alors comme un interrupteur fermé. Il faut alors redessiner le circuit en remplaçant la bobine par un interrupteur fermé (ou un fil) pour déterminer les autres grandeurs électriques en régime permanent (comme par exemple `i(t ⇾∞)`)

## Remarks

- Je serai particulièrement attentif aux notations utilisées !! Vous écrirez donc `u(t), i(t), u(t = 0+), u(t = 0-), u(t ⇾∞)` , etc. Ces notations devront apparaître aussi sur vos schémas électriques...

- Les affirmations du type : à `t = 0+ , u(t) = 0` seront pénalisées... Il faudra écrire plus rigoureusement : à `t = 0+ , u(t = 0+) = 0` (voir TD).

- Les équations différentielles devront être écrites sous forme canonique : les constantes (+E , -E, etc.) devront être mises dans le membre de droite et il faudra s'arranger pour que le coefficient devant la dérivée soit égal à 1.

- Par exemple, une équation qui s'écrit : `RC du(t)/dt + uc(t) - E = 0` devra être réécrite sous forme canonique : `du(t)/dt + 1/RC uc(t) = E/RC`.

- La constante de temps du circuit s'obtient alors en inversant le coefficient qui apparaît devant la fonction inconnue (ici uc). Donc dans cet exemple : `τ = RC`.

- Grossièrement τ représente la durée qu'il faut attendre pour que le régime permanent s'établisse... Quantitativement, au bout d'une durée t = τ, le régime permanent est atteint à 63%. Au bout d'une durée t = 3 τ, le régime permanent est atteint à 95 %. Au bout d'une durée t = 5 τ, le régime permanent est atteint à 99,3 %...

- Pour résoudre une équation différentielle du premier ordre à coefficients constants sans second membre, il faudra rechercher une solution générale sous forme exponentielle (voir TD) puis trouver A à partir de la condition initiale.

- Pour résoudre une équation différentielle du premier ordre à coefficients constants avec un second membre, il faudra faire la somme de la solution générale de l'équation homogène et d'une solution particulière (voir TD). La solution particulière sera toujours une constante et pour la trouver vous pourrez annuler la dérivée dans l'équation différentielle puis identifier la fonction inconnue. La constante A devra alors être déterminée après avoir ajoutée la solution particulière.

- Il sera complètement inutile et dangereux de sortir l'artillerie lourde mathématique ! Pas d'intégrale et pas de variation de la constante...

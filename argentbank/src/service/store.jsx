// import { createStore } from 'redux';

// Pour interagir avec Redux, React-Redux utilise des custom hooks
// Les custom hooks sont des hooks écrits par les développeurs, 
// qui permettent de créer des morceaux de logique réutilisables, 
// en combinant d’autres hooks ensemble.'useState  ou useEffect'

// Pour utiliser React-Redux, il faut :
// Utiliser useDispatch  pour envoyer des actions depuis les composants.
// Utiliser useSelector  pour extraire des morceaux de state et mettre à jour le composant en cas de changement de state.


// import produce from "immer";

//Immer s'occupe de faire des copies de tous les objets/tableaux qui sont modifiés pour ne pas changer le state précédent.
//Avec Immer, plus besoin de destructuring, on fournit un state initial et des instructions de modifications, 
//puis Immer va produire un nouveau state pour nous
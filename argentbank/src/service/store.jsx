// import { createStore } from 'redux';(deprecated)

// Pour interagir avec Redux, React-Redux utilise des custom hooks
// Les custom hooks sont des hooks écrits par les développeurs, 
// qui permettent de créer des morceaux de logique réutilisables, 
// en combinant d’autres hooks ensemble.'useState  ou useEffect'

// Pour utiliser React-Redux, il faut :
// Utiliser useDispatch  pour envoyer des actions depuis les composants.
// Utiliser useSelector  pour extraire des morceaux de state et mettre à jour le composant en cas de changement de state.

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './signUpSlice';


export const store = configureStore({
    reducer: {
        globalState: globalReducer,
    }
  })

//   store.subscribe(() => {
//     console.log("Nouveau state:");
//     console.log(store.getState());
//   });

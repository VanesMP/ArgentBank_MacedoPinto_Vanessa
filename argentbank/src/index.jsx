import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// // on importe le Provider
// //C’est grâce au Provider les cutom hooks auront accès au store.
// import { Provider } from "react-redux";
// // on importe le store
// import { store } from "./service/store.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    // </Provider>
);


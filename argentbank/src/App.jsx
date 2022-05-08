import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
// // on importe le Provider
// //C’est grâce au Provider les cutom hooks auront accès au store.
import { Provider } from "react-redux";
// // on importe le store
import { store } from "./service/store.jsx";

// import { createStore } from 'redux';

// createStore({
//     data: {
//       email: '',
//       password: '',
//     }
//   });

function App() {

    return ( 
        <div className='App'>
    <Provider store={store}>
    <Router>  
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/user/signup" element={<SignUp/>}/>
          <Route path='/user/profile' element={<Profile/>}/>
        </Routes> 
    </Router> 
    </Provider>
        </div>
    );
}

export default App;
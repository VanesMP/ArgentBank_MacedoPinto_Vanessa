import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import User from './pages/User';

function App() {
    return ( 
        <div className='App'>
    <Router>  
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/signup/" element={<SignUp/>}/>
          <Route path='/signup/user/' element={<User/>}/>
        </Routes> 
    </Router> 
        </div>
    );
}

export default App;
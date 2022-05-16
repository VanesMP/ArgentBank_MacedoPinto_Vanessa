import React from 'react';
import '../style/main.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import { getToken } from '../service/axios';
import { AddEmail, AddPassword } from '../service/signUpSlice';


export default function SignUp() {


  //useForm est plus performant dans ce cas que le useState, et le onChange,
  // on a pas de changement d'etat a chaque saisi de l'utilisateur ce qui peux eviter des rendu en chaine
  //useForm: va permettre de récupérer les éléments à utiliser.
  //1:register: va permettre d' enregistrer/sauvegarder les valeurs que vont prendre un champs
  //name='text' ref={register} est remplacer par = {...register('text')} name='text' dans v7
  //2:handleSubmit: fct du formulaire pour transferer les données
  //3:formState:  permet de récuperer des information sur l' etat du formulaire
  //3: error: recupere et peux afficher les erreurs
  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm()
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  async function onSubmit(data, e) {
    e.preventDefault();
    console.log('data: ',data);
   
    getToken(data, navigate, dispatch)
    
    dispatch(AddEmail(data.email));
    dispatch(AddPassword(data.password)); 
    
  }

  return (
        <div>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor='email'>Username</label>
            <input type="text" id="email" name='email' {...register('email', {required:"Email is required"})}/>      
            {errors.email && <span className='invalid'>{errors.email.message}</span>}
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name='password' {...register('password', {required: "Enter your password"})}/>
            {errors.password && <span className='invalid'>{errors.password.message}</span>}
          </div>
          <div className="input-remember">
            <label htmlFor='remember-me'>Remember me</label>
            <input type="checkbox" id="remember-me" name='remember-me' {...register('remember-me')}/>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <Link to="/signup/user" className="sign-in-button">Sign In</Link> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button" type="submit" value="Submit" disabled={isSubmitting} >Sign In</button>
          {/* <!--  --> */}
        </form>
      </section>
    </main>
    <Footer/>
        </div>
    )
  // }
}
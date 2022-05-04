import React from 'react';
import '../style/main.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useForm } from 'react-hook-form';
import API from '../service/api.jsx';
// import { Link } from 'react-router-dom';


export default function SignUp() {
// export default class SignUp extends React.Component {
  // state = {
  //   email: '',
  //   password:''
  // }

  // handleChangeEmail = event => {
  //   this.setState({ email: event.target.value });
  // }

  // handleChangePassword = event => {
  //   this.setState({ password: event.target.value });
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: ''
  //   };

  //   this.handleChangeEmail = this.handleChangeEmail.bind(this);
  //   this.handleChangePassword = this.handleChangePassword.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChangeEmail(event) {
  //   this.setState({email: event.target.value});
  // }

  // handleChangePassword(event) {
  //   this.setState({password: event.target.value});
  // }

  // handleSubmit(event) {
  //   console.log('Email: ' + this.state.email);
  //   console.log('Password: ' + this.state.password);
  //   event.preventDefault();
  // }

  // handleSubmit = (event) => {
  //   console.log('Email: ' + this.state.email);
  //   event.preventDefault();

  //   const user = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };

  //   axios.post(`http://localhost:3001/api/v1/user/login`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // test pour verifier le submit
  // this.handleSubmit = this.handleSubmit.bind(this);
  // }


  // handleSubmit(event) {
  //   console.log('hello')
  //   event.preventDefault();
  // }

  //useForm est plus performant dans ce cas que le useState, et le onchange, on a pas de changement d'etat a chaque saisi de l'utilisateur on eux avoir des rendu en chaine
  //useForm: va permettre de récupérer les éléments à utiliser.
  //1:register: va permettre d' enregistrer/sauvegarder les valeurs que vont prendre un champs
  //name='text' ref={register} est remplacer par = {...register('text')} name='text' dans v7
  //2:handleSubmit: fct du formulaire pour transferer les données
  //3:formState:  permet de récuperer des information sur l' etat du formulaire
  //3: error: recupere et peux afficher les erreurs
  const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm()

  const onSubmit = (data) => {
    console.log('data: ',data);
   
    API
        .post(
            '/user/login',
            data 
         )
        .then(response => {console.log('Response data axiospost: ', response.data)})
        .catch(error => {console.log('Error data axiospost: ' ,error.data)});
  }

  //le formulaire est il en cours de traitement: desactive ce champs si il est cours d'envoie
  

  // render() { 
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
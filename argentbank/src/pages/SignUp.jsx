import React from 'react';
import '../style/main.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { getToken } from '../service/axios';
import { AddEmail, AddPassword } from '../service/signUpSlice';

/**Render to sign up page
 * @function SignUp
 * @returns {JSX}
 */

export default function SignUp() {

//Using the React-Hook-Form library
//The advantage of this library:
//Custon hook for managing forms: useForm: avoid rendering to the chain that we would have with an onChange(), better performance of the page
  //1:register: This method allows you to register an input/ select an element/ apply validation rules to React Hook Form, based on the HTML standard.
  //2:handleSubmit: This function will receive the form data.
  //3:formState:  Option that allows to retrieve information on the state of the form(error or isSubmitting)
  const {register, handleSubmit, formState:{errors, isSubmitting}, getValues} = useForm()
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

/**Form submission method to login user page
 * @function onSubmit
 * @param {object} data (user email and user password)
 */
  async function formData(data, e) {
    e.preventDefault();
   
    getToken(data, navigate, dispatch)
    
    dispatch(AddEmail(data.email));
    dispatch(AddPassword(data.password));
  }

 //functionality: remember-me: get in localStorage the email and the password for placeholder input
 function remenberMe() {    
   let remenberInput = getValues('remember')
   let emailInput = getValues('email');
   let passInput = getValues('password');
    if(remenberInput === true) {
      localStorage.email = emailInput;
      localStorage.password = passInput;
    } else {
      localStorage.email = "";
      localStorage.password = "";
    }
  }

  return (
        <div>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(formData)}>
          <div className="input-wrapper">
            <label htmlFor='email'>Username</label>
            <input type="text" id="email" name='email' placeholder={localStorage.email} {...register('email', {required:"Email is required"})}/>      
            {errors.email && <span className='invalid'>{errors.email.message}</span>}
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name='password' placeholder={localStorage.password} {...register('password', {required: "Enter your password"})}/>
            {errors.password && <span className='invalid'>{errors.password.message}</span>}
          </div>
          <div className="input-remember">
            <label htmlFor='remember-me'>Remember me</label>
            <input type="checkbox" id="remember-me" name='remember' {...register('remember')}/>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <Link to="/signup/user" className="sign-in-button">Sign In</Link> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button" type="submit" value="Submit" disabled={isSubmitting} onClick={remenberMe}>Sign In</button>
          {/* <!--  --> */}
        </form>
      </section>
    </main>
    <Footer/>
        </div>
    )
  // }
}
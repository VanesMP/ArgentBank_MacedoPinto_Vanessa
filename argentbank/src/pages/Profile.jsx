import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import HeaderUser from "../Components/HeaderUser";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { changeName, getUserData } from '../service/axios';
import { useNavigate } from "react-router-dom";

/** Render of user profile page
 * @function Profile 
 * @returns {JSX}
 */

export default function Profile() {

//useselector to get store element (token, firstname, lastname)
const profileToken = useSelector((state) => state.globalState.token)
const firstName = useSelector((state) => state.globalState.firstName)
const lastName = useSelector((state) => state.globalState.lastName) 

///////////////////////////////////////////////////////////////////// Modification : 
//redirection vers la page de connexion si l' utilisateur n 'est pas connecté et que l' on rentre directement le path dans l url
let navigateSignUp =  useNavigate()
  useEffect(() => {
    if (profileToken !== null){
      navigateSignUp('/user/profile')
    } else {
      navigateSignUp('/user/signup')
    }
  }, [navigateSignUp, profileToken]) 

//Using method createRef() hook to select DOM elements
const buttonEdit = React.createRef()
const buttonSave = React.createRef();

/**Method to make the name change appear
 * @function clickEdit 
 */
const clickEdit = () => {
  buttonEdit.current.classList.remove('displayInlineBlock')
  buttonSave.current.classList.remove('displayNone')
  buttonSave.current.classList.add('displayInlineBlock')
  buttonEdit.current.classList.add('displayNone')
}

/**Method to make the name change appear
 * @function clickDisplay
 */
const clickDisplay = () => {
  buttonEdit.current.classList.remove('displayNone')
  buttonSave.current.classList.remove('displayInlineBlock')
  buttonSave.current.classList.add('displayNone')
  buttonEdit.current.classList.add('displayInlineBlock')
}

  const dispatch = useDispatch();


//Method call to get the token and access the profile page
  getUserData(profileToken, dispatch)

//Recovery with react-hook-form of input values
const {register, handleSubmit, setValue} = useForm(
  {
  defaultValues:{
  firstName: firstName,
  lastName: lastName
}})
//React-Hook-From library methode : setValue()
//This function allows you to dynamically set the value of a registered field 
//and have the options to validate and update the form state. 
//At the same time, it tries to avoid unnecessary rerender.
setValue("firstName", firstName)
setValue("lastName", lastName)

/**
Method to submit name change form to backend with put request on changeName()
 * @function onSubmit
 * @param {object} data (new user firstName, new user lastName)
 */
async function onSubmit(data) {

  changeName(data, profileToken, dispatch)

}


  return(
        <div>
    <HeaderUser name={firstName} />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
        <button id="buttonEditName" ref={buttonEdit} onClick={clickEdit}>Edit Name</button>
        <div id="changeName" className="displayNone" ref={buttonSave} >
        <form onSubmit={handleSubmit(onSubmit, getUserData(profileToken, dispatch))}>
          <div className="inputs">
            <label htmlFor='firstName'></label>
            <input type="text" id="firstName" name='firstName' {...register("firstName")}/> 
            <label htmlFor='lastName'></label>
            <input type="text" id="lastName" name='lastName' {...register("lastName")}/> 
          </div> 
          <div>
            <button id="buttonSaveName" type="submit" value="Submit" onClick={clickDisplay}>Save</button>
            <button id="buttonCancelName" onClick={clickDisplay}>Cancel</button>
          </div>
          </form>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account titleAccount="Argent Bank Checking (x8349)" amountAccount="$2,082.79" descriptionAccount="Available Balance" />
      <Account titleAccount="Argent Bank Savings (x6712)" amountAccount="$10,928.42" descriptionAccount="Available Balance" />
      <Account titleAccount="Argent Bank Credit Card (x8349)" amountAccount="$184.30" descriptionAccount="Current Balance" />
    </main>
    <Footer />
        </div>
    )
}
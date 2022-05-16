import React from "react";
import { useSelector } from "react-redux";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import HeaderUser from "../Components/HeaderUser";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { changeName, getUserData } from '../service/axios';
//import { AddFirstName, AddLastName } from '../service/signUpSlice';

export default function Profile() {

//selection des elements boutons
// const buttonEdit = document.getElementById('buttonEditName');
const buttonEdit = React.createRef()
console.log(buttonEdit)
const buttonSave = React.createRef();
console.log(buttonSave)

//methode pour faire apparaitre le editName
const clickEdit = () => {
  console.log('click edit')
  // if(!buttonEdit === null){}
  buttonEdit.current.classList.remove('displayInlineBlock')
  buttonSave.current.classList.remove('displayNone')
  buttonSave.current.classList.add('displayInlineBlock')
  buttonEdit.current.classList.add('displayNone')
}
//methode pour faire disparaitre le editName
const clickDisplay = () => {
  console.log('click save')
  buttonEdit.current.classList.remove('displayNone')
  buttonSave.current.classList.remove('displayInlineBlock')
  buttonSave.current.classList.add('displayNone')
  buttonEdit.current.classList.add('displayInlineBlock')
}

  const dispatch = useDispatch();
  
  const profileToken = useSelector((state) => state.globalState.token)
  console.log({profileToken})
  const firstName = useSelector((state) => state.globalState.firstName)
  console.log({firstName})
  const lastName = useSelector((state) => state.globalState.lastName)
 
  getUserData(profileToken, dispatch)

// const changeNameRequest = () => {

// }

//recuperation avec react-hook-form des valeurs des inputs
const {register, handleSubmit, setValue} = useForm(
  {
  defaultValues:{
  firstName: firstName,
  lastName: lastName
}})

setValue("firstName", firstName)
setValue("lastName", lastName)

async function onSubmit(data) {
  // e.preventDefault();
  console.log('data: ',data);
  console.log('submit firstName:', firstName)
  console.log('userToken: ', profileToken);

  changeName(data, profileToken, dispatch)

  // clickDisplay()
}


  return(
        <div>
    <HeaderUser />
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
      {/* <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section> */}
    </main>
    <Footer />
        </div>
    )
}
import { useSelector } from "react-redux";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import HeaderUser from "../Components/HeaderUser";
import { useDispatch } from "react-redux";

import { getUserData } from '../service/axios';
//import { AddToken } from '../service/signUpSlice';

export default function Profile() {

  const dispatch = useDispatch();
  
  const token = useSelector((state) => state.globalState.token)
  const firstName = useSelector((state) => state.globalState.firstName)
  const lastName = useSelector((state) => state.globalState.lastName)
 
  getUserData(token, dispatch)

  //function edit name Put request = onClick
const buttonEdit = document.getElementById('buttonEditName')
const buttonSave = document.getElementById('changeName')
console.log(buttonEdit)
console.log(buttonSave)

const clickEdit = () => {
  console.log('click edit')
  buttonEdit.classList.remove('displayInlineBlock')
  buttonEdit.classList.add('displayNone')
  buttonSave.classList.add('displayInlineBlock')
  buttonSave.classList.remove('displayNone')
}
const clickModify = () => {
  console.log('click save')
  buttonEdit.classList.remove('displayNone')
  buttonEdit.classList.add('displayInlineBlock')
  buttonSave.classList.remove('displayInlineBlock')
  buttonSave.classList.add('displayNone')
}


  return(
        <div>
    <HeaderUser />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
        <button id="buttonEditName" onClick={clickEdit}>Edit Name</button>
        <div id="changeName" className="displayNone">
          <div className="inputs">
            <label htmlFor='firstName'></label>
            <input type="text" id="firstName" name='firstName' value={firstName}/> 
            <label htmlFor='lastName'></label>
            <input type="text" id="lastName" name='lastName' value={lastName}/> 
          </div> 
          <div>
            <button id="buttonSaveName" onClick={clickModify}>Save</button>
            <button id="buttonCancelName" onClick={clickModify}>Cancel</button>
          </div>
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
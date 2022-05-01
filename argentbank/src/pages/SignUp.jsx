import React from 'react';
// import axios from 'axios';
import '../style/main.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
// import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Email: ' + this.state.value);
    event.preventDefault();
  }

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

  render() { 
  return(
        <div>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor='email'>Username</label>
            <input type="text" id="email" value={this.state.value} onChange={this.handleChangeEmail}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" password={this.state.password} onChange={this.handleChangePassword}/>
          </div>
          <div className="input-remember">
            <label htmlFor='remember-me'>Remember me</label>
            <input type="checkbox" id="remember-me" name='remember-me'/>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <Link to="/signup/user" className="sign-in-button">Sign In</Link> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button" type="submit" value="Submit">Sign In</button>
          {/* <!--  --> */}
        </form>
      </section>
    </main>
    <Footer/>
        </div>
    )}
}
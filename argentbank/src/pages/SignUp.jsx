
import '../style/main.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function SignUp() {

    return(
        <div>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <label>Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <Link to="/signup/user" className="sign-in-button">Sign In</Link>
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
          {/* <!--  --> */}
        </form>
      </section>
    </main>
    <Footer/>
        </div>
    )
}
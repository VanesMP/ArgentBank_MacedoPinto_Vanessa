import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../style/main.css";
import logo from '../img/argentBankLogo.png';
import { store } from "../service/store";

/**Render of navigation page
 * @function HeaderUser
 * @returns {JSX}
 */

export default function HeaderUser({name}) {

//Method to reset store values
  function userLogOut() {
    console.log("hello")
    store.clear()
  }

    return (
        <div>
             <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item name" to="/user/">
          <i className="fa fa-user-circle"></i>
          {name}
        </Link>
        <Link className="main-nav-item" to="/user/signup/" onClick={userLogOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
        </div>
    )
}

HeaderUser.propTypes = {
  name: PropTypes.string
}

//utilisé les selectors pour accéder à une portion du state.
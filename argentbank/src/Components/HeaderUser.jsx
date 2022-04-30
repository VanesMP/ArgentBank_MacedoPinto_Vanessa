import { Link } from "react-router-dom";
import "../style/main.css";
import logo from '../img/argentBankLogo.png';

/**Render of navigation page
 * @function HeaderUser
 * @returns {JSX}
 */

export default function HeaderUser() {

    return (
        <div>
             <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/user/">
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link className="main-nav-item" to="/signup/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
        </div>
    )
}
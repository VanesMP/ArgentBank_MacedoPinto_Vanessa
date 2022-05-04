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
        <Link className="main-nav-item" to="/user/signup/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
        </div>
    )
}

//utilisé les selectors pour accéder à une portion du state.
// import { useSelector } from "react-redux";
 
// export function PlayerScore({ playerId, playerName }) {
//     // playerId est soit "player1" soit "player2"
//     // on l'utilise dans le selector pour accéder au score du joueur !
//     const score = useSelector((state) => state[playerId]);
 
//     return (
//         <div className="player-score">
//             <p>{playerName}</p>
//             <p>{score}</p>
//         </div>
//     );
// }
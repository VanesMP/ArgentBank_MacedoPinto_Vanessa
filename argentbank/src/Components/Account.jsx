import "../style/main.css"
import PropTypes from 'prop-types';

/**Render of transaction in the user's account
 * @function Account
 * @param {string} titleAccount
 * @param {string} amountAccount
 * @param {string} descriptionAccount
 * @returns {JSx}
 */

export default function Account( { titleAccount, amountAccount, descriptionAccount } ) {

    return(
        <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{titleAccount}</h3>
          <p className="account-amount">{amountAccount}</p>
          <p className="account-amount-description">{descriptionAccount}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
        </div>
    )
}

Account.propTypes = {
    titleAccount: PropTypes.string,
    amountAccount: PropTypes.string,
    descriptionAccount: PropTypes.string
}
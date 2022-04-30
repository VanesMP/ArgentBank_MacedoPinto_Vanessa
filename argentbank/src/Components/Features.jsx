import "../style/main.css"
import PropTypes from 'prop-types';


/** Render features of the entreprise for HomePage
 * @function Features
 * @param {any} icon (icon of the features) 
 * @param {number} title (name of the features) 
 * @param {string} text (paragraph of the features)  
 * @returns {JSX}
 */

export default function Features( { icon, title, text } ) {

    return(
        <div className="feature-item">
          <img
            src={icon}
            alt={`${icon} Icon`}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
    )
}

Features.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    text: PropTypes.string
}
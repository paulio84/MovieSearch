import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Notification = ({ removeNotification }) => (
  <div className="notification">
    <span>
      <FontAwesomeIcon icon={faCaretUp} />
    </span>
    <div className="notification__text">
      <p>The search term is required.</p>
      <span className="notification__button">
        <FontAwesomeIcon onClick={removeNotification} icon={faTimes} />
      </span>
    </div>
  </div>
);
Notification.propTypes = {
  removeNotification: PropTypes.func.isRequired
};

export default Notification;
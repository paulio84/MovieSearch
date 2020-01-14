import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ message, removeNotification }) => (
  <div className="row">
    <div className={`${styles.notification} col s8 offset-s2`}>
      <div className={`${styles.notification__text}`}>
        <p>{message}</p>
        <span className={`${styles.notification__button}`}>
          <FontAwesomeIcon onClick={removeNotification} icon={faTimes} />
        </span>
      </div>
    </div>
  </div>
);
Notification.propTypes = {
  removeNotification: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Notification;

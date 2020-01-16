import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");
  const [emptySearchTerm, setEmptySearchTerm] = useState(false);

  const onRemoveNotification = () => {
    setEmptySearchTerm(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (term === "") setEmptySearchTerm(true);
    else {
      onSearchSubmit(term);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={`${styles.searchBar} input-field`}>
        <label className="grey-text text-lighten-1" htmlFor="searchbar">Enter a movie title</label>
        <input
          id="searchbar"
          type="text"
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
            setEmptySearchTerm(false);
          }}
          autoComplete="off"
        />
        <span onClick={onFormSubmit} className="light-blue-text text-darken-4">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        {emptySearchTerm && (
          <Notification
            message="The search term is required."
            removeNotification={onRemoveNotification}
          />
        )}
      </div>
    </form>
  );
};
SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;

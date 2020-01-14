import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Notification from "../Notification";

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
      <div className="searchBar">
        <input
          type="text"
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
            setEmptySearchTerm(false);
          }}
          placeholder="Enter a movie title"
        />
        <span onClick={onFormSubmit}>
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

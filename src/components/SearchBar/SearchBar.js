import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Notification from "../Notification";

class SearchBar extends Component {
  state = { term: "" };

  onRemoveNotification = () => {
    this.setState({ emptySearchTerm: false });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.term === "") this.setState({ emptySearchTerm: true });
    else {
      const { onSearchSubmit } = this.props;
      onSearchSubmit(this.state.term);
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="searchBar">
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => {
              this.setState({
                term: event.target.value,
                emptySearchTerm: false
              });
            }}
            placeholder="Enter a movie title"
          />
          <span onClick={this.onFormSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          {this.state.emptySearchTerm && (
            <Notification
              message="The search term is required."
              removeNotification={this.onRemoveNotification}
            />
          )}
        </div>
      </form>
    );
  }
}
SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;

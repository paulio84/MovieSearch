import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    const { onSearchSubmit } = this.props;
    onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="searchBar">
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => {
              this.setState({ term: event.target.value });
            }}
            placeholder="Enter a movie title"
          />
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </form>
    );
  }
}
SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;

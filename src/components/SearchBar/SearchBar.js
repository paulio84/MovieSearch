import React, { Component } from "react";
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
      <form className="searchBar" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={(event) => {
            this.setState({ term: event.target.value });
          }}
          placeholder="Enter a movie title"
        />
      </form>
    );
  }
}
SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchBar;

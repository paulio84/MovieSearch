import React, { Component } from "react";

import SearchBar from "../SearchBar";

class SearchMovies extends Component {
  state = { movies: [] };

  onSearchSubmit = (term) => {
    // call tmdb api
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default SearchMovies;

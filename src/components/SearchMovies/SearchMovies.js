import React, { Component } from "react";
import axios from "axios";
import { config } from "../../temp_config";

import SearchBar from "../SearchBar";

class SearchMovies extends Component {
  state = { movies: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: config.API_KEY,
          language: "en-US",
          query: term,
          page: 1,
          include_adult: false
        }
      }
    );

    this.setState({ movies: response.data.results });
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

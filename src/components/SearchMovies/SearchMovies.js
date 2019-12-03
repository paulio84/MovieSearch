import React, { Component } from "react";
import axios from "axios";

import Loading from "../Loading";
import MovieList from "../MovieList";
import SearchBar from "../SearchBar";

class SearchMovies extends Component {
  state = { movies: [], isLoading: false };

  onSearchSubmit = async (term) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          query: term,
          page: 1,
          include_adult: false
        }
      }
    );
    this.setState({ movies: response.data.results, isLoading: false });
  };

  render() {
    return (
      <main>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <MovieList movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export default SearchMovies;

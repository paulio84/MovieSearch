import React, { Component } from "react";
import axios from "axios";

import Loading from "../Loading";
import MovieList from "../MovieList";
import SearchBar from "../SearchBar";

class SearchMovies extends Component {
  state = {
    movies: [
      {
        poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        id: 24428,
        title: "The Avengers",
        release_date: "2012-04-25"
      }
    ],
    isLoading: false
  };

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
    const {
      favouriteMovies,
      onAddToFavouriteMovies,
      onRemoveFromFavouriteMovies
    } = this.props;

    return (
      <main>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <MovieList
            movies={this.state.movies}
            favouriteMovies={favouriteMovies}
            onAddToFavouriteMovies={onAddToFavouriteMovies}
            onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
          />
        )}
      </main>
    );
  }
}

export default SearchMovies;

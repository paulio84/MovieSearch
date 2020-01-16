import React, { useState } from "react";
import axios from "axios";

import Loading from "../Loading/Loading";
import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";

const SearchMovies = ({
  favouriteMovies,
  onAddToFavouriteMovies,
  onRemoveFromFavouriteMovies
}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchSubmit = async (term) => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "en-US",
            query: term,
            page: 1,
            include_adults: false
          }
        }
      );
      setMovies(response.data.results);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {isLoading ? (
        <Loading />
      ) : (
          <MovieList
            movies={movies}
            favouriteMovies={favouriteMovies}
            onAddToFavouriteMovies={onAddToFavouriteMovies}
            onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
          />
        )}
    </main>
  );
};

export default SearchMovies;

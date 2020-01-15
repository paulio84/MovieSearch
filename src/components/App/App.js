import React, { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import SearchMovies from "../SearchMovies/SearchMovies";

const App = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
    setFavouriteMovies(favouriteMovies || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const onAddToFavouriteMovies = (movie) => {
    setFavouriteMovies([...favouriteMovies, movie]);
  };

  const onRemoveFromFavouriteMovies = (movie) => {
    setFavouriteMovies(
      favouriteMovies.filter((favouriteMovie) => favouriteMovie.id !== movie.id)
    );
  };

  return (
    <>
      <nav className="nav-wrapper light-blue darken-4">
        <div className="container">
          <a href="/" className="brand-logo">
            MovieSearch
          </a>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/favourites">My Favourites</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <SearchMovies
          favouriteMovies={favouriteMovies}
          onAddToFavouriteMovies={onAddToFavouriteMovies}
          onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;

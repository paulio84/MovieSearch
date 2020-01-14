import React, { useState, useEffect } from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

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
    <div className="container">
      <header>
        <nav className="navBar">
          <h1>MovieSearch</h1>
        </nav>
      </header>
      <SearchMovies
        favouriteMovies={favouriteMovies}
        onAddToFavouriteMovies={onAddToFavouriteMovies}
        onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
      />
      <Footer />
    </div>
  );
};

export default App;

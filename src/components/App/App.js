import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
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
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" render={() =>
            <SearchMovies
              favouriteMovies={favouriteMovies}
              onAddToFavouriteMovies={onAddToFavouriteMovies}
              onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
            />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

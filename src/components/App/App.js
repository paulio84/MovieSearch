import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Login from '../auth/Login';
import Navbar from '../Navbar/Navbar';
import Register from '../auth/Register';
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
      <Switch>
        <Route path="/" exact render={() =>
          <SearchMovies
            favouriteMovies={favouriteMovies}
            onAddToFavouriteMovies={onAddToFavouriteMovies}
            onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
          />}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React, { Component } from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

class App extends Component {
  state = { favouriteMovies: [] };

  onAddToFavouriteMovies = (movie) => {
    this.setState({ favouriteMovies: [...this.state.favouriteMovies, movie] });
  };

  onRemoveFromFavouriteMovies = (movie) => {
    this.setState({
      favouriteMovies: this.state.favouriteMovies.filter(
        (favouriteMovie) => favouriteMovie.id !== movie.id
      )
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <nav className="navBar">
            <h1>Movie Search</h1>
          </nav>
        </header>
        <SearchMovies
          favouriteMovies={this.state.favouriteMovies}
          onAddToFavouriteMovies={this.onAddToFavouriteMovies}
          onRemoveFromFavouriteMovies={this.onRemoveFromFavouriteMovies}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

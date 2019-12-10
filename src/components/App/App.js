import React, { Component } from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

class App extends Component {
  state = { favouriteMovies: [] };

  componentDidMount() {
    const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
    if (!favouriteMovies) {
      this.setState({ favouriteMovies: [] });
    } else {
      this.setState({ favouriteMovies });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "favouriteMovies",
      JSON.stringify(this.state.favouriteMovies)
    );
  }

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

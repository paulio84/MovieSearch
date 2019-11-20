import React from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

const App = () => (
  <div className="container">
    <header>
      <nav className="navBar">
        <h1>Movie Search</h1>
      </nav>
    </header>
    <SearchMovies />
    <Footer />
  </div>
);

export default App;

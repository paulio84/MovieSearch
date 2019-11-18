import React from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

const App = () => {
  return (
    <div className="ui container">
      <h1>Movie Search</h1>
      <SearchMovies />
      <Footer />
    </div>
  );
};

export default App;

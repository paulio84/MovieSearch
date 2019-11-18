import React from "react";

import Footer from "../Footer";
import SearchMovies from "../SearchMovies";

const App = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <h1>Movie Search</h1>
        </div>
      </nav>
      <SearchMovies />
      <Footer />
    </div>
  );
};

export default App;

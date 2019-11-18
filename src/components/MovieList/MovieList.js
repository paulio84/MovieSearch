import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  return movies.length > 0 ? (
    <section className="inner-section">
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </section>
  ) : (
    <section className="inner-section">No Movies Found ...</section>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;

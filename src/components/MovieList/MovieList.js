import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) =>
  movies.length > 0 ? (
    <section>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  ) : (
    <section>No Movies Found!</section>
  );

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;

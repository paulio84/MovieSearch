import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ movies }) =>
  movies.length > 0 ? (
    <section>
      <ul>
        {movies.map((movie) => (
          <li className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-card__content">
              <p>{movie.title}</p>
              {/* <p>{movie.overview}</p> */}
            </div>
          </li>
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

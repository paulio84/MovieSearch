import React from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  favouriteMovies,
  onAddToFavouriteMovies,
  onRemoveFromFavouriteMovies
}) =>
  movies.length > 0 ? (
    <section>
      <div className="row">
        <ul>
          {movies.map((movie, index) => {
            const isMovieLiked = favouriteMovies.some(
              (likedMovie) => likedMovie.id === movie.id
            );

            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                index={index}
                onAddToFavouriteMovies={onAddToFavouriteMovies}
                onRemoveFromFavouriteMovies={onRemoveFromFavouriteMovies}
                isLiked={isMovieLiked}
              />
            );
          })}
        </ul>
      </div>
    </section>
  ) : (
      <section className="center-align">No Movies Found!</section>
    );

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string
    })
  ).isRequired
};

export default MovieList;

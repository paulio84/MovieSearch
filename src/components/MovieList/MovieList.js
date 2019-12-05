import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const MovieList = ({ movies }) =>
  movies.length > 0 ? (
    <section>
      <ul>
        {movies.map((movie) => (
          <li className="movie-card" key={movie.id}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <img
                className="no-photo"
                src={`/assets/noPhotoFound.png`}
                alt={movie.title}
              />
            )}
            <div className="movie-card__content">
              <div className="movie-card__title">
                <p className="fw-bold">{movie.title}</p>
                <p className="fg-gray">
                  {dayjs(movie.release_date).format("MMMM D, YYYY")}
                </p>
              </div>
              <div className="movie-card__infoBar">
                <p>
                  <a
                    href={`https://www.themoviedb.org/movie/${movie.id}?language=en-US`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More info
                  </a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <section>No Movies Found!</section>
  );

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string
    })
  ).isRequired
};

export default MovieList;

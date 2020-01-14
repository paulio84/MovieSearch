import React from "react";
import dayjs from "dayjs";

import LikeButton from "../LikeButton";

const MovieCard = ({
  movie,
  index,
  onAddToFavouriteMovies,
  onRemoveFromFavouriteMovies,
  isLiked
}) => {
  return (
    <li
      className={`col s12 m5 card horizontal valign-wrapper ${
        index % 2 !== 0 ? "offset-m2" : ""
      }`}
    >
      <div className="card-image">
        {movie.poster_path ? (
          <img
            className="responsive-img"
            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img
            className="responsive-img"
            src={`/assets/noPhotoFound.png`}
            alt={movie.title}
          />
        )}
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">{movie.title}</span>
          {movie.release_date && (
            <p>{dayjs(movie.release_date).format("MMMM D, YYYY")}</p>
          )}
        </div>
        <div className="card-action right-align">
          <LikeButton
            isLiked={isLiked}
            handleLike={(isLiked) => {
              if (isLiked) {
                onAddToFavouriteMovies(movie);
              } else {
                onRemoveFromFavouriteMovies(movie);
              }
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default MovieCard;

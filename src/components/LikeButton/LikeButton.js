import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faHeartBroken as fasHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default class LikeButton extends Component {
  state = { isAnimating: false };

  componentDidUpdate(oldProps) {
    if (oldProps.isLiked !== this.props.isLiked) {
      this.setState({ isAnimating: true }, () => {
        setTimeout(() => {
          this.setState({ isAnimating: false });
        }, 500);
      });
    }
  }

  render() {
    const { likes, isLiked, handleLike } = this.props;
    const { isAnimating } = this.state;

    return (
      <div className="likeButton" onClick={() => handleLike(!isLiked)}>
        <span className={`${isLiked ? "red" : ""}`}>
          {isLiked ? (
            <FontAwesomeIcon icon={fasHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </span>
        <span
          className={`likeButton__animation${
            isAnimating && isLiked
              ? "--expand"
              : isAnimating && !isLiked
              ? "--break"
              : ""
          }`}
        >
          {isLiked ? (
            <FontAwesomeIcon icon={fasHeart} />
          ) : (
            <FontAwesomeIcon icon={fasHeartBroken} />
          )}
        </span>
        {likes !== undefined && (
          <span className="likeButton__text">{likes}</span>
        )}
      </div>
    );
  }
}
LikeButton.propTypes = {
  likes: PropTypes.number,
  isLiked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faHeartBroken as fasHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

class LikeButton extends Component {
  state = { isAnimating: false, isLiked: false };

  static getDerivedStateFromProps(nextProps) {
    return {
      isLiked: nextProps.isLiked
    };
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isLiked !== nextProps.isLiked) {
      return true;
    }
    return false;
  }

  handleClick = () => {
    this.setState({ isAnimating: true, isLiked: !this.state.isLiked }, () => {
      setTimeout(() => {
        this.setState({ isAnimating: false });
      }, 500);
    });
    this.props.handleLike(!this.state.isLiked);
  };

  render() {
    const { likes } = this.props;
    const { isAnimating, isLiked } = this.state;

    return (
      <div className="likeButton" onClick={this.handleClick}>
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

export default LikeButton;

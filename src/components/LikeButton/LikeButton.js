import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faHeartBroken as fasHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./LikeButton.module.css";

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
      <div className={`${styles.likeButton}`} onClick={this.handleClick}>
        <span>
          {isLiked ? (
            <FontAwesomeIcon className={`${styles.red}`} icon={fasHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </span>
        <span
          className={`${
            isAnimating && isLiked
              ? styles.likeButton__animation__expand
              : isAnimating && !isLiked
              ? styles.likeButton__animation__break
              : styles.likeButton__animation
          }`}
        >
          {isLiked ? (
            <FontAwesomeIcon icon={fasHeart} />
          ) : (
            <FontAwesomeIcon icon={fasHeartBroken} />
          )}
        </span>
        {likes !== undefined && (
          <span className={`${styles.likeButton__text}`}>{likes}</span>
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

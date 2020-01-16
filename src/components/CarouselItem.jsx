import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import { Link } from "react-router-dom";

import "../assets/styles/components/CarouselItem.scss";

import plusIcon from "../assets/static/plus-icon.png";
import playIcon from "../assets/static/play-icon.png";
import removeIcon from "../assets/static/remove.png";

const CarouselItem = props => {
  const { isMyList, id, cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {!isMyList && (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              onClick={handleSetFavorite}
              alt="Plus Icon"
            />
          )}
          {isMyList && (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              onClick={() => handleDeleteFavorite(id)}
              alt="Remove Icon"
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

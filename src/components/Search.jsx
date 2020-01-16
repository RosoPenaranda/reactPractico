import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, isSearching } from "../actions";

import classNames from "classnames";
import "../assets/styles/components/Search.scss";

const Search = props => {
  const { isHome } = props;
  const inputStyle = classNames("input", {
    isHome,
  });

  const handleChance = event => {
    if (event.target.value === "") {
      props.isSearching(false);
    } else {
      props.isSearching(true);
      props.getVideos(event.target.value);
    }
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        onChange={handleChance}
        placeholder="Buscar..."
      />
    </section>
  );
};

Search.prototype = {
  isHome: PropTypes.bool,
  getVideos: PropTypes.func,
};

const mapToDispatchToPros = {
  getVideos,
  isSearching,
};

export default connect(null, mapToDispatchToPros)(Search);

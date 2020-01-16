import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { isSearching } from "../actions";

import "../assets/styles/components/VideoNotFound.scss";

const VideoNotFound = props => {
  const handleClick = event => {
    props.isSearching(false);
  };

  return (
    <div className="notFount">
      <h2>No conseguimos lo que necesitas... 😭😭😭</h2>
      <button onClick={handleClick} className="button">
        Regresar
      </button>
    </div>
  );
};

VideoNotFound.prototype = {
  isSearching: Proptypes.func,
};

const mapDispatchToProps = {
  isSearching,
};

export default connect(null, mapDispatchToProps)(VideoNotFound);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import { Redirect } from "react-router-dom";
import "../assets/styles/components/Player.scss";
import NotFount from "./NotFount";
import Loader from "../components/Loader";

const Player = props => {
  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;
  console.log(hasPlaying);
  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) return <Loader />;

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    //<NotFount />
    <Redirect to="/404/" />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

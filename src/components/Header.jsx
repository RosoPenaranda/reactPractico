import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";

import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handelLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <a href="/">{user.email}</a>
              </li>
              <li>
                <a href="#" onClick={handelLogout}>
                  Cerrar Sesión
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Cuenta</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.prototype = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

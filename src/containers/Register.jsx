import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";

import "../assets/styles/components/Register.scss";

const Register = props => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

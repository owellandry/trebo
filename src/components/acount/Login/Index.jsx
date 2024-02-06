// src/components/acount/Login/AnimatedForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const AnimatedForm = () => {
  return (
    <div className="animated-form-container">
      <h2 className="form-title">Iniciar Sesión</h2>
      <form className="animated-form">
        <div className="form-group">
          <input type="email" className="form-input" required />
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
        </div>
        <div className="form-group">
          <input type="password" className="form-input" required />
          <label htmlFor="password" className="form-label">Contraseña</label>
        </div>
        <button type="submit" className="form-button">Iniciar Sesión</button>
      </form>
      <div className="social-login">
        <button className="social-button microsoft">Iniciar sesión con Microsoft</button>
        <button className="social-button google">Iniciar sesión con Google</button>
      </div>
      <Link to="/acount/register" className="form-link">¿No tienes una cuenta? Regístrate aquí</Link>
    </div>
  );
};

export default AnimatedForm;

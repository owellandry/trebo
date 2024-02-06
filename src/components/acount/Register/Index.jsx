// src/components/acount/Register/AnimatedRegister.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const AnimatedRegister = () => {
  return (
    <div className="animated-register-container">
      <h2 className="register-title">Crear una cuenta</h2>
      <form className="animated-register">
        <div className="register-group">
          <input type="text" className="register-input" required />
          <label htmlFor="name" className="register-label">Nombre</label>
        </div>
        <div className="register-group">
          <input type="email" className="register-input" required />
          <label htmlFor="email" className="register-label">Correo Electrónico</label>
        </div>
        <div className="register-group">
          <input type="password" className="register-input" required />
          <label htmlFor="password" className="register-label">Contraseña</label>
        </div>
        <div className="register-group">
          <input type="password" className="register-input" required />
          <label htmlFor="confirmPassword" className="register-label">Confirmar Contraseña</label>
        </div>
        <button type="submit" className="register-button">Crear Cuenta</button>
      </form>
      <Link to="/acount/login" className="register-link">¿Ya tienes una cuenta? Inicia sesión aquí</Link>
    </div>
  );
};

export default AnimatedRegister;

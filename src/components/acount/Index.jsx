// src/components/Acount/Index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
import accountImage from '../../assets/400.png';

const Acount = () => {
  return (
    <div className="acount-container">
      <img src={accountImage} alt="Account" className="account-image" />
      <h2>¿Qué deseas hacer?</h2>
      <div className="options">
        <Link to="/acount/login" className="option">Iniciar Sesión</Link>
        <Link to="/acount/register" className="option">Crear Cuenta</Link>
      </div>
      <Link to="/" className="back-home">Volver al Inicio</Link>
    </div>
  );
};

export default Acount;

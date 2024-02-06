// src/components/home/Index.js
import Nav from '../nav/Index';
import React from 'react';
import './Index.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido al Panel de Inicio</h1>
      <p>¡Aquí puedes ver y gestionar todas las funciones de tu cuenta!</p>
      <Nav></Nav>
    </div>
  );
};

export default Home;

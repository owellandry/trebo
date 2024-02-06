// src/components/Home/Index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para el redireccionamiento
import './Index.css';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate(); // Utilizamos useNavigate para el redireccionamiento

  const slides = [
    {
      title: '¡Bienvenido a Trebo!',
      description: 'La plataforma donde puedes encontrar profesionales para cualquier servicio que necesites, desde cambiar un foco hasta arreglar un grifo.',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Encuentra Profesionales Confiables',
      description: 'Trebo te conecta con profesionales calificados y confiables en tu área, para que puedas obtener el servicio que necesitas con total tranquilidad.',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Comienza a Resolver tus Problemas Hoy Mismo',
      description: 'Regístrate ahora en Trebo y comienza a resolver esos problemas del hogar o la oficina de manera rápida y eficiente.',
      image: 'https://via.placeholder.com/400',
    },
  ];

  const handleNextSlide = () => {
    if (slideIndex === slides.length - 1) {
      navigate('/acount');
    } else {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  return (
    <div className="home-container">
      <div className="slide">
        <img src={slides[slideIndex].image} alt={slides[slideIndex].title} />
        <h2>{slides[slideIndex].title}</h2>
        <p>{slides[slideIndex].description}</p>
        <div className="buttons">
          <button onClick={handlePrevSlide}>Atrás</button>
          <button onClick={handleNextSlide}>
            {slideIndex === slides.length - 1 ? 'Empezar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

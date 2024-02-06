// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/acount/Register/Index';
import Login from './components/acount/Login/Index';
import Acount from './components/acount/Index';
import Loader from './components/Loader/index';
import Setting from './dist/setting/Index';
import Home from './components/Page/Index';
import Index from './dist/home/Index';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Index />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/acount" element={<Acount />} />
        <Route path="/acount/register" element={<Register />} />
        <Route path="/acount/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

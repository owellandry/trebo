// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <AiOutlineHome className="nav-icon" />
      </Link>
      <Link to="/search" className="nav-link">
        <AiOutlineSearch className="nav-icon" />
      </Link>
      <Link to="/messages" className="nav-link">
        <AiOutlineMessage className="nav-icon" />
      </Link>
      <Link to="/options" className="nav-link">
        <AiOutlineMenu className="nav-icon" />
      </Link>
    </nav>
  );
};

export default Nav;

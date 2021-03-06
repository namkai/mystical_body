import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import './View.css';

const NavigationBar = () => (
  <div className="navbar-component">
    <div className="navbar area">
      <Link to="/" className="brand">
        <img className="brand-image" src={logo} alt="Brand" />
        <h3 className="title">One Infinite Heart</h3>
      </Link>
      <nav role="navigation" id="navigation" className="list">
        <Link to="/" className="item -link">
          Home
        </Link>
        <Link to="/articles" className="item -link">
          Articles
        </Link>
        <Link to="/teachings" className="item -link">
          Teachings
        </Link>
        <Link to="/appointments" className="item -link">
          Appointments
        </Link>
        <Link to="/about" className="item -link">
          About me
        </Link>
        <span className="item">
          <i className="fa fa-search" />
        </span>
      </nav>
      <button
        data-collapse
        data-target="#navigation"
        className="toggle"
        onClick={() => console.log('hit')}
      >
        <span className="icon" />
      </button>
    </div>
  </div>
);

export default NavigationBar;

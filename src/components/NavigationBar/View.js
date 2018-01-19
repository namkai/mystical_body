import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import NavigationMenu from 'components/NavigationMenu'
import './View.css'

const NavigationBar = (props) => {
  return (
    <div className="navbar-component">
      <div className="navbar area">
        <Link to="/" className="brand"><img className="brand-image" src={logo} alt="Brand"/></Link>
        <nav role="navigation" id="navigation" className="list">
          <Link to="/" className="item -link">Home</Link>
          <Link to="/articles" className="item -link">Articles</Link>
          <Link to="/teachings" className="item -link">Teachings</Link>
          <Link to="/appointments" className="item -link">Appointments</Link>
          <Link to="/about" className="item -link">About me</Link>
          <span className="item"><i className="fa fa-search"/></span>
        </nav>
        <button data-collapse data-target="#navigation" className="toggle">
          <span className="icon"/>
        </button>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {};
NavigationBar.defaultProps = {};

export default NavigationBar;

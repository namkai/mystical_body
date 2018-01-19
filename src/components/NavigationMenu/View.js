import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <Menu>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
  </Menu>
);

NavigationMenu.propTypes = {};
NavigationMenu.defaultProps = {};

export default NavigationMenu;

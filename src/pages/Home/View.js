import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'components/NavigationBar';
import './View.css';

const Home = props => (
  <main className="home">
    <NavigationBar />
    <div className="content">
      <p className="slogan">How to get there and always find your way back </p>
      <button>About Me</button>
    </div>
  </main>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

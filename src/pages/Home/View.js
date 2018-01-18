import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'components/NavigationBar'
import './View.css'

const Home = (props) => (
  <main className="home">
    <NavigationBar/>
    <p>test</p>
  </main>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

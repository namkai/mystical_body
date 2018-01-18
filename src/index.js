import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './pages/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from 'modules';
import history from './history';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

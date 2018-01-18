import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={withRouter(Home)}/>
      </Switch>
    );
  }
}

export default App;

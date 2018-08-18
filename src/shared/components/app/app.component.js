import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

// Views
import Dashboard from '../../../views/dashboard';
import NotFoundPage from '../../../views/not-found';

class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default hot(module)(App);
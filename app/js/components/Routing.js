'use strict';

import React from 'react';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from '../containers/AppContainer'
import Test from './Test'

class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={withRouter(App)} />
        <Route path="/test" component={withRouter(Test)} />
      </Router>
    )
  }
}

export default Routing;

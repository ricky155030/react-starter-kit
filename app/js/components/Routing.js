'use strict';

import React from 'react';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from '../containers/AppContainer'

class Routing extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={withRouter(App)} />
      </Router>
    )
  }
}

export default Routing;

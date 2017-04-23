import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'

export default (
  <Route path="/">
    <IndexRoute component={withRouter(App)} />
  </Route>
)

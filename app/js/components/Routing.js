import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'
import Test from './Test'

export default (
  <Route path="/">
    <IndexRoute component={withRouter(App)} />
    <Route path="/test" component={withRouter(Test)} />
  </Route>
)

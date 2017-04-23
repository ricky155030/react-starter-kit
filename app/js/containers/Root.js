import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import Routing from '../components/Routing';

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history} routes={Routing}/>
      </Provider>
    )
  }
}

export default Root

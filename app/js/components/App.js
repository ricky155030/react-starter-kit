'use strict';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.props.router.push('/test')}>React-Starter-Kit</h1>
        <h3>{this.props.example}</h3>
      </div>
    )
  }
}

export default App

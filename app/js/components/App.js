import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.props.router.push('/test')}>React-Starter-Kit</h1>
      </div>
    )
  }
}

export default App

import React from 'react'
import { connect } from 'react-redux'

class AppContainer extends React.Component {
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

const mapStateToProps = state => {
  return {
    example: state.example.text
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

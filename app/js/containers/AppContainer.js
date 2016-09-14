'use strict';

import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = function(state) {
  return {
    example: state.example.text
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer

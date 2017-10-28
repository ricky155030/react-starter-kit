import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Example = () => (
  <div>
    <h2>Example</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Example</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Example}/>
    </div>
  </Router>
)

export default App

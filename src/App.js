import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import 'babel-polyfill';
import './App';
import './style.css'
import SearchParams from './searchParams'
import Details from './Details';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <header>
            <Link to="/">Adopt me! </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    )
  }
}
export default App;
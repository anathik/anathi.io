import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../Home/page.jsx'
import Blog from '../Blog/blog.js'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="" component={Home} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  )
}

export default App

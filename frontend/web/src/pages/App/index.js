import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Home";
import Blog from "../Blog";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Route exact path="/welcome" component={Home} />
                <Route path="/contact" component={Blog} />
            </div>
        </Router>
    );
};

export default App;

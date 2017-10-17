import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Quickstack React!</h1>
        </header>
        <p className="App-intro">
          This is an empty shell for new React Web Projects. To get started,
          edit <code>public/index.html</code> to configure things like the page
          title etc.
        </p>
      </div>
    );
  }
}

export default App;

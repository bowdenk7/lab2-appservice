import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
class App extends Component {
  /* global state */
  state = {
    showingCreds: false
  };

  render() {
    return (
      <div className="App">

        <Hero/>
      </div>  //App
    );
  }
}

export default App;

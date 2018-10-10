import React, { Component } from 'react';
import { nodeLogo } from './logos';
import './Hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <img src={nodeLogo} alt="Azure App Service" />
        <h1>Welcome to Azure!</h1>
        <p>This is a simple Node application using the popular <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> framework!</p>
      </div>
    );
  }
}


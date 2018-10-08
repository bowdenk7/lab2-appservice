import React, { Component } from 'react';
import { nodeLogo } from './logos';
import './Hero.css';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: timeTo(this.props.endDate),
      intervalId: null
    };
  }
  render() {
    return (
      <div id="hero">
        <p className="countdown">
          This <strong>free</strong> web application will expire in <strong>{this.state.remainingTime}</strong> minutes...
        </p>
        <img src={nodeLogo} alt="Azure App Service" />
        <h1>Welcome to Azure!</h1>
        <p>This is a simple Node application using the popular <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> framework, hosted on Azure App Service at <a href={this.props.host}>{this.props.host}</a></p>
        <p>To get started, follow the instructions below or jump straight to the <a href="https://code.visualstudio.com/tutorials/app-service-extension/getting-started" targe="_blank" rel="noopener noreferrer">walkthrough</a>.</p>
      </div>
    );
  }

  componentDidMount() {
    const intervalId = setInterval(this.interval.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  interval() {
    this.setState({
      remainingTime: timeTo(this.props.endDate)
    });
    this.render();
  }
}

function timeTo(ts) {
  if (!ts) {
    return '...';
  }
  const t = Date.parse(ts + ' UTC') - Date.parse(new Date());
  const minutes = Math.floor(t / 1000 / 60);
  // const seconds = (t - minutes * 60 * 1000) / 1000;

  return `${minutes}`; // min ${seconds} sec`;
}

import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
class App extends Component {
  state = {
    showingCreds: false
  };
  async componentDidMount() {
    // const res = await fetch('/api');


    const token = window.location.href.split("/")[window.location.href.split("/").length-1];


    const res = await fetch('/api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({token: token})
    });


    const body = await res.json();
    this.setState(body);
  }

  renderCreds() { }
  render() {
    let creds;
    if (this.state.showingCreds) {
      creds = (
        <p id="creds">
          {navigator.platform === 'Win32'
            ? this.state.gitUrl
            : this.state.bashGitUrl}
        </p>
      );
    }
    return (
      <div className="App">

        <Hero endDate={this.state.expiry} host={this.state.host} />

        <div className="content-wrapper">
          <div className="content">
            <div className="column">
              <div className="numberCircle">
                1
              </div>

              <div>
                <p className="title">Get the code</p>
                <p> Clone the sources using Visual Studio Code or use git from the command line.</p>

                <div>
                  <p className="link">
                    <a href={this.cloneHref()} id="clone">Clone with VS Code</a>
                  </p>
                </div>

                <div>
                  <p className="link">
                    <a href={this.cloneInsidersHref()} id="clone-insiders">Clone with VS Code Insiders</a>
                  </p>
                </div>

                <div>
                  <p className="link">
                    <a href="#" onClick={this.toggleCreds.bind(this)} id="show-creds">Generate your Git credentials</a>
                  </p>
                  {creds}
                </div>
              </div>
            </div>


            <div className="column">
              <div className="numberCircle">
                2
              </div>
              <div>
                <p className="title">Make some changes</p>
                <p> Edit <span className="code">Hero.js</span>, run <span className="code">npm build && npm run start-dev</span> to run the application locally.</p>
                <div>
                  <p className="link">
                    <a href="https://code.visualstudio.com/docs/editor/codebasics" target="_blank" rel="noopener noreferrer">Editing in VS Code</a>
                  </p>
                </div>
                <div>
                  <p className="link">
                    <a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging" target="_blank" rel="noopener noreferrer">Node debugging in
                  VS Code</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="numberCircle">
                3
              </div>
              <div>
                <p className="title">Deploy your changes</p>
                <p> Commit your changes, <span className="code">git push</span> to redploy, then refresh this page.</p>
                <div>
                  <p className="link">
                    <a href="https://code.visualstudio.com/docs/editor/versioncontrol" target="_blank" rel="noopener noreferrer">Version
                  control in VS Code</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="content2">
            <div className="column centered empty"></div>
            <div className="column centered">
              <div className="centered">
                <a href="https://aks.ms/tas-node-walkthrough" target="_blank" rel="noopener noreferrer">
                  <button className="continue-btn" type="button">
                    CONTINUE WALKTHROUGH >
              </button>
                </a>
              </div>
            </div>
            <div className="column centered empty"></div>
          </div>
        </div>

      </div>  //App
    );
  }

  cloneHref() {
    return `vscode://vscode.git/clone?url=${this.state.gitUrl}`;
  }

  cloneInsidersHref() {
    return `vscode-insiders://vscode.git/clone?url=${this.state.gitUrl}`;
  }

  toggleCreds() {
    this.setState({ showingCreds: !this.state.showingCreds });
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { info: '' }

  componentDidMount() {
    fetch('/elo')
      .then(res => res.text())
      .then(data => this.setState({ info: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>{this.state.info}</h4>
        </header>
      </div>
    );
  }
}

export default App;

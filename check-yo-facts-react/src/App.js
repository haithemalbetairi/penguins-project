import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      started: false,
    };
  }

  renderGame = () => {
    return (
      <div>
        <Header logo='center' />
        <Main view='gameboard' />
      </div>
    )
  }
  render() {
    if(this.started) {
      return this.renderGame()
    } else {
      return (
        <div>
          <Header logo='left'/>
          <Main view='home'/>
          <button onClick={this.setState({started:true})}>Start</button>
        </div>
      )
    }
  }
}

export default App;

import React from 'react';
import './App.css';
import logo from './assets/logo.png'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Hello from Bridy'
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="logo"/>
      </div>
    );
  }
}

export default App;
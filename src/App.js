import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked",$event);
    window.open(this.url, "_blank");
  }

  //Bind the input Form Element using setState to userName onChange event
  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({ userName: event.target.value })
  }
  
  //change in userName reflected in header tag
  render() {
    return (
      <>
      <div>
        <h1>I'm {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick} alt="logo"/>
      </div>
      <div className='text-box'>
        <input onChange={this.onNameChange} />
      </div>
      </>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    repeater:''
  }

  handler=(event)=>{
    this.setState({repeater:event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handler}/>
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;

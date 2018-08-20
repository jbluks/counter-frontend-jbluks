import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    axios.get('/counter')
      .then(response => {
        this.setState({
          counter: response.data.counter
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        Counter: {this.state.counter}
      </div>
    );
  }
}

export default App;

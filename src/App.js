import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hello, welcome to the store</h1>

        <Button color="primary">Button from boostrap</Button>

        <Button color="info">One more button</Button>
      </div>
    );
  }
}

export default App;

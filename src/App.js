import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

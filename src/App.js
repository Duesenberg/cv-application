/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="screen">
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;

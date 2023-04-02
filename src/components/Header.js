/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a 
          href="https://github.com/Duesenberg" className="github-link" 
          target="_blank" rel='noreferrer' />
        <h1 className="title">CV Application Generator</h1>
      </div>
    );
  }
}

export default Header;

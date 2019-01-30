import React, { Component } from 'react';
import Logo from '../../images/header/zooapocolyps_logo.png';
import { Link } from 'react-router-dom';
import './index.css';

export class Loading extends Component {
  render() {
    return (
    <div>
       <header className="App-header-landing">
          <img src={Logo} className="App-logo-landing" alt="logo" />
          <p class="Header-text">
           A playground for Word challenges.
          </p>
          <Link to="/login"><button>Click and Play</button></Link>
        </header>
     </div>
    )
  }
}

export default Loading;

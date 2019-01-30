import React, { Component } from 'react';
import Logo from '../../images/header/zooapocolyps_logo.png';
//import './index.css';

export class Loading extends Component {
  render() {
    return (
    <div>
       <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <p class="Header-text">
           A playground for Word challenges.
          </p>
        </header>
     </div>
    )
  }
}

export default Loading;

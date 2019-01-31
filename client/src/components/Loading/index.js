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
          <div>
            <Link to="/login"><button style={buttonStyle}>Account?</button></Link>
            <Link to="/progress"><button style={clickPlayStyle}>Click and Play</button></Link>
          </div>
        </header>
     </div>
    )
  }
}

export default Loading;

const buttonStyle = {
  background: "#E96C64",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
  borderColor: "#E96C64",
  marginTop: "10px",
  marginBottom: "10px"
};
const clickPlayStyle = {
  background: "#F6E769",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  borderColor: "#F6E769",
  marginTop: "10px",
  marginBottom: "10px"
};
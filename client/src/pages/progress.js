import React, { Component } from "react";
import Header from "../components/Header";
import PlayerProgress from "../components/PlayerProgress";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

class Progress extends Component {
  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          {/* Header */}
          <div className="App-header">
            <Header />
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/login"><button style={buttonStyle}>Account?</button></Link>
          </div>
          {/* Contents go below */}
          <div className="progress">
            <PlayerProgress />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Progress;

const buttonStyle = {
  background: "#E96C64",
  borderRadius: "5px",
  borderColor: "#E96C64",
  margin: "auto",
  textAlign: "center"
};
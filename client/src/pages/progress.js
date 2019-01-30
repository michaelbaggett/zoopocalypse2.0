import React, { Component } from "react";
import Header from "../components/Header";
import PlayerProgress from "../components/PlayerProgress";
import Footer from "../components/Footer";

class Progress extends Component {
  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          {/* Header */}
          <div className="App-header">
            <Header />
          </div>

          <div style={center}>
            <button style={logoutButtonStyle} onClick={this.userSignOut}>
              LOGOUT
            </button>
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

const logoutButtonStyle = {
  width: "100px",
  hight: "30px",
  marginTop: "20px",
  backgroundColor: "orange",
  color: "white"
};

const center = {
  textAlign: "center",
  marginBottom: "15px"
};

export default Progress;

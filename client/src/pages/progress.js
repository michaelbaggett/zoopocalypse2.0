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

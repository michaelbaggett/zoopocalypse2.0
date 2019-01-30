import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";

class Status extends Component {
  getStatus = () => {
    API.completedStatus().then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          {/* Header */}
          <div className="App-header">
            <Header />
          </div>

          <div>
            <button onClick={this.getStatus}>CLICK ME</button>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Status;

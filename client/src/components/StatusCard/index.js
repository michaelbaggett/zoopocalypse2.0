import React, { Component } from "react";
import "./index.css";
import { Route } from "react-router-dom";

class StatusCard extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    completed: this.props.completed
  };

  routerImg = () => (
    <Route
      render={({ history }) => (
        <img
          style={imageStyle}
          className="image"
          alt={this.props.name}
          src={this.props.image}
          onClick={() => {
            history.push("/play/" + this.props.name);
          }}
        />
      )}
    />
  );

  render() {
    return (
      <div>
        {this.state.completed ? (
          <div className="card">
            <div className="animalstatus">
              <div className="img-container" style={cardStyle}>
                <img
                  className="image"
                  style={imageStyle}
                  alt={this.props.name}
                  src={this.props.image}
                />
              </div>
              <div>Status: Freed</div>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="animalstatus">
              <div style={playerCardStyle}>
                <div className="img-container" style={testImgStyle}>
                  {this.routerImg()}
                </div>
              </div>
              <div>Status: Caged</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const imageStyle = {
  width: "175px",
  background: "#50D737"
};
const cardStyle = {
  //background: "white",
  width: "175px",
  border: "solid 5px purple",
  borderRadius: "10px",
  textAlign: "center",
  marginLeft: "20px"
};
const playerCardStyle = {
  position: "relative",
  textAlign: "center",
  border: "6px solid #7B5D94",
  margin: "5px",
  backgroundColor: "#156369",
  borderRadius: "25px"
};
const testImgStyle = {
  //height: "175px",
  position: "relative",
  background: "#50D737",
  //border: "4px solid #444",
  borderRadius: "15px",
  width: "200px"
};

export default StatusCard;

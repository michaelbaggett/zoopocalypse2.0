import React, { Component } from "react";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import API from "../utils/API";

// const imageStyle = {
//   width: "175px",
//   background: "#50D737"
// };
// const cardStyle = {
//   background: "white",
//   width: "175px",
//   border: "solid 5px purple",
//   borderRadius: "10px",
//   textAlign: "center",
//   marginLeft: "20px"
// };
class Test extends Component {
  handleOnClick = (e) => {
    e.preventDefault();
    API.getAnimals().then(res => {console.log(res.data)})
    console.log("button works");
    }
  render() {
    return (
      <div>
        <Header />
        <AnimalCard />shouldComponentUpdate = (nextProps, nextState) => {
        <button type="Submit" onClick={this.handleOnClick} >api route text</button>
        }
        
      </div>
    );
  }
}

export default Test;

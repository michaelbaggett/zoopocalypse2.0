import React, { Component } from "react";
import Loading from '../components/Loading';

// import Header from "../components/Header";
// import AnimalCard from "../components/AnimalCard";
// import API from "../utils/API";


class Test extends Component {
  // handleOnClick = (e) => {
  //   e.preventDefault();
  //   API.getAnimals().then(res => {console.log(res.data)})
  //   console.log("button works");
  //   }
  render() {
    return (
      <div> 
        <Loading />
      </div>
    );
  }
}

export default Test;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import AnimalCard from "./components/animals";

//import { Link } from "react-router-dom";
import Loading from "./components/Loading";
import LogIn from "./pages/login";
import Test from "./pages/test";
import "./App.css";
import Play from "./pages/play";
import Progress from "./pages/progress";
//import Status from "./pages/status";
//import Loading from '',

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/" component={Loading} />
            {/* Login Page/ Landing Page Route */}
            <Route exact path="/login" component={LogIn} /> 
            
            <Route exact path="/progress" component={Progress} />
            {/* Game Play Page Route */}
            <Route path="/play" component={Play} />
            {/* Testing Route */}
            <Route exact path="/test" component={Test} />
            {/* Route to view Progress */}

           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

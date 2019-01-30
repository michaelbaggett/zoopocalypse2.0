import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import AnimalCard from "./components/animals";

//import { Link } from "react-router-dom";
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
            {/* Login Page/ Landing Page Route */}
            <Route exact path="/" component={LogIn} />
            {/* Game Play Page Route */}
            <Route path="/play" component={Play} />
            {/* Testing Route */}
            <Route exact path="/test" component={Test} />
            {/* Route to view Progress */}

            <Route exact path="/progress" component={Progress} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

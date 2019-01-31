import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Redirect } from "react-router";

//import Login from "../components/Login";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    isAuth: false,
    login: false,
    age: "",
    phone: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    //console.log(this.state);
    const { username, password } = this.state;
    API.userLogin({ username, password }).then(res => {
      if (res.data.isAuth) {
        this.setState({
          isAuth: true
        });
      }
    });
  };

  handleSignup = event => {
    event.preventDefault();
    //console.log(this.state);
    const { username, password, phone, age } = this.state;
    API.userSignup({ username, password, phone, age }).then(res => {
      console.log(res.data);
      if (res.data.isAuth) {
        this.setState({
          isAuth: true
        });
        console.log(username + ": is authorized");
      }
    });
  };

  toggleForms = event => {
    event.preventDefault();
    this.setState({
      login: !this.state.login
    });
  };

  render() {
    return (
      <div className="Site">
        {this.state.isAuth ? (
          <Redirect to="/progress" />
        ) : (
          //login card
          <div className="Site-content">
            {/* Header */}
            <div className="App-header">
              <Header />
            </div>
            {this.state.login ? (
              <div className="card" style={loginCardStyle}>
                <h3 style={h3ButtonStyle}>
                  Login or
                  <a onClick={this.toggleForms} style={{ color: "#26C6C4" }}>
                    {" "}
                    Register
                  </a>
                </h3>

                <br />
                <form>
                  {/* Login Form  */}
                  <input
                    style={inputStyle}
                    name="username"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    style={inputStyle}
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button
                    type="submit"
                    onClick={this.handleLogin}
                    style={buttonStyle}
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            ) : (
              // New Account
              <div className="card" style={loginCardStyle}>
                <h3 style={h3ButtonStyle}>
                  Create Account or
                  <a onClick={this.toggleForms} style={{ color: "#26C6C4" }}>
                    {" "}
                    Login
                  </a>
                </h3>
                <br />
                <form>
                  <input
                    style={inputStyle}
                    name="username"
                    value={this.state.username}
                    placeholder="New Username"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    style={inputStyle}
                    name="password"
                    type="password"
                    value={this.state.password}
                    placeholder="New Password"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    style={inputStyle}
                    name="phone"
                    value={this.state.phone}
                    placeholder="Your phone number?"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    style={inputStyle}
                    name="age"
                    value={this.state.age}
                    placeholder="Your age?"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button
                    type="submit"
                    onClick={this.handleSignup}
                    style={buttonStyle}
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            )}
            {/* Footer */}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default LogIn;

const loginCardStyle = {
  textAlign: "center",
  border: "4px solid #7B5D94",
  margin: "auto",
  marginTop: "25px",
  width: "300px",
  backgroundColor: "#156369",
  borderRadius: "25px"
};

const buttonStyle = {
  background: "#E96C64",
  borderRadius: "5px",
  borderColor: "#E96C64",
  marginTop: "10px",
  marginBottom: "10px"
};

const h3ButtonStyle = {
  textAlign: "center",
  borderBottom: "4px solid #7B5D94",
  margin: "auto",
  marginTop: "20px",
  paddingBottom: "15px",
  width: "250px",
  color: "#F6E769"
};

const inputStyle = {
  margin: "3px",
  borderRadius: "5px",
  height: "30px",
  width: "220px"
};

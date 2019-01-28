import React, { Component } from "react";
import bar from "../../images/cageBars.png";

export class AnimalCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.animal[0]);
    this.state = {
      barsVisible: props.animal.split("").map(e => true),
      name: props.animal.split("").map(e => "_ "),
      letters: [],
      incorrectLetters: [],
      targetPosition: 0,
      message: "",
      hint: "",
      isComplete: false
    };
  }

  handleHintButton = event => {
    event.preventDefault();
    // Checks if the word is complete
    if (this.state.isComplete) {
      // if yes, then sets the state to the below
      this.setState({
        hint: ""
      });
    } else {
      // if no, then sets the state to the below
      this.setState({
        hint:
          "Hint: " +
          '"' +
          this.props.animal[this.state.targetPosition].toUpperCase() +
          '"'
      });
    }
  };
  // Resets the game so that it can be replayed
  handleResetButton = event => {
    event.preventDefault();
    this.setState({
      barsVisible: this.props.animal.split("").map(e => true),
      name: this.props.animal.split("").map(e => "_ "),
      letters: [],
      guessLog: [],
      targetPosition: 0,
      message: "",
      hint: "",
      isComplete: false
    });
  };
  // Captures the key pressed by the user
  onKeyUp = event => {
    // This makes sure that the letter entered is a letter and not something else. It takes in the key entered and only returns when a letter is passed in.
    const isLetter = prop => {
      const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ];
      let letter;
      alphabet.forEach(e => {
        if (prop === e) {
          letter = prop;
        }
      });
      return letter;
    };
    const word = this.props.animal; // word to guess
    const name = [...this.state.name];
    const letters = [...this.state.letters]; // total letters guessed
    const guessLog = [this.state.guessLog]; // Incorrect guesses
    const barsVisible = [...this.state.barsVisible]; // For toggling the bar visablitiy
    const key = isLetter(event.key.toLowerCase()); //  Event that catches the key pressed by the user
    const hint = "";
    // Checks if the key pressed matches the appropriate letter in the word
    if (key === word[this.state.targetPosition]) {
      // If it matches
      // Toggles the bar's visability to invisible
      barsVisible[this.state.targetPosition] = false;
      // Changes the "_" to the key pressed by the user
      name[this.state.targetPosition] = key;
      //  Checks to see if the word has been finished and sets the state for the message and is completed
      if (this.state.targetPosition === word.length - 1) {
        this.setState({
          message: "The " + this.props.animal + " is free, hurray!!!",
          isComplete: true,
          hint: ""
        });
      }
      //   Adds to the posistion accumulator so that the index position will change each time this function is run
      this.setState({
        targetPosition: this.state.targetPosition + 1,
        barsVisible,
        name,
        hint,
        guessLog: []
      });
    } else {
      // Attempting to eliminate repeating key presses below, unsuccessfull so far
      // const acc = 0;
      // guessLog.forEach(el => {
      //   if (el === key) {
      //     acc++;
      //   }
      // })
      // console.log(acc);
      guessLog.push(key); // adds incorrect letters to the letters arr and updates the h tag
      letters.push(key); // Addes all letters typed to an array of letters
      this.setState({ letters, barsVisible, guessLog });
    }
  };

  componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp);
    const barsVisible = this.state.barsVisible;
    this.setState({ barsVisible });
  }

  render() {
    return (
      <div className="card" style={playerCardStyle}>
        <div>
          <img
            style={spellMeLogoStyle}
            src={"../images/playLogos/spellmeBlue.png"}
          />
        </div>
        <div style={imgStyle}>
          <img
            src={"../images/" + this.props.animal + ".png"}
            alt="Animal"
            style={{ height: "100%" }}
          />
          {this.state.barsVisible.map((visible, index) => {
            return (
              <div
                style={{
                  width: 10,
                  height: 200,
                  position: "absolute",
                  top: 0,
                  opacity: visible ? 1 : 0,
                  left:
                    ((index + 0.5) * 280) /
                    (this.state.barsVisible.length || 0.00001)
                }}
              >
                <img src={bar} alt="Cage Bars" style={barStyle} />
              </div>
            );
          })}
          <h1 style={correctLetterStyles}>{this.state.name}</h1>
          <p style={guessesStyle}>Guesses [{this.state.guessLog}]</p>

          <button style={buttonStyle} onClick={this.handleHintButton}>
            Get A Hint
          </button>
          <button style={buttonStyle} onClick={this.handleResetButton}>
            Reset
          </button>

          <div>
            <h3 style={messStyle}>{this.state.hint}</h3>
            <h3 style={messStyle}>{this.state.message}</h3>
          </div>
        </div>
      </div>
    );
  }
}
// Page styles below
const spellMeLogoStyle = {
  height: "40px",
  marginTop: "10px",
  borderBottom: "3px solid #7B5D94",
  paddingLeft: "70px",
  paddingRight: "70px"
};
const imgStyle = {
  height: "175px",
  position: "relative",
  background: "#50D737",
  border: "4px solid #444",
  borderRadius: "15px",
  width: "300px",
  margin: "10px auto 0px"
};
const barStyle = {
  width: "9px",
  height: "175px",
  position: "absolute",
  zIndex: "10"
};
const playerCardStyle = {
  position: "relative",
  textAlign: "center",
  border: "6px solid #7B5D94",
  margin: "auto",
  marginTop: "25px",
  width: "400px",
  backgroundColor: "#156369",
  borderRadius: "25px",
  height: "460px"
};
const correctLetterStyles = {
  color: "#F6E769",
  fontFamily: "American Typewriter",
  fontSize: "50px",
  paddingBottom: "10px",
  borderBottom: "3px solid #7B5D94",
  marginTop: "10px",
  marginBottom: "0px"
};
const buttonStyle = {
  background: "#7B5D94",
  fontSize: "15px",
  borderRadius: "10px",
  margin: "10px",
  marginTop: "0px",
  color: "white"
};
const messStyle = {
  color: "#50D737",
  fontFamily: "Arial"
};
const guessesStyle = {
  color: "white",
  margin: "10px",
  opacity: "0.5"
};

export default AnimalCard;

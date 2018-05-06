import React, { Component } from 'react';
import './App.css';
import Button from "./Button"
import EmphasizeButton from "./EmphasizeButton"


const poemLines = [
  `white-jacketed worker who clears the table`,
  `you who blossomed into the air like steam from a whale's blowhole`,
  `you who were compressed into a dense calyx`,
  `out of the second-stage rocket's cardboard cylinder`,
  `you who began life as a seed in the earth`,
  `before the eyes of a girl child`,
  `nib which dips into a forty-year river`,
  `mute calligrapher—we write you here`
]

//gets random line from array
function getRandomLine(currentLine) {
  let newRandomLine = poemLines[Math.floor(poemLines.length * Math.random())]
  if (newRandomLine !== currentLine) {
    return newRandomLine
    //if new random line is equal to the current random line, execute the function again
  } else {
    return getRandomLine(currentLine)
  }
}

class App extends Component {

constructor(props) {
  super(props)
    this.state = {
      line: ""
    }
}

onClick() {

let randomLine = getRandomLine(this.state.line)
//re-enable uppercasing button if it's in the DOM
  if (this.state.line !== "") {
    document.getElementById("emphButton").disabled = false;
  }
  this.setState({
    line: randomLine,
  })
}

emphText() {
  this.setState({
    line: this.state.line.toUpperCase(),
  })
  //disable uppercasing button after it has been clicked
  document.getElementById("emphButton").disabled = true;
}

  render() {

    let emphasizeButton
    let buttonText
    if (this.state.line === "") {
      buttonText = "Click Me!"
    } else {
      buttonText = "Click me again!"
      emphasizeButton = <EmphasizeButton id="emphButton" emphText={() => this.emphText()} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tampon Thoughts</h1>
          <p className="refactor"> <i>Now refactored in React!</i></p>
          <p className="explain"> Click the button to see a line from "Ode to the Tampon" by Sharon Olds</p>
        </header>
        <Button
          onClick={() => this.onClick()}
          text={buttonText}
        />
        <div className={"line-contain"}>
          <div className={"poem-text"}>{this.state.line}</div>
        </div>
        <div className={"button-contain"}>
          {emphasizeButton}
        </div>
        <div className={"icon-box"}>
          <img
            src={require("./tampon.png")}
            alt="tampon icon"
            className="tampon-icon"
           />
           <img
             src={require("./tampon.png")}
             alt="tampon icon"
             className="tampon-icon"
            />
            <img
              src={require("./tampon.png")}
              alt="tampon icon"
              className="tampon-icon"
             />
        </div>
      </div>
    );
  }
}

export default App;

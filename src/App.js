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
  `nib which dips into a forty-year river`,
  `mute calligrapher—we write you here`,
  `prepared for the feast which goes uneaten`,
  `dry dock for the boat not taken`,
  `seeker of the red light of stars`,
  `bloodhound`,
  `secret-keeper`
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

scrollToForm(id) {
  const scrollDiv = document.getElementById(id)
  scrollDiv.scrollIntoView({behavior: "smooth"})
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
        <div className={"nav-bar"}>
          <button className={"nav-button"} onClick={() => this.scrollToForm("about")}>About</button>
            <button className={"nav-button-credits"} onClick={() => this.scrollToForm("credits")}>Credits</button>
        </div>
        <header className="App-header">
          <h1 className="App-title">TAMPON THOUGHTS</h1>
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
      <div className={"about"} id={"about"}>
        <h2>About</h2>
        <p>lol I made this</p>

      </div>
      <div id={"credits"} className={"credits"}>
        <h2>Credits</h2>
        <p>hi sharon olds etc.</p>
      </div>
      </div>
    );
  }
}

export default App;

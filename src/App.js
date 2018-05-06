import React, { Component } from 'react';
import './App.css';
import Button from "./Button"

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

class App extends Component {

constructor(props) {
  super(props)
    this.state = {
      line: ""
    }
}

onClick() {
  let randomLine = poemLines[Math.floor(poemLines.length * Math.random())]
  this.setState({
    line: randomLine
  })
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tampon Thoughts</h1>
          <p className="refactor"> <i>Now refactored in React!</i></p>
          <p className="explain"> Click the button to see a line from "Ode to the Tampon" by Sharon Olds</p>
        </header>
        <Button
          onClick={() => this.onClick()}
        />
        <div className={"poem-text"}>{this.state.line}</div>
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

import React, { Component } from "react";
import "./App.css";
import Numberpad from "./components/Numberpad";
import Results from "./components/Results";

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate()
    }

    else if(button === "CE"){
      this.backspace()
    }

    else if(button === "C"){
      this.reset()
    }

    else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })

    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  backspace = () => {
    this.setState({
      result: (this.state.result.slice(0, -1)
      )
    })
  };

reset = () => {
  this.setState({
    result: ""
  })
}

  render(){
    return(
      <div>
        <div className="calculatorBody">
          <Results result={this.state.result} />
          <Numberpad onClick = {this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;



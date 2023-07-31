import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "ASFAND",
    };
  }
  render() {
    return (
      <>
        <p>HI {this.state.name}</p>
        <button className="btn" onClick={() => 
          this.setState(() => { return {name : 'SALAAR'}},
          () => {
              console.log(this.state)
          })}>
          CHANGE NAME
        </button>
      </>
    );
  }
}

export default App;

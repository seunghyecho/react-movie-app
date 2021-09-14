import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  remove = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import StatefulTimer from "./StatefulTimer.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="chrono">Chronometer by React JS</h3>

        <StatefulTimer />
      </div>
    );
  }
}

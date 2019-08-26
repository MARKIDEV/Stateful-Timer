import React, { Component } from "react";

export default class StatefulTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initTime: 0,
      hours: 0,
      mins: 0,
      seconds: 0,
      isStart: true
    };
  }

  handleTimeStart = () => {
    if (this.state.isStart) {
      this.setState({ isStart: false });

      this.state.initTime = setInterval(() => {
        this.setState({
          initTime: this.state.initTime + 1000,
          hours: Math.floor(this.state.initTime / (60 * 60 * 1000)),
          mins: Math.floor(
            (this.state.initTime - this.state.hours * 60 * 60 * 1000) /
              (60 * 1000)
          ),
          seconds: Math.floor(
            (this.state.initTime -
              this.state.hours * 60 * 60 * 1000 -
              this.state.mins * 60 * 1000) /
              1000
          )
        });
      }, 1000);
    } else {
      this.setState({ isStart: true });
      clearInterval(this.state.initTime);
    }
  };

  handleTimeReset = () => {
    this.setState({ hours: 0, mins: 0, seconds: 0, initTime: 0 });
  };

  render() {
    return (
      <div className="timer">
        <div>
          <div className="Units">
            <div>
              <p>{this.state.hours} : </p>
              <div>Hour</div>
            </div>

            <div style={{ marginLeft: "17px" }}>
              <p>{this.state.mins} : </p>
              <div>Minute</div>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <p>{this.state.seconds} </p>
              <div>Second</div>
            </div>
          </div>
          <div className="buttons">
            <button className="btn" onClick={this.handleTimeStart}>
              {this.state.isStart ? "start" : "stop"}
            </button>
            <button className="btn" onClick={this.handleTimeReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

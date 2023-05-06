import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

class Box extends Component {

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.props.bgcolor,
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
          }}
        >yy</div>
        <button onClick={this.props.removeBox}>X</button>
      </div>

    );
  }
}

export default Box;

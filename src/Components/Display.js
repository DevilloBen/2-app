import React, { Component } from "react";
import "../Css/Allcomponents.css";
export class Display extends Component {
  render() {
    return <div className="Display">{this.props.data}</div>;
  }
}

export default Display;

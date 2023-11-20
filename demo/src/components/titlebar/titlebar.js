import React, { Component } from "react";

class Titlebar extends Component {
  render() {
    return (
    <>
    <div>{this.props.data.title}  in {this.props.data.place}</div>
    <button onClick={this.props.changePlace}>child</button>
    </>)
  }
}

export default Titlebar;

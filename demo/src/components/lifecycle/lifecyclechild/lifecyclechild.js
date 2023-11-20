import React, { Component } from "react";

class Lifecyclechild extends Component {
  constructor(){
    super()
    console.log("child constructor");
  }
  componentDidMount=()=>{
    console.log("did mount child");
  }
  componentDidUpdate=()=>{
    console.log("didupdate child");
    
  }
  componentWillUnmount=()=>{
    console.log("will unmount");
  }
  render() {
    console.log("child render");
    return <div>Lifecyclechild</div>;
  }
}

export default Lifecyclechild;

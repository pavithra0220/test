import React, { Component } from "react";
import Lifecyclechild from "./lifecyclechild/lifecyclechild";
class Lifecycle extends Component {
  constructor()
  {
    console.log("constructor parent")
    super()
    this.state={
      title:"operations",
      show:true
    }
  }
  componentDidMount=()=>{
       console.log("comp did mount parent")
  }
  updateStates=()=>{
    this.setState({title:"crud"})
  }
  componentDidUpdate=()=>{
    console.log("didupdatemount parent");
    
  }
  shouldComponentUpdate=()=>{
    return true
  }
  render() {
    console.log("render parent")
    return (
    <>
    <div>{this.state.title}</div>
    <button onClick={this.updateStates}>change</button>
    <button onClick={()=>this.setState({show:false})}>remove child</button>
    {this.state.show ? <Lifecyclechild></Lifecyclechild>: ""}
    </>)
  }
}

export default Lifecycle

import React, { Component } from "react";
import Titlebar from "../titlebar/titlebar";
import Titlebarinput from "../titlebarinput/titlebarinput";
class Inputtask extends Component {
  constructor(){
    super()
    this.state={
      title:"m.o.p",
      place:"chennai"
    }
  }
  updatebutton=()=>{
     this.setState({title:"pavi",place:"urak"},(console.log(this.state.title,this.state.place))
     )
  }
  updateTitle=(title)=>{
    this.setState(title)
  }
  render() {
    return(
    <>
    <p>{this.state.title} in {this.state.place}</p>
    {/* <button onClick={this.updatebutton} >button</button> */}
    <Titlebar data={this.state} changePlace={this.updatebutton}></Titlebar>
    <Titlebarinput onclick={this.updateTitle}></Titlebarinput>
    </>)
  }
}

export default Inputtask;

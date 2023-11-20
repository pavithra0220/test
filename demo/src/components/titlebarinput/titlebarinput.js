import React, { Component } from "react";

class Titlebarinput extends Component {
  constructor(){
    super();
      this.state={
        title:""
      
    }

  }
  changeTitle=(evt)=>{
    this.setState({title:evt.target.value})
  }
  render() {
    return (
      <>
       <input type="text" value={this.state.title} onChange={(e)=>this.changeTitle(e)}/>
       <button onClick={()=>this.props.changeTitle(this.state.title)}>change title through Child</button>

      </>
    )
  }
}

export default Titlebarinput;

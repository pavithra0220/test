import React, { Component } from "react";

class Header extends Component {
  constructor(){
    super();
    this.state={
      count:0,
    }
    
  }
  increment=()=>{
     this.setState((prev)=>({
      count:prev.count+1
    }))
  }
  decrement=()=>{
    this.setState((prev)=>({
      count:prev.count-1
    }))
  }
  render() {
    return (
      <>
         <p>{this.state.count}</p>
         <button onClick={this.increment}>increment</button>
         <button onClick={this.decrement}>decrement</button>
         </>
    );
  }
}

export default Header;

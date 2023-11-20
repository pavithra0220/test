import React, { Component } from "react";

class Fetchlist extends Component {
  constructor(){
    super()
    this.state={
      atheticdata:[]
    }
  }
  componentDidMount(){
    fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json").then(res=>res.json().then(resp=>{
      console.log(resp);
     this.setState( {atheticdata:resp})
    }))
    
  }
  render() {
    const {atheticdata}= this.state

    return (
    <>
  <h2>data</h2>
   <ol>
    {
      atheticdata && atheticdata.length >0 && atheticdata.map((item,index)=>{
         return(<li key={index}>{item.country}</li>)
      })
    }
   </ol>
    
  

        
        </>)
  }
}

export default Fetchlist;

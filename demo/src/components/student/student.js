import React, { Component } from "react";
import axios from "axios";
class Student extends Component {
  constructor() {
    super()
    this.state = {
      student: [],
      // name: "fff",
      age:""
    }
  }
  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      console.log("resp", resp)
      this.setState({ student: resp.data }, () => {
        console.log("this.state", this.state);
      })
    })
  }
  addData = () => {
    axios.post("http://localhost:3000/student",{age: this.state.age}).then((resp) => {
      console.log("resp", resp)
      this.getData()
    })
  }
  
  render() {
    const { student } = this.state
    return (
      <>
        <input type="text" onChange={(e) => this.setState({age:e.target.value})}></input>
        <button onClick={this.addData}>ADD</button>
        

        <ul>
          {student && student.length > 0 && student.map((stud) => {
            return <li key={stud.id}>{stud.age}</li>
          })}
        </ul>

      </>

    );
  }
}

export default Student;



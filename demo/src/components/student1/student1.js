import React, { Component } from "react";
import axios from "axios";
class Student1 extends Component {
  constructor() {
    super()
    this.state = {
      student1: [],
      name: "",
      editId:{
        id: null,
          newName: ""
      }
    }
  }
  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    axios.get("http://localhost:3000/student1").then((resp) => {
      console.log("resp", resp)
      this.setState({ student1: resp.data }, () => {
        console.log("this.state", this.state);
      })
    })
  }
  addData = () => {
    axios.post("http://localhost:3000/student1", { name: this.state.name }).then((resp) => {
      console.log("resp", resp)
      this.getData()
    })
  }

  deleteData = (id) => {
    axios.delete(`http://localhost:3000/student1/${id}`).then((resp) => {
      console.log("resp", resp)
      this.setState((prevState) => ({
        student1: prevState.student1.filter(stu => stu.id !== id)
      }))

    })
  }
  editData = () => {
    const { editId } = this.state;
    axios
      .put(`http://localhost:3000/student/${editId.id}`, {
        name: editId.newName,
      })
      .then((res) => console.log(res, "res in edit"));
    this.getData();
    this.setState({
      editId: {
        id: null,
        newName: "",
      },
    });
  };

Efn = (id, existingData) => {
  this.setState({
    editId: {
      id: id,
      newName: existingData.name,
    },
  });
};


render() {
  const { student1 ,editId} = this.state
  return (
    <>
      <input type="text" onChange={(e) => this.setState({ name: e.target.value })}></input>
      <button onClick={this.addData}>ADD</button>
     
      <table>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
    {student1.map((alt, index) => (
      <tr key={index}>
        <td>{alt.id}</td>
        <td>
          {alt.id === editId.id ? (
            <input
              type="text"
              placeholder="Name"
              value={editId.newName}
              onChange={(e) =>
                this.setState((prevState) => ({
                  editId: {
                    ...prevState.editId,
                    newName: e.target.value,
                  },
                }))
              }
            />
          ) : (
            alt.name
          )}
        </td>
        <td>
          {alt.id === editId.id ? (
            <button onClick={this.editData}>Save</button>
          ) : (
            <>
              <button onClick={() => this.Efn(alt.id, alt)}>Edit</button>
              <button onClick={() => this.deleteData(alt.id)}>Delete</button>
            </>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>


      <ul>
        {student1 && student1.length > 0 && student1.map((stud) => {
          return <li key={stud.id}>{stud.name}</li>
        })}
      </ul>

    </>
  );
}

}
export default Student1;


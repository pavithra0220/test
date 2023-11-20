import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Link } from 'react-router-dom';
function Crud() {
  const [student1, setStudent] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", password: "" })
  const [editStudent, setEditStudent] = useState({ id: null, newName: "" })
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      console.log("response", resp);
      setStudent(resp.data);
    });
  }
  const handleclick = () => {
    axios.post("http://localhost:3000/student", newStudent).then((resps) => {
      console.log("responses", resps.data);
      getData();
      setNewStudent({ name: "", email: "", password: "" });
    })
  }
  const handleDelete = (delId) => {
    axios.delete(`http://localhost:3000/student/${delId}`).then((responses) => {
      console.log("responsess", responses);
      setStudent((prev) => prev.filter((stud) => stud.id !== delId))
    })
  }
  const handledit = (id, names) => {
    setEditStudent({
      id: id,
      newName: names.name,
      email: names.email,
      password: names.password
    })
  }
  const handleSave = () => {
    axios.put(`http://localhost:3000/student/${editStudent.id}`, { name: editStudent.newName, email: editStudent.email, password: editStudent.password }).then((res) => {
      setEditStudent({
        id: null,
        name: "",
        email: "",
        password: ""
      })

      getData()
    })
  }
  return (
    <>
      <input type="text" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}></input>
      <input type="email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}></input>
      <input type="text" value={newStudent.password} onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}></input>
      <button onClick={handleclick}>Add Student</button>
      <Link to="/functiontablecrud"><button>viewdetails</button></Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {student1.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.id === editStudent.id ? (<input type="text" value={editStudent.newName} onChange={(e) => setEditStudent(pre => ({ ...pre, newName: e.target.value }))} />) : (item.name)}

              </td>
              <td>{item.email}</td>
              <td>{item.password}</td>

              <td>
                {item.id === editStudent.id ? (<button onClick={handleSave}>save</button>) : (<button onClick={() => handledit(item.id, item)}>edit</button>)}
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </>
  );

}

export default Crud;


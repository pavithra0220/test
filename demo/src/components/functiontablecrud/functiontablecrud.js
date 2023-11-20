import React, { useEffect, useState } from "react";
import axios from "axios";
function Functiontablecrud(){
  const [student1, setStudent] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/student").then((resp) => {
      console.log("response", resp);
      setStudent(resp.data);
    });
  }

return(
  <>
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
              <td>{item.name}</td>

              <td>{item.email}</td>
              <td>{item.password}</td>
              </tr>
          ))}
        </tbody>
      </table>

  </>
)
          }
export default Functiontablecrud;

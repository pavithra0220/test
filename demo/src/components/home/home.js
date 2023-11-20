import React from "react";
import { useNavigate } from "react-router-dom";
function  Home(){
const  navigate=useNavigate()



      return (
      <>
      <input type="text"></input>
      <input type="password"></input>
      <button onClick={()=>navigate('/Fetchtable')}>button</button>
        </>
      )
      }
  

export default Home;

import React, { Component, useState } from "react";

import Functioncompentchild from "./functioncompentchild/functioncompentchild";
function Functioncompents(){
  const[name,setName]=useState("CRUD")
  return(
    <>
    {/* <div>{name}</div> */}
    <Functioncompentchild name={name}></Functioncompentchild>
    <button onClick={()=> setName("Crud operatioms")}>name</button>
    </>
  )
}


export default Functioncompents;

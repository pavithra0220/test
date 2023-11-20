import React, {  useEffect, useState } from "react";

function Functionfetch(){
  const[item,setItem]=useState([])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json").then(res=>res.json())
    .then((data)=>setItem(data));},[])



return(
  <>
  {item.map((items,index)=>{
     <li key={index}>{items.country}</li>
  })}
  </>
)
}
export default Functionfetch;

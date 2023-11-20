import React from "react";
import './imageresponsive.css'
import 'primeicons/primeicons.css';
         
function Imageresponsive(){
  return(
    <>
    <div className="content">
    <div className="leftcontent">
      <h3>Dashboard</h3>
      <li>Dashboard <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
      <li>Product  <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
      <li>customers <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
      <li>Income  <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
      <li>promotes <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
      <li>Help <i className="pi pi-angle-right" style={{ fontSize: '15px' }}></i></li>
    </div>
    <div className="right">
      <h4>Hello Shahrukh</h4>
      <i className="pi pi-dollar" style={{ fontSize: '15px' }}></i>
    </div>
    </div>
    </>
  )
}

export default Imageresponsive;

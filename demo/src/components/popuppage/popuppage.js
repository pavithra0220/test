import React  from 'react';
import './popuppage.css';

function Popuppage() {


  return (
    <div className="popup-box">
      <div className="popup-content">
      <div className='box'>
        <button > x</button>
        </div>
      <img src="header-1200.gif" alt="Header" className="top-img" />
        Name:<input type='text' placeholder="Name" cla
        ssName="form-input" />
        Password:<input type='password' placeholder="Password" className="form-input" />
        <input type='checkbox' className="form-input" />
        {/* I agree all the terms and condition */}
        <button className="submit-button" >Submit</button>
       
        </div>
        
       

        </div>
  );
}

export default Popuppage;





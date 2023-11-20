import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homewebsite.css";

function Homewebsite() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    if (username && password) {
      navigate("/productsdetails");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  }


  return (
    <div className="home">
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Homewebsite;

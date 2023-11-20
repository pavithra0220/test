import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f00c38e0279b7bc85480c3fe775d518c"
  const [location, setLocation] = useState("");
  const[currentdate,setCurrentDate]=useState("")

  const gets = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`).then((resp) => {
      console.log("resp", resp.data)
      setWeatherData(resp.data);
    })
  }
  const buttons = () => {
    gets()
   setCurrentDate(new Date())
  }
  return (
    <>
     <div className="weather">
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
      <button onClick={buttons}>search</button>
      <p>Temperature: {weatherData && (weatherData.main.temp)} °K</p>
      <p>pressure: {weatherData && (weatherData.main.pressure)} </p>
      <p>Humidity: {weatherData && (weatherData.main.humidity)} </p>
      <p>Description: {weatherData && (weatherData.weather[0].description)} </p>
      <p>current Date and Time:{currentdate.toString()}</p>
      </div>
    </>
  )
}

export default Weather;


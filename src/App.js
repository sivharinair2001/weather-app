
import React, {useState}from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=26408a958080a768936d00ee0b91e85a`
  
  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then(res=>{
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
    
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter the location'
        type="text" 
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}&deg;F</h1> :null}
          </div>
          <div className="description">
          {data.main ? <p>{data.weather[0].main}</p> :null}
          </div>
        </div>
        {data.name != undefined &&<div className="bottom">
          <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like}F</p> :null}
            
            <p>Feel Alike</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> :null}
            
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.main ? <p className="bold">{data.wind.speed}MPH</p> :null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;

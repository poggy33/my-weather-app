import React, { useState, useEffect } from "react";
import { Search, Header, Main, Footer } from "./components";
import axios from "axios";
import myDate from "./myDate";
import "./App.css";

function App() {
  const [location, setLocation] = useState("Ivano-Frankivsk");
  const [data, setData] = useState({});
  const [destOffset, setDestOffset] = useState(10800);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4f625b6c6693cf0b7d4d66e65cd65a7d`;

  const [time, setTime] = useState(
    myDate(destOffset / 3600).cityDate.slice(11)
  );

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
      setDestOffset(response.data.city.timezone);
    });
    setLocation("");
  };
  // console.log(data.list)
  useEffect(() => {
    const currentTime = () => {
      setTime(myDate(destOffset / 3600).cityDate.slice(11));
    };
    const myInterval = setInterval(currentTime, 1000);
    return () => clearInterval(myInterval);
  });
  let i = -3;
  return (
    <div className="App">
      <div className="container">
        <Search
          location={location}
          onChange={(event) => setLocation(event.target.value)}
          searchLocation={searchLocation}
        />
        {data.city ? (
          <Header
            city={data.city.name}
            temp={data.list[0].main.temp.toFixed()}
            time={time}
          />
        ) : null}
        {data.city !== undefined && (
          <div className="main-container">
            {data.list.map((item) => {
              i += 3;
          
              return (
                <Main
               
                  key={i}
                  dataCity={data.city}
                  day={myDate(destOffset / 3600 + i).weekDays[0]}
                  currentData={
                    myDate(destOffset / 3600 + i).cityDate.slice(0, 15) + "00"
                  }
                  feels={item.main.feels_like.toFixed()}
                  wind={item.wind.speed.toFixed()}
                  description={item.weather[0].description}
                />
              );
            })}
          </div>
        )}
        
      </div>

      <Footer/>
    </div>
  );
}

export default App;

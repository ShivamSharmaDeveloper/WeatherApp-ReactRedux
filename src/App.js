import "./App.css";
import logo from "./weather.png";
import CurrentWeather from "./components/current-weather/current-weather";
import Hourly from "./components/hourly/hourly";
import Search from "./components/search/search";
import Forcast from "./components/forcast/forcast";
import WeatherState from "./context/weather/WeatherState";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("Gurgaon");
  // console.log(location);
  const handleSearch = (location) => {
    setLocation(location);
    // console.log(location);
  };
  return (
    <>
      <div className="container">
        <WeatherState location={location}>
          <img className="logo" src={logo} alt="weather" />
          <h1>WeatherApp</h1>
          <Search onSearch={handleSearch} />
          <CurrentWeather />
          <Hourly />
          <hr />
          <Forcast />
        </WeatherState>
      </div>
    </>
  );
}

export default App;

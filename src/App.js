import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Hourly from "./components/hourly/hourly";
import Search from "./components/search/search";
import WeatherState from "./context/weather/WeatherState";

function App() {
  return (
    <>
      <WeatherState>
        <div className="container">
          <h1>WeatherApp</h1>
          <Search />
          <CurrentWeather />
          <Hourly />
        </div>
      </WeatherState>
    </>
  );
}

export default App;

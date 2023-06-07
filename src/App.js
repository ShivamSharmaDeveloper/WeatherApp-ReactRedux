import "./App.css";
import logo from "./weather.png";
import CurrentWeather from "./components/current-weather/current-weather";
import Hourly from "./components/hourly/hourly";
import Search from "./components/search/search";
import Forcast from "./components/forcast/forcast";
import WeatherState from "./context/weather/WeatherState";

function App() {
  return (
    // <>
    <WeatherState>
      <div className="container">
        <div className="logosection">
          <img className="logo" src={logo} alt="weather" />
          <h1>WeatherApp</h1>
        </div>
        <Search />
        <CurrentWeather />
        <Hourly />
        <hr />
        <Forcast />
      </div>
    </WeatherState>
    // </>
  );
}

export default App;

import { useContext } from "react";
import weatherContext from "../../context/weather/weatherContext";
import "../../styles/current-weather.css";

const CurrentWeather = () => {
  const { weatherData } = useContext(weatherContext);
  const { location, current, forecast } = weatherData;
  const { temp_c, feelslike_c, humidity, text, icon } = current;
  const { maxtemp_c, mintemp_c } = forecast[0];
  const iconPath = icon.split("//cdn.weatherapi.com/weather/64x64/")[1];
  const Tomorrow = forecast[1];
  const {text: wdesc, icon: twicon} = Tomorrow
  const ticon = twicon.split("//cdn.weatherapi.com/weather/64x64/")[1];

  return (
    <div className="weather">
      <div className="left">
        <div className="top">
          <div>
            <p className="city">
              {location.name} ({location.region})
            </p>
            <p className="weather-description">{text}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`/icons/${iconPath}`}
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(temp_c)}°C</p>
          <div className="details">
            <span className="parameter-details">Details:</span>
            <div className="parameter-row">
              <span className="parameter-label">Feels Like</span>
              <span className="parameter-value">
                {Math.round(feelslike_c)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">MaxTemp</span>
              <span className="parameter-value">{Math.round(maxtemp_c)}°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">MinTemp</span>
              <span className="parameter-value">{Math.round(mintemp_c)}°C</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div>
            <p className="city">Tomorrow</p>
            <p className="weather-description">{wdesc.text}</p>
          </div>
          <img alt="weather" className="weather-icon" src={`icons/${ticon}`} />
        </div>
        <div className="bottom">
          <p className="temperature-right">
            {Math.round(Tomorrow.temp_c)}°C
          </p>
          <div className="details">
            <span className="parameter-details">Details:</span>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {Math.round(Tomorrow.wind)} km/h
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">MinTemp</span>
              <span className="parameter-value">
                {Math.round(Tomorrow.mintemp_c)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {Math.round(Tomorrow.avghumidity)}%
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">MaxTemp</span>
              <span className="parameter-value">
                {Math.round(Tomorrow.maxtemp_c)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

import "./current-weather.css";

const CurrentWeather = (props) => {
  return (
    <div className="weather">
      <div className="left">
        <div className="top">
          <div>
            {/* <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p> */}
            <p className="city">New Delhi</p>
            <p className="weather-description">Sunny</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            // src={`icons/${data.weather[0].icon}.png`}
            src={`icons/01d.png`}
          />
        </div>
        <div className="bottom">
          {/* <p className="temperature">{Math.round(data.main.temp)}°C</p> */}
          <p className="temperature">35°C</p>
          <div className="details">
            <span className="parameter-details">Details:</span>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              {/* <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span> */}
              <span className="parameter-value">32°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              {/* <span className="parameter-value">{data.wind.speed} m/s</span> */}
              <span className="parameter-value">3 m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              {/* <span className="parameter-value">{data.main.humidity}%</span> */}
              <span className="parameter-value">50%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              {/* <span className="parameter-value">{data.main.pressure} hPa</span> */}
              <span className="parameter-value">5 hPa</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div>
            {/* <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p> */}
            <p className="city">Tomorrow</p>
            <p className="weather-description">Rainny</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            // src={`icons/${data.weather[0].icon}.png`}
            src={`icons/09d.png`}
          />
        </div>
        <div className="bottom">
          {/* <p className="temperature">{Math.round(data.main.temp)}°C</p> */}
          <p className="temperature-right">35°C</p>
          <div className="details">
            <span className="parameter-details">Details:</span>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              {/* <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span> */}
              <span className="parameter-value">32°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              {/* <span className="parameter-value">{data.wind.speed} m/s</span> */}
              <span className="parameter-value">3 m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              {/* <span className="parameter-value">{data.main.humidity}%</span> */}
              <span className="parameter-value">50%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              {/* <span className="parameter-value">{data.main.pressure} hPa</span> */}
              <span className="parameter-value">5 hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

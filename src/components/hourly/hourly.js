import React, { useContext } from "react";
import "./hourly.css";
import weatherContext from "../../context/weather/weatherContext";

const Hourly = () => {
  const hourly = useContext(weatherContext);
  const { forecast } = hourly;
  const { hour, date } = forecast.forecastday[0];
  // const { time, temp_c, temp_f, condition } = hour[0];
  // const Time = time.split(`${date}`)[1];
  // const { text, icon } = condition;
  // const iconPath = icon.split("//cdn.weatherapi.com/weather/64x64/")[1];

  return (
    <div className="hourly">
      {hour.map((data) => {
        const { time, temp_c, temp_f, condition } = data;
        const Time = time.split(`${date}`)[1];
        const { text, icon } = condition;
        const iconPath = icon.split("//cdn.weatherapi.com/weather/64x64/")[1];
        return (
          <div className="hourly-forcast" key={time}>
            <h1 className="Hourly__title">{Time}</h1>
            <img
              className="Hourly__weather-icon"
              src={`icons/${iconPath}`}
              alt={text}
            />
            <div className="Hourly__temperature">
              <span className="temperature__max">
                {Math.round(temp_c)}
                <sup className="temperature__symbol">°</sup>
              </span>
              <span className="temperature__min">
                {Math.round(temp_f)}
                <sup className="temperature__symbol">°</sup>
              </span>
            </div>
          </div>
        );
      })}
      {/* <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div>
      <div className="hourly-forcast">
        <h1 className="Hourly__title">16:00</h1>
        <img
          className="Hourly__weather-icon"
          src={`icons/10d.png`}
          alt="rainny"
        />
        <div className="Hourly__temperature">
          <span className="temperature__max">
            28
            <sup className="temperature__symbol">°</sup>
          </span>
          <span className="temperature__min">
            25
            <sup className="temperature__symbol">°</sup>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Hourly;

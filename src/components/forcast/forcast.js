import React, { useContext } from "react";
import "../../styles/forcast.css";
import weatherContext from "../../context/weather/weatherContext";
import moment from "moment";

const Forecast = () => {
  const { weatherData } = useContext(weatherContext);
  const { forecast } = weatherData;
  console.log(forecast)
  // const { forecastday } = forecast;

  return (
    <div className="forecast">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>MinTemp</th>
            <th>MaxTemp</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {forecast.map((day) => {
            const formattedDate = moment(day.date).format("DD-MM-YYYY");
            return (
              <tr key={day.date}>
                <td>{formattedDate}</td>
                <td>{Math.round(day.mintemp_c)}°C</td>
                <td>{Math.round(day.maxtemp_c)}°C</td>
                <td>{day.humidity}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;

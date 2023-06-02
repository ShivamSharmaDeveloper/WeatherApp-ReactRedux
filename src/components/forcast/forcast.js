import React, { useContext } from "react";
import "../../styles/forcast.css";
import weatherContext from "../../context/weather/weatherContext";
import moment from "moment";

const Forecast = () => {
  const weatherData = useContext(weatherContext);
  const { forecast } = weatherData;
  const { forecastday } = forecast;

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
          {forecastday.map((day) => {
            const formattedDate = moment(day.date).format("DD-MM-YYYY");
            return (
              <tr key={day.date}>
                <td>{formattedDate}</td>
                <td>{Math.round(day.day.mintemp_c)}°C</td>
                <td>{Math.round(day.day.maxtemp_c)}°C</td>
                <td>{day.day.avghumidity}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;

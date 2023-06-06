import React, { useState, useEffect } from "react";
import weatherContext from "./weatherContext";
import axios from "axios";

const WeatherState = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  // const [location, setLocation] = useState("Gurgaon");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(location);

  const fetchData = async (actuallocation) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${actuallocation}&days=10&aqi=no&alerts=no`
      );
      const { location, current, forecast } = response.data;
      const currentLocation = {
        name: location.name,
        region: location.region,
      };

      const currentWeather = {
        temp_c: current.temp_c,
        feelslike_c: current.feelslike_c,
        humidity: current.humidity,
        text: current.condition.text,
        icon: current.condition.icon,
        date: forecast.forecastday[0].date,
        hour: forecast.forecastday[0].hour,
      };

      const forecastWeather = forecast.forecastday.map((day) => ({
        date: day.date,
        temp_c: day.day.avgtemp_c,
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        humidity: day.day.avghumidity,
        wind: day.day.maxwind_kph,
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      }));

      setWeatherData({
        location: currentLocation,
        current: currentWeather,
        forecast: forecastWeather,
      });

      // setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setLocation = (defLocation) => {
    fetchData(defLocation);
  };

  useEffect(() => {
    fetchData("Gurgaon");
    // console.log(setWeatherData)
    // eslint-disable-next-line
  }, []);

  if (weatherData === null) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <weatherContext.Provider value={{ weatherData, setLocation }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherState;

import React, { useState, useEffect } from "react";
import weatherContext from "./weatherContext";
import axios from "axios";

const WeatherState = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    location: { name: "" },
    current: {},
    forecast: {},
  });
  // const [location, setLocation] = useState("Gurgaon");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(location);

  const fetchData = async (actuallocation) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${actuallocation}&days=10&aqi=no&alerts=no`
      );
      // console.log(actuallocation);
      let { location, current, forecast } = response.data;
      let currentLocation = {
        name: location.name,
        region: location.region,
      };
      let currentWeather = {
        temp_c: current.temp_c,
        feelslike_c: current.feelslike_c,
        humidity: current.humidity,
        text: current.condition.text,
        icon: current.condition.icon,
        date: forecast.forecastday[0].date,
        hour: forecast.forecastday[0].hour,
      };
      let forecastWeather = [];

      if (forecast.forecastday && forecast.forecastday.length > 0) {
      forecastWeather = forecast.forecastday.map((day) => ({
        date: day.date,
        temp_c: day.day.avgtemp_c,
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        humidity: day.day.avghumidity,
        wind: day.day.maxwind_kph,
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      }))};

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

  useEffect(() => {
    let locationName = weatherData.location.name || "Gurgaon";
    // console.log(locationName)
    fetchData(locationName);
    // eslint-disable-next-line
  }, [weatherData.location.name]);
  // console.log("WeatherState component rendered");
  if (Object.keys(weatherData.current).length === 0) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherState;

import React, { useState, useEffect } from "react";
import weatherContext from "./weatherContext";
import axios from "axios";

const WeatherState = ({ location, children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=no&alerts=no`
        );
        setWeatherData(response.data);
        // console.log(weatherData);
      } catch (error) {
        console.log(error);
      }
    };

    if (location) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [API_KEY, location]);

  // Render a loading state or fallback UI if weatherData is null
  if (weatherData === null) {
    return <div className="loader">Loading...</div>;
  }
  
  // console.log(location);
  return (
    <weatherContext.Provider value={weatherData}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherState;

import React, { useState, useEffect } from "react";
import weatherContext from "./weatherContext";
import axios from "axios";

const WeatherState = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  // const [location, setLocation] = useState("Gurgaon");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log(location);
  const setLocation = (location) => {
    fetchData(location);
  };

  const fetchData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
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

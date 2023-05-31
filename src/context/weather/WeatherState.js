import React from "react";
import weatherContext from "./weatherContext";

const WeatherState = (props) => {
    const state = {
        "name": "Shivam",
        "class": "10"
    }
    return (
      <weatherContext.Provider value={state}>
        {props.children}
      </weatherContext.Provider>
    );
};

export default WeatherState;

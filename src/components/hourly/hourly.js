import React, { useContext, useEffect, useRef } from "react";
import "../../styles/hourly.css";
import weatherContext from "../../context/weather/weatherContext";

const Hourly = () => {
  const { weatherData } = useContext(weatherContext);
  const { current } = weatherData;
  const { hour, date } = current;
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const cardWidth = container.querySelector(".hourly-forcast").offsetWidth;
    const numCards = Math.floor(container.offsetWidth / cardWidth);
    const scrollAmount = cardWidth * numCards;

    if (e.currentTarget.id === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    showHideIcons();
  };

  const showHideIcons = () => {
    const container = containerRef.current;
    const arrow = document.querySelectorAll(".hourly i");
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;

    if (scrollLeft === 0) {
      arrow[0].style.display = "none"; // Hide left arrow
    } else {
      arrow[0].style.display = "block"; // Show left arrow
    }

    if (scrollLeft >= scrollWidth - clientWidth) {
      arrow[1].style.display = "none"; // Hide right arrow
    } else {
      arrow[1].style.display = "block"; // Show right arrow
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      showHideIcons();
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentHour = new Date().toISOString().slice(0, 13);

  return (
    <div className="hourly">
      <div className="hourly-container" ref={containerRef}>
        <i
          id="left"
          className="fa-solid fa-angle-left"
          onClick={handleClick}
        ></i>
        {hour.map((data, index) => {
          const { time, temp_c, temp_f, condition } = data;
          const Time = time.split(`${date}`)[1];
          const { text, icon } = condition;
          const iconPath = icon.split("//cdn.weatherapi.com/weather/64x64/")[1];
          const cardTime = new Date(time).toISOString().slice(0, 13);

          if (cardTime < currentHour) {
            return null; // Hide cards before current time
          }

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
        <i
          id="right"
          className="fa-solid fa-angle-right"
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
};

export default Hourly;

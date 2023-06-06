import React, { useContext, useEffect, useRef } from "react";
import "../../styles/hourly.css";
import weatherContext from "../../context/weather/weatherContext";

const Hourly = () => {
  const { weatherData } = useContext(weatherContext);
  const { forecast } = weatherData;
  const { hour, date } = forecast.forecastday[0];
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
  };

  const showHideIcons = () => {
    const container = containerRef.current;
    const arrow = document.querySelectorAll(".hourly i");
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (container.scrollLeft === 0) {
      arrow[0].style.display = "none"; // Hide left icon
    } else {
      arrow[0].style.display = "block"; // Show left icon
    }

    if (container.scrollLeft >= scrollWidth - clientWidth) {
      arrow[1].style.display = "none"; // Hide right icon
    } else {
      arrow[1].style.display = "block"; // Show right icon
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;

    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = container.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      container.classList.add("dragging");
      const positionDiff = e.pageX - prevPageX;
      container.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
      isDragStart = false;
      container.classList.remove("dragging");
      showHideIcons();
    };

    container.addEventListener("mousedown", dragStart);
    container.addEventListener("mousemove", dragging);
    container.addEventListener("mouseup", dragStop);
    container.addEventListener("mouseleave", dragStop);

    return () => {
      container.removeEventListener("mousedown", dragStart);
      container.removeEventListener("mousemove", dragging);
      container.removeEventListener("mouseup", dragStop);
      container.removeEventListener("mouseleave", dragStop);
    };
  }, []);

  useEffect(() => {
    showHideIcons();
  }, []);

  return (
    <div className="hourly">
      <div className="hourly-container" ref={containerRef}>
        <i
          id="left"
          className="fa-solid fa-angle-left"
          onClick={handleClick}
        ></i>
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

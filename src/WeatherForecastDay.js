import React from "react";

export default function WeatherForecastDay(data) {
  function maxTemperature() {
    let temperature = Math.round(data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()} </div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

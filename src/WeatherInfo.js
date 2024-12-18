import React from "react";
import FormatDate from "./formatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} </h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt="forecast_icon" />

          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 0%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

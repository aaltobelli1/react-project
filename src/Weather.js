import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
        />
        <input type="submit" value="Search" className="btn-btn-primary" />
      </form>
      <h1>Chicago</h1>
      <ul>
        <li>Monday 12:00 </li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />
          60° F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 0%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

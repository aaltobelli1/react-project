import React from "react";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by Amanda Altobelli and is
          <a
            href="https://github.com/aaltobelli1/react-project"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

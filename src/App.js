import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./style.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  return (
    <div className="App">
      <Search setQuery={setQuery} query={query} setWeather={setWeather} />
      {typeof weather.main != "undefined" ? <Weather weather={weather} /> : ""}
    </div>
  );
}

export default App;

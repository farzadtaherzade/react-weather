import React from "react";
import axios from "axios";

export default function Search({ setQuery, query, setWeather }) {
  const api = {
    key: "f4d643e4f7552d3a96f02c52e40f3fea",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const inputTextHandler = (e) => {
    setQuery(e.target.value);
  };
  const searchWeatherHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(`${api.base}?q=${query}&appid=${api.key}`);
    console.log(response);
    await setWeather(response.data);
    setQuery("");
  };

  return (
    <form className="search" onSubmit={searchWeatherHandler}>
      <input
        type="text"
        className="search-box"
        placeholder="Search ..."
        onChange={inputTextHandler}
        value={query}
      />
      <button type="submit" className="search-icon">
        <i className="fa fa-search" aria-hidden="true" type="submit"></i>
      </button>
    </form>
  );
}

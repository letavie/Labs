import React, { useState, useEffect } from "react";
import filmsData from "../ListOfFilms/ListOfFilms";
import { Link } from "react-router-dom";
import "./Films.css";

//import icon
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Films = () => {
  const [theme, setTheme] = useState(false);

  //xu li light dark
  const toggleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div>
      <div className="nav"></div>

      <div className="body-container">
        <div className="toggleTheme">
          <button onClick={toggleTheme}>
            {/* {isDarkMode ? setLightTheme : setDarkTheme} */}
            {theme ? <Brightness4Icon /> : <DarkModeIcon />}
          </button>
        </div>
        <div className="films-container">
          {filmsData.map((film) => (
            <div key={film.id} className="film-card">
              <Link className="link" to={`/film/${film.id}`}>
                <img src={film.image} alt={film.title} className="film-image" />
                <h2 className="film-title">{film.title}</h2>
                {/* <p className="film-year">Year: {film.year}</p>
              <p className="film-nation">Nation: {film.nation}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Films;

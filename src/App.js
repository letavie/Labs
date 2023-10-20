import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmDetail from "./components/FilmDetai/FilmDetai";
import Films from "./components/Films/Films";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/" element={<Films />} />

        {/* Các Route khác */}
      </Routes>
    </Router>
  );
};

export default App;

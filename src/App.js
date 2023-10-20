import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmDetail from "./components/FilmDetai/FilmDetai";
import Films from "./components/Films/Films";
import About from "./components/pages/Abouts/About";
import Contact from "./components/pages/Contact/Contact";
import Detail from "./components/pages/Detail/Detail";
import Index from "./components/pages/Index/Index";
import New from "./components/pages/News/News";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/New" element={<New />} />

        {/* Các Route khác */}
      </Routes>
    </Router>
  );
};

export default App;

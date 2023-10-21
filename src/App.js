import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmDetail from "./components/FilmDetai/FilmDetai";
import Films from "./components/Films/Films";
import About from "./components/pages/Abouts/About";
import Contact from "./components/pages/Contact/Contact";
import Detail from "./components/pages/Detail/Detail";

import New from "./components/pages/News/News";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/film/:id" element={<FilmDetail />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Index" element={<Films />} />
          <Route path="/New" element={<New />} />

          {/* Các Route khác */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

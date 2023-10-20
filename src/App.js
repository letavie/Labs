import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilmDetail from "./components/FilmDetail";
import Films from "./components/Films";
import About from "./components/About";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import News from "./components/News";

const App = () => {
  return (
    <Router>
      <Route path="/film/:filmId" component={FilmDetail} />
      <Route exact path="/" component={Films} />
      <Route path="/detail" component={Detail} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default App;

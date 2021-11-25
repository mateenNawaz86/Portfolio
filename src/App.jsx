import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import ProdList from "./components/Prod-List/ProdList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <About />
      <ProdList />
      <Contact />
    </Router>
  );
};

export default App;

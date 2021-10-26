import React from "react";
import Navbar from "./Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Header />
    </Router>
  );
};

export default App;

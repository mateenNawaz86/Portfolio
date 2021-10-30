import React from "react";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import ProdList from "./components/Prod-List/ProdList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <ProdList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

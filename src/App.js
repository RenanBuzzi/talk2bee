import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import JoingHive from "./Pages/JoingHive";
import HowItWorks from "./Pages/HowItWorks";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/JoingHive" component={JoingHive} />
          <Route path="/HowItWorks" component={HowItWorks} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

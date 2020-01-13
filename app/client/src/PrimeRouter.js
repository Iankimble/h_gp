import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./Basic/Main";
import Menu from "./Basic/Menu";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Events from "./pages/Events";

const PrimeRouter = () => (
  <div>
    <Menu />
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/calculator" component={Calculator} />
    <Route exact path="/events" component={Events} />
    {/* Logic for going to external blog page*/}
  </div>
);

export default PrimeRouter;

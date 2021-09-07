import React from "react";
import HeaderNav from "./RouterStudy/HeaderNav";
import HomePage from "./RouterStudy/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./RouterStudy/ContactPage";
import AboutPage from "./RouterStudy/AboutPage";
import HelpPage from "./RouterStudy/HelpPage";
import SimpleGame from "./SimpleGame/SimpleGame";

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={SimpleGame} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/help" component={HelpPage} />
      </Switch>
    </Router>
  );
};

export default App;

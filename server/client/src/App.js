import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Switch,Route } from "react-router-dom";
import FlyHigh  from "./containers/FlyHigh";
import SleepDeep from "./containers/SleepDeep";
import ExperienceGuide from "./containers/ExperienceGuide";
import Hub from "./containers/Hub";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/FlyHigh" component={FlyHigh} />
        <Route exact path="/SleepDeep" component={SleepDeep} />
        <Route exact path="/ExperienceGuide" component={ExperienceGuide} />
        <Route exact path="/" component={Hub} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import LogInView from "./views/logIn";
import SignUpView from "./views/signUp";
import NbaTeams from "./views/nbaTeams";
import NbaPlayer from "./views/nbaPlayer";
import Home from "./views/homeView";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LogInView} />
      <Route path="/signUp" component={SignUpView} />
      <Route path="/home" component={Home} />
      <Route path="/NbaTeams" component={NbaTeams} />
      <Route path="/NbaPlayer" component={NbaPlayer} />
    </Switch>
  );
}

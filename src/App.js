import React from "react";
import { Route, Switch } from "react-router-dom";
import LogInView from "./views/logIn";
import SignUpView from "./views/signUp";
import Main from "./views/main";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LogInView} />
      <Route path="/signUp" component={SignUpView} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "./logIn";
import SignUp from "./signUp";
import Main from "./main";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}
